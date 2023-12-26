import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'space-between',
  },
  pressable: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typingContainer: {
    backgroundColor: 'transparent',
    width: 260,
    height: 220,
    transform: [{translateY: -25}, {translateX: -6}],
  },
  typingText: {
    color: '#13a10e',
    fontSize: 10,
  },
})
