import {Button, View} from 'react-native'
import firestore from '@react-native-firebase/firestore'

const TestBase = () => {
  const onCLick = () => {
    firestore().collection('testData').add({
      name: 'daniil',
      data: new Date().toISOString()
    })
  }

  return (
    <View
      style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Button title={'Тест базы'} onPress={onCLick}/>
    </View>
  )
}

export default TestBase
