import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#603C33',
    height: 60,
    alignItems: 'center',
    borderStyle: 'solid',
    borderTopWidth: 3,
    borderTopColor: '#531E10',
  },
  button: {
    width: '48%',
    height: 50,
    borderStyle: 'solid',
    borderColor: '#804030',
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#C07866',
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
