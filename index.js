import {AppRegistry} from 'react-native'
import {TestBase} from './src/view'
import {name as appName} from './app.json'
import {GoogleSignin} from '@react-native-google-signin/google-signin'

GoogleSignin.configure({
  webClientId:
    '538906760519-4rabcf9ilsgfqglg8stf513j39jeamal.apps.googleusercontent.com',
})

AppRegistry.registerComponent(appName, () => TestBase)
