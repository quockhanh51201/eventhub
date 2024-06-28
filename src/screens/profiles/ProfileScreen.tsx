import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ButtonComponents } from '../../components'
import { removeAuth } from '../../redux/reducers/authReducer'

const ProfileScreen = () => {
  const dispatch = useDispatch()
  return (
    <View>
      <Text>ProfileScreen</Text>
      <ButtonComponents
        text='Logout'
        type='primary'
        onpress={() => dispatch(removeAuth())}
      />
    </View>
  )
}

export default ProfileScreen