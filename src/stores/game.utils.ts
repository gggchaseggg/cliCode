import {gameStore} from './game.store'

export const saveDataInterval = () => {
  setInterval(() => {
    console.log('saved')
    gameStore.setStateToStorage()
  }, 15000)
}

export const autoClickInterval = () => {
  setInterval(() => {
    gameStore.increaseIteration()
  }, 1000)
}
