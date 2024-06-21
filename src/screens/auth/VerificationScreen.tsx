import { ArrowRight } from 'iconsax-react-native'
import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import authenticationAPI from '../../api/authApi'
import { ButtonComponents, RowComponents, SectionComponents, SpaceComponents, TextComponents } from '../../components'
import ContainerComponents from '../../components/ContainerComponents'
import { appColor } from '../../constants/appColors'
import { appFontFamilies } from '../../constants/appFontFamilies'
import { globalStyles } from '../../styles/globalStyles'
import { LoadingModal } from '../../Modals'
import showToastMsg from '../../utils'
import asyncStorage from '../../utils/asyncStorage/asyncStorage'
import { appStorage } from '../../constants/appStorage'
import { useDispatch } from 'react-redux'
import { addAuth } from '../../redux/reducers/authReducer'

const VerificationScreen = ({ navigation, route }: any) => {

    const dispatch = useDispatch()

    const { res, values } = route.params

    const [codeValues, setCodeValues] = useState<string[]>([])
    const [stringCode, setStringCode] = useState<string>('')
    const [limit, setLimit] = useState<number>(120)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [currentCode, setCurrenCode] = useState<string>('')

    const ref1 = useRef<any>();
    const ref2 = useRef<any>();
    const ref3 = useRef<any>();
    const ref4 = useRef<any>();

    useEffect(() => {
        ref1.current.focus();
        setCurrenCode(res.data.code)
    }, [])
    useEffect(() => {
        let code = ''
        codeValues.forEach((values) => (code += values))
        setStringCode(code)
    }, [codeValues])
    useEffect(() => {
        if (limit > 0) {
            const interval = setInterval(() => {
                setLimit(li => li - 1)
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [currentCode])
    const handleChangeCode = (val: string, index: number) => {
        const data = [...codeValues]
        data[index] = val
        setCodeValues(data);
    }
    const handleResendVerification = async () => {
        setIsLoading(true)
        const api = '/verification'
        try {
            const res: any = await authenticationAPI.HandleAuthantication(
                api,
                { email: values.email },
                'post'
            )
            setLimit(120)
            setCurrenCode(res.data.code)
            setCodeValues([])
            ref1.current.focus();
            setIsLoading(false)
        } catch (error) {
            console.log(`Can not send verification code ${error}`)
            setIsLoading(false)
        }
    }
    const handleVerification = async () => {
        if (limit > 0) {
            parseInt(currentCode) !== parseInt(stringCode)
                ? showToastMsg({
                    message: 'Invalid code!',
                    type: 'danger',
                    icon: 'danger'
                })
                : handleRegister()

        }
        else {
            showToastMsg({
                message: 'Timeout verification code, please resend new verification code !',
                type: 'danger',
                icon: 'danger'
            })
        }
    }
    const handleRegister = async () => {
        let api = '/register'
        let data = {
            useName: values.useName,
            email: values.email,
            pass: values.pass
        }
        try {
            const res: any = await authenticationAPI.HandleAuthantication(
                api,
                data,
                'post'
            )
            asyncStorage.addStorage(appStorage.token, res.data.accessToken)
            asyncStorage.addStorage(appStorage.useID, res.data.id)
            asyncStorage.addStorage(appStorage.useEmail, res.data.email)
            dispatch(addAuth(res.data))
        } catch (error) {
            showToastMsg({
                message: 'User has already exist!',
                type: 'danger',
                icon: 'warning'
            })
            console.log('Can not create new use - ', error)
        }
    }
    return (
        <ContainerComponents back isImageBackground>
            <SectionComponents>
                <TextComponents
                    text='Verification'
                    title
                />
                <SpaceComponents height={12} />
                <TextComponents
                    text={`We've send you the verification code on ${values.email.replace(/.{1,5}/, (m: any) => '*'.repeat(m.length))}`}
                />
                <SpaceComponents height={40} />
                <RowComponents
                    justify='space-around'
                >
                    <TextInput
                        ref={ref1}
                        placeholder='-'
                        style={styles.input}
                        keyboardType='numeric'
                        maxLength={1}
                        value={codeValues[0]}
                        onChangeText={(val) => {
                            handleChangeCode(val, 0)
                            val && ref2.current.focus()
                        }}
                    />
                    <TextInput
                        ref={ref2}
                        placeholder='-'
                        style={styles.input}
                        keyboardType='numeric'
                        maxLength={1}
                        value={codeValues[1]}
                        onChangeText={(val) => {
                            handleChangeCode(val, 1)
                            val && ref3.current.focus()
                        }}
                    />
                    <TextInput
                        ref={ref3}
                        placeholder='-'
                        style={styles.input}
                        keyboardType='numeric'
                        maxLength={1}
                        value={codeValues[2]}
                        onChangeText={(val) => {
                            handleChangeCode(val, 2)
                            val && ref4.current.focus()
                        }}
                    />
                    <TextInput
                        ref={ref4}
                        placeholder='-'
                        style={styles.input}
                        keyboardType='numeric'
                        maxLength={1}
                        value={codeValues[3]}
                        onChangeText={(val) => {
                            handleChangeCode(val, 3)
                        }}
                    />

                </RowComponents>
            </SectionComponents>
            <SpaceComponents height={40} />
            <SectionComponents>
                <ButtonComponents
                    disable={stringCode.length !== 4}
                    text='Continue'
                    type='primary'
                    iconFlex='right'
                    icon={
                        <View style={[globalStyles.iconContainer, { backgroundColor: stringCode.length !== 4 ? '#C0C0C0' : '#3366FF' }]}>
                            <ArrowRight size={18} color={appColor.white} />
                        </View>
                    }
                    onpress={handleVerification}
                />
            </SectionComponents>
            <SpaceComponents height={24} />
            <SectionComponents>
                {
                    limit > 0
                        ?
                        <RowComponents justify='center'>
                            <TextComponents text='Re-send code in ' />
                            <TextComponents text={
                                `${(limit - (limit % 60)) / 60}:${limit - (limit - (limit % 60))}`
                            }
                                color={appColor.link} />
                        </RowComponents>
                        : <ButtonComponents
                            type='link'
                            text='Resend email verification'
                            textColor={appColor.text_bl_2}
                            onpress={handleResendVerification}
                        />
                }
                <LoadingModal visible={isLoading} />
            </SectionComponents>
        </ContainerComponents>
    )
}

export default VerificationScreen


const styles = StyleSheet.create({
    input: {
        height: 55,
        width: 55,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: appColor.gray2,
        textAlign: 'center',
        fontSize: 24,
        fontFamily: appFontFamilies.bold
    }
})