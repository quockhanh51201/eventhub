import React, { useState } from 'react'
import { ButtonComponents, SectionComponents, SpaceComponents, TextComponents, TextInputComponents } from '../../components'
import ContainerComponents from '../../components/ContainerComponents'
import { ArrowCircleRight2, Sms } from 'iconsax-react-native'
import { appColor } from '../../constants/appColors'

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('')
    return (
        <ContainerComponents back isImageBackground>
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
                />
            </SectionComponents>
        </ContainerComponents>
    )
}

export default ForgotPasswordScreen