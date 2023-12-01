import auth from '@react-native-firebase/auth'
import {GoogleSignin} from '@react-native-google-signin/google-signin'

export const onGoogleButtonPress = async () => {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices()

  // Get the users ID token
  const userInfo = await GoogleSignin.signIn()
  console.log(userInfo)
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken)

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential)
}
