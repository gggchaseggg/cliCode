import React, {useState} from 'react'
import {style} from './BottomNavigation.styles'
import {Pressable, Text, View} from 'react-native'
import {ShopModal} from '../ShopModal'

const BottomNavigation = () => {
  const [isShopOpen, setIsShopOpen] = useState(false)

  const toggleIsShopOpen = () => {
    setIsShopOpen((prevState) => !prevState)
  }

  return (
    <View style={style.buttonsContainer}>
      <Pressable style={style.button} onPress={toggleIsShopOpen}>
        <Text>первая</Text>
      </Pressable>
      <Pressable style={style.button}>
        <Text>вторая</Text>
      </Pressable>
      <ShopModal visible={isShopOpen} toggleIsShopOpen={toggleIsShopOpen} />
    </View>
  )
}

export default BottomNavigation
