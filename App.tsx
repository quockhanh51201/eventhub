import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import FlashMessage from 'react-native-flash-message'
import { Provider } from 'react-redux'
import AppNavigator from './src/navigators/AppNavigator'
import store from './src/redux/store'
import { heightStatusBar } from './src/styles/globalStyles'

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
          <FlashMessage position="top" style={{ paddingTop: heightStatusBar }} />
        </NavigationContainer>
      </Provider>
    </>
  )
}

export default App