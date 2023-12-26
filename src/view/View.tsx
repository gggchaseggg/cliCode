import React, {useEffect} from 'react'
import {Main} from './Main'
import {gameStore} from '../stores'

const View = () => {
  useEffect(() => {
    gameStore.getStateFromStorage()
  }, [])

  return <Main />
}

export default View
