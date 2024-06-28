import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import DrawerNavigatior from './DrawerNavigatior'

const MainNavigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Main' component={DrawerNavigatior} />
        </Stack.Navigator>
    )
}

export default MainNavigation