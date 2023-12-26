import {makeAutoObservable, runInAction} from 'mobx'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {GameState} from '../models'
import {defaultSupports} from './supports.data'
import {generateRandomCharacter} from '../view/Main/Main.utils'
import Sound from 'react-native-sound'
import firestore from '@react-native-firebase/firestore'

class GameStore {
  public count = 0
  public string = ''
  public supports = defaultSupports
  public sound = new Sound('click')
  public volume = 1

  constructor() {
    makeAutoObservable(this)
  }

  public setVolume = (volume: number) => {
    this.volume = volume
  }

  public increaseClick = (character: string) => {
    let increaseCount = 1

    this.supports.forEach((support) => {
      if (!support.has) return
      increaseCount *= support.multiplier
    })

    this.sound.setVolume(this.volume).play()
    runInAction(() => {
      this.count += increaseCount
      this.string += character
    })
  }

  public increaseIteration = () => {
    let increaseCount = 0
    let countSupports = 0

    this.supports.forEach((support) => {
      if (!support.has) return
      countSupports += 1
      increaseCount += support.increase * support.level
    })

    if (countSupports === 0) return
    // this.sound.stop(() => this.sound.setVolume(this.volume).play())
    runInAction(() => {
      this.count += increaseCount
      this.string += generateRandomCharacter(countSupports)
    })
  }

  public getStateFromStorage = async () => {
    const gameState: GameState = JSON.parse(
      (await AsyncStorage.getItem('game-state')) ?? '{}',
    )

    runInAction(() => {
      this.count = gameState.count ? gameState.count : 0
      this.string = gameState.string ? gameState.string : ''
      this.supports = gameState.supports ? gameState.supports : defaultSupports
    })
  }

  public setStateToStorage = async () => {
    const gameState = JSON.stringify({
      count: this.count,
      string: this.string,
      supports: this.supports,
    })

    await AsyncStorage.setItem('game-state', gameState)
  }

  public updateSupport = (id: number) => {
    this.supports = this.supports.map((item) => {
      if (item.id !== id) return item

      if (!item.has) {
        this.count -= item.cost
        return {
          ...item,
          level: 1,
          has: true,
        }
      }

      this.count -= item.cost / 5
      return {
        ...item,
        level: ++item.level,
      }
    })
  }

  public saveToFirestore = (email: string) => {
    console.log(123)
    firestore().collection('userStore').doc(email).set({
      count: this.count,
      string: this.string,
      supports: this.supports,
    })
  }

  public getDataFromFirestore = async (email: string) => {
    const data = (
      await firestore().collection<GameState>('userStore').doc(email).get()
    ).data()

    runInAction(() => {
      if (data) {
        this.count = data.count
        this.string = data.string
        this.supports = data.supports
      }
    })
  }
}

export const gameStore = new GameStore()
