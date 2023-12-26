export const generateRandomCharacter = (length: number = 1) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789;:/|\\\'"$#*+-=_(){}[]<>,. \t\n'

  let text = ''

  for (let i = 0; i < length; i++) {
    text += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return text
}
