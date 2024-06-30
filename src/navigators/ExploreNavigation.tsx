import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EventDetail, HomeScreen } from '../screens'
import SearchEvents from '../screens/events/SearchEvents'

const ExploreNavigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='SearchEvents' component={SearchEvents} />
            <Stack.Screen name='EventDetail' component={EventDetail} />
        </Stack.Navigator>
    )
}

export default ExploreNavigation