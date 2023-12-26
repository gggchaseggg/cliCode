import React, {FC} from 'react'
import {HeaderProps} from './Header.types'
import {Pressable, Text, View} from 'react-native'
import {style} from './Header.styles'

const Header: FC<HeaderProps> = ({toggleIsShopOpen}) => {
  return (
    <View style={style.container}>
      <Pressable onPress={toggleIsShopOpen}>
        <Text>Закрыть</Text>
      </Pressable>
    </View>
  )
}

export default Header
