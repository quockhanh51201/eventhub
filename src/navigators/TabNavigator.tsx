import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddSquare, Calendar, Location, User } from 'iconsax-react-native';
import React, { ReactNode } from 'react';
import { Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CirleComponents, TextComponents } from '../components';
import { appColor } from '../constants/appColors';
import { AddNewScreen } from '../screens';
import EventNavigation from './EventNavigation';
import ExploreNavigation from './ExploreNavigation';
import MapNavigator from './MapNavigator';
import ProfileNavigator from './ProfileNavigator';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? 88 : 70
      },
      tabBarIcon: (({ focused, color, size }) => {
        let icon: ReactNode
        color = focused ? appColor.primary : appColor.gray5
        size = 23
        switch (route.name) {
          case 'Explore':
            icon = <MaterialIcons name='explore' size={size} color={color} />
            break
          case 'Events':
            icon = <Calendar variant='Bold' size={size} color={color} />
            break
          case 'Map':
            icon = <Location variant='Bold' size={size} color={color} />
            break
          case 'Profile':
            icon = <User variant='Bold' size={size} color={color} />
            break
          case 'Add':
            icon = <CirleComponents size={52} styles={{ marginTop: -40 }}>
              <AddSquare size={24} color={appColor.white} variant='Bold' />
            </CirleComponents>
            break
        }
        return icon
      }),
      tabBarIconStyle: {
        marginBottom: Platform.OS === 'android' ? -8 : 0,
        marginTop: 8
      },
      tabBarLabel: ({ focused }) => {
        return <TextComponents
          text={route.name === 'Add' ? '' : route.name}
          size={12}
          color={focused ? appColor.primary : appColor.gray}
          styles={{
            marginBottom: Platform.OS === 'android' ? 12 : 0
          }}
        />
      },

    })}>
      <Tab.Screen name='Explore' component={ExploreNavigation} />
      <Tab.Screen name='Events' component={EventNavigation} />
      <Tab.Screen name='Add' component={AddNewScreen} />
      <Tab.Screen name='Map' component={MapNavigator} />
      <Tab.Screen name='Profile' component={ProfileNavigator} />

    </Tab.Navigator>
  )
}

export default TabNavigator