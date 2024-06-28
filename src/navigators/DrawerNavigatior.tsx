import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { DrawerCustom } from '../components'
import TabNavigator from './TabNavigator'

const DrawerNavigatior = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerPosition: 'left'
        }}
            drawerContent={props => <DrawerCustom {...props} />}
        >
            <Drawer.Screen name='HomeNavigator' component={TabNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigatior