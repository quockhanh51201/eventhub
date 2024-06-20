import React from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector, removeAuth } from '../../redux/reducers/authReducer'
import asyncStorage from '../../utils/asyncStorage/asyncStorage'
import { appStorage } from '../../constants/appStorage'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const auth = useSelector(authSelector)

  const handleLogout = () => {
    asyncStorage.removeItemFromStorage(appStorage.token)
    // asyncStorage.clearStorage()
    dispatch(removeAuth())
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen</Text>
      <Button title='dang xuat' onPress={() => handleLogout()} />
    </View>
  )
}

export default HomeScreen