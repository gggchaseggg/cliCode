import {Button, View} from 'react-native'

const TestBase = () => {
  const onCLick = () => {
    console.log(123)
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
    </View>
  )
}

export default TestBase
