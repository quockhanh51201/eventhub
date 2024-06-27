import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { EventScreen } from '../screens'

const EventNavigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='EventScreen' component={EventScreen} />
        </Stack.Navigator>
    )
}

export default EventNavigation