import {Button} from 'react-native'
import {onGoogleButtonPress} from './GoogleSignIn.utils'
import {GoogleSigninButton} from '@react-native-google-signin/google-signin'

const GoogleSignIn = () => {
  const handleGoogleLogin = () => {
    onGoogleButtonPress()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  // return <Button title={'Google Sign-In'} onPress={handleGoogleLogin} />
  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={handleGoogleLogin}
    />
  )
}

export default GoogleSignIn
