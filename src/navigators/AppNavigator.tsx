import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainNavigation from './MainNavigation'
import AuthNavigator from './AuthNavigator'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { authSelector } from '../redux/reducers/authReducer'
import { useSelector } from 'react-redux'
import { appStorage } from '../constants/appStorage'
import { SplashScreen } from '../screens'

const AppNavigator = () => {
    const auth = useSelector(authSelector)
    const { getItem } = useAsyncStorage(appStorage.token)
    const [token, setToken] = useState<string | null>('')
    const [isShowSplash, setIsShowSplash] = useState(true)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsShowSplash(false)
        }, 2000);
        return () => clearTimeout(timeOut)
    }, [])

    // console.log(auth.accessToken)
    const checkLogin = async () => {
        setToken(await getItem());
    }
    useEffect(() => {
        checkLogin()
    }, [auth])
    return (
        <>
            {
                isShowSplash ? <SplashScreen /> : token ? <MainNavigation /> : <AuthNavigator />
            }
        </>
    )
}

export default AppNavigator