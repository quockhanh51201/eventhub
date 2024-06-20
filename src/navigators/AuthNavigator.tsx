import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { appStorage } from '../constants/appStorage';
import { ForgotPasswordScreen, LoginScreen, Onboarding, SignUpScreen, VerificationScreen } from '../screens';
const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
    const { getItem } = useAsyncStorage(appStorage.useEmail)
    const [isExistingUser, setIsExistingUser] = useState(false)

    const checkExistingUser = async () => {
        await getItem() ? setIsExistingUser(true) : setIsExistingUser(false)
    }
    useEffect(() => {
        const fetchData = async () => {
            await checkExistingUser();
        };
        fetchData();
    }, [])
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            {/* ========== */}
            {/* <Stack.Screen name='Test' component={test} /> */}
            {/* ===== */}

            {
                !isExistingUser && < Stack.Screen name='Onboarding' component={Onboarding} />
            }
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
            <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
            <Stack.Screen name='VerificationScreen' component={VerificationScreen} />

        </Stack.Navigator>
    )
}
export default AuthNavigator