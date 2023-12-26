import {Button, View} from 'react-native'
import {GoogleSignIn} from '../../components'

const TestBase = () => {
  const onCLick = () => {
    console.log('Click Button')
    // firestore().collection('testData').add({
    //   name: 'daniil',
    //   data: new Date().toISOString()
    // })
  }

  return (
    <View
      style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Button title={'Тест базы'} onPress={onCLick} />
      <GoogleSignIn />
    </View>
  )
}

export default TestBase
