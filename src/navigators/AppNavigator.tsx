import { View, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import MainNavigation from './MainNavigation'
import AuthNavigator from './AuthNavigator'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { addAuth, authSelector } from '../redux/reducers/authReducer'
import { useDispatch, useSelector } from 'react-redux'
import { appStorage } from '../constants/appStorage'
import { SplashScreen } from '../screens'

const AppNavigator = () => {
    const auth = useSelector(authSelector)
    const { getItem } = useAsyncStorage(appStorage.token)
    const [isShowSplash, setIsShowSplash] = useState(true)
    const dispatch = useDispatch()


    useLayoutEffect(() => {
        checkLogin()
    }, [auth])

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsShowSplash(false)
        }, 2000);
        return () => clearTimeout(timeOut)
    }, [])

    const checkLogin = async () => {
        const res = await getItem()
        // res && dispatch(addAuth(res))
    }
    return (
        <>
            {
                isShowSplash ? <SplashScreen /> : auth.accessToken ? <MainNavigation /> : <AuthNavigator />
            }
        </>
    )
}

export default AppNavigator