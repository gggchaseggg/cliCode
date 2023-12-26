import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import {GoogleSignin} from '@react-native-google-signin/google-signin'
import {View} from './src/view'
import {autoClickInterval, saveDataInterval} from './src/stores/game.utils'

GoogleSignin.configure({
  webClientId:
    '538906760519-4rabcf9ilsgfqglg8stf513j39jeamal.apps.googleusercontent.com',
})

saveDataInterval()
autoClickInterval()

AppRegistry.registerComponent(appName, () => View)
