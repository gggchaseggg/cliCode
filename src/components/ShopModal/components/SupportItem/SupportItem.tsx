import React, {FC} from 'react'
import {Pressable, Text, View} from 'react-native'
import {SupportItemProps} from './SupportItem.types'
import {style} from './SupportItem.styles'
import {gameStore} from '../../../../stores'
import {observer} from 'mobx-react-lite'

const SupportItem: FC<SupportItemProps> = ({support}) => {
  const {count} = gameStore

  const onCostClick = () => {
    if (
      (support.has && support.cost / 5 > count) ||
      (!support.has && support.cost > count)
    ) {
      return
    }
    gameStore.updateSupport(support.id)
  }

  return (
    <View style={style.container}>
      <View style={style.infoContainer}>
        <Text style={style.level}>{support.level}</Text>
        <View style={style.textContainer}>
          <Text style={style.title}>
            {support.title} (+{support.increase * support.level})
          </Text>
          <Text style={style.description}>{support.description}</Text>
        </View>
        <Pressable style={style.button} onPress={onCostClick}>
          <Text style={style.costText}>
            {!support.has ? support.cost : support.cost / 5}
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default observer(SupportItem)
