import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#603C33',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#531E10',
  },
  text: {
    color: 'white',
    fontSize: 22,
  },
  coin: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  modal: {
    width: 300,
    height: 500,
    backgroundColor: '#C07866',
    alignSelf: 'center',
    marginTop: '30%',
    borderRadius: 16,
    alignItems: 'center',
  },
  modalHeader: {
    width: '100%',
    backgroundColor: '#603C33',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#531E10',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  music: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    paddingVertical: 15,
    borderStyle: 'solid',
    borderColor: '#531E10',
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  button: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 15,
    paddingVertical: 15,
    backgroundColor: '#603C33',
    borderRadius: 50,
  },
})
