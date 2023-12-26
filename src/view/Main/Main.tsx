import React, {LegacyRef, useEffect, useRef, useState} from 'react'
import {ImageBackground, Pressable, ScrollView, Text, View} from 'react-native'
import {Level_1} from '../../assets'
import {style} from './Main.style'
import {BottomNavigation, Header} from '../../components'
import {gameStore} from '../../stores'
import {generateRandomCharacter} from './Main.utils'
import {observer} from 'mobx-react-lite'
import auth from '@react-native-firebase/auth'

const Main = () => {
  const scrollViewRef: LegacyRef<ScrollView> = useRef(null)

  const {string} = gameStore

  const onClick = () => {
    gameStore.increaseClick(generateRandomCharacter())
  }

  const [user, setUser] = useState<object | null>(null)

  // Handle user state changes
  const onAuthStateChanged = (user: any) => {
    console.log('user', user)
    setUser(user)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  return (
    <View style={style.container}>
      <Header user={user} />
      <ImageBackground
        source={Level_1}
        resizeMode="cover"
        style={style.imageBackground}>
        <Pressable
          style={style.pressable}
          onPress={onClick}
          onLongPress={(e) => e.preventDefault()}
          android_disableSound>
          <View style={style.typingContainer}>
            <ScrollView
              ref={scrollViewRef}
              onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}>
              <Text style={style.typingText}>{string}</Text>
            </ScrollView>
          </View>
        </Pressable>
      </ImageBackground>
      <BottomNavigation />
    </View>
  )
}

export default observer(Main)
