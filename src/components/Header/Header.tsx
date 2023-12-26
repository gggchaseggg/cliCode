import {FC, useState} from 'react'
import {Image, Modal, Pressable, Switch, Text, View} from 'react-native'
import {style} from './Header.styles'
import {gameStore} from '../../stores'
import {observer} from 'mobx-react-lite'
import {Coin, Download, Setting, Upload} from '../../assets'
import {GoogleSignIn} from '../GoogleSignIn'
import {HeaderProps} from './Header.types'
import auth from '@react-native-firebase/auth'

const Header: FC<HeaderProps> = ({user}) => {
  const {count, setVolume} = gameStore

  const [modalVisible, setModalVisible] = useState(false)
  const [musicSound, setMusicSound] = useState(true)

  const toggleModal = () => {
    setModalVisible((prevState) => !prevState)
  }
  const toggleMusic = () => {
    setMusicSound((prevState) => {
      if (prevState) {
        setVolume(0)
      } else {
        setVolume(1)
      }

      return !prevState
    })
  }

  const logout = () => {
    auth().signOut()
  }

  const save = () => {
    // @ts-ignore
    if (user?.email) {
      // @ts-ignore
      gameStore.saveToFirestore(user.email)
    }
  }
  const getData = () => {
    // @ts-ignore
    if (user?.email) {
      // @ts-ignore
      gameStore.getDataFromFirestore(user.email)
    }
  }

  return (
    <View style={style.container}>
      <View style={style.coin}>
        <Image source={Coin} style={{width: 30, height: 30}} />
        <Text style={style.text}>{count}</Text>
      </View>
      <Pressable onPress={toggleModal}>
        <Image source={Setting} style={{width: 40, height: 40}} />
      </Pressable>
      <Modal visible={modalVisible} transparent animationType={'fade'}>
        <View style={style.modal}>
          <Pressable onPress={toggleModal} style={style.modalHeader}>
            <Text>Закрыть</Text>
          </Pressable>
          <View style={style.music}>
            <Text>Музыка: </Text>
            <Switch value={musicSound} onValueChange={toggleMusic} />
          </View>
          {!user ? (
            <GoogleSignIn />
          ) : (
            <>
              <Pressable onPress={logout} style={style.button}>
                <Text>Выйти</Text>
              </Pressable>
              <Pressable onPress={save} style={style.button}>
                <Image source={Upload} style={{width: 30, height: 30}} />
                <Text>Сохранить прогресс</Text>
              </Pressable>
              <Pressable onPress={getData} style={style.button}>
                <Image source={Download} style={{width: 30, height: 30}} />
                <Text>Получить прогресс</Text>
              </Pressable>
            </>
          )}
        </View>
      </Modal>
    </View>
  )
}

export default observer(Header)
