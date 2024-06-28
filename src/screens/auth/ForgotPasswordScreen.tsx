import React, { useState } from 'react'
import { ButtonComponents, SectionComponents, SpaceComponents, TextComponents, TextInputComponents } from '../../components'
import ContainerComponents from '../../components/ContainerComponents'
import { ArrowCircleRight2, Sms } from 'iconsax-react-native'
import { appColor } from '../../constants/appColors'
import { Validate } from '../../utils/validate'
import showToastMsg from '../../utils'
import { LoadingModal } from '../../Modals'
import authenticationAPI from '../../api/authApi'
import { Alert } from 'react-native'

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleCheckEmail = () => {
        return Validate.Email(email)
    }
    const handleForgotPassword = async () => {
        setIsLoading(true)
        if (handleCheckEmail()) {
            let api = '/forgotPassword'
            try {
                const res: any = await authenticationAPI.HandleAuthantication(
                    api,
                    { email },
                    'post'
                )
                Alert.alert('Send mail', 'We sended a email includes new password!')
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log('Can not creat new pasword api forgot reset ', error)
            }
        } else {
            setIsLoading(false)
            showToastMsg({
                message: 'Email không đúng định dạng !',
                type: 'warning',
                icon: 'warning'
            })
        }
    }
    return (
        <ContainerComponents back isImageBackground isScroll>
            <SectionComponents styles={{ marginRight: 100 }}>
                <TextComponents
                    text='Resset Password'
                    title
                />
                <SpaceComponents height={12} />
                <TextComponents
                    text='Please enter your email address to request a password reset'
                />
            </SectionComponents>
            <SpaceComponents height={26} />
            <SectionComponents>
                <TextInputComponents
                    value={email}
                    onChange={(val) => setEmail(val)}
                    affix={<Sms size={22} color={appColor.gray} />}
                    placeHolder='abc@gmail.com'
                    keyboardType='email-address'
                    allowClear
                />
            </SectionComponents>
            <SpaceComponents height={40} />
            <SectionComponents>
                <ButtonComponents
                    disable={!email}
                    text='Send'
                    type='primary'
                    icon={
                        <ArrowCircleRight2
                            size="22"
                            color={appColor.white}
                            variant="TwoTone"
                        />
                    }
                    iconFlex='right'
                    onpress={handleForgotPassword}
                />
            </SectionComponents>
            <LoadingModal visible={isLoading} />
        </ContainerComponents>
    )
}

export default ForgotPasswordScreen