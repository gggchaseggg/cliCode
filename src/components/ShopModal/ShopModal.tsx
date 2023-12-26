import {FC} from 'react'
import {FlatList, Modal, View} from 'react-native'
import {ShopModalProps} from './ShopModal.types'
import {Header} from './components'
import {style} from './ShopModal.styles'
import {gameStore} from '../../stores'
import {observer} from 'mobx-react-lite'
import SupportItem from './components/SupportItem/SupportItem'

const ShopModal: FC<ShopModalProps> = ({visible, toggleIsShopOpen}) => {
  const {supports} = gameStore

  return (
    <Modal visible={visible} animationType={'slide'} transparent={true}>
      <View style={style.container}>
        <Header toggleIsShopOpen={toggleIsShopOpen} />

        <FlatList
          data={supports}
          renderItem={({item}) => <SupportItem support={item} />}
        />
      </View>
    </Modal>
  )
}

export default observer(ShopModal)
