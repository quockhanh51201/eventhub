import React from 'react'
import { ButtonComponents, SectionComponents, SpaceComponents, TextComponents } from '../../../components'
import { appColor } from '../../../constants/appColors'
import { appFontFamilies } from '../../../constants/appFontFamilies'
import { Facebook, Google } from '../../../assets/svgs'

const SocialLogin = () => {
    return (
        <SectionComponents styles={{ paddingHorizontal: 48 }}>
            <TextComponents
                text='OR'
                color={appColor.gray4}
                size={16}
                font={appFontFamilies.medium}
                styles={{ textAlign: 'center' }}
            />
            <SpaceComponents height={24} />

            <ButtonComponents
                text='Login with Google'
                textColor={appColor.text_bl_2}
                textFont={appFontFamilies.regular}
                type='primary'
                color={appColor.white}
                icon={
                    <Google />
                }
                iconFlex='left'

            />
            <SpaceComponents height={17} />
            <ButtonComponents
                text='Login with Facebook'
                textColor={appColor.text_bl_2}
                textFont={appFontFamilies.regular}
                type='primary'
                color={appColor.white}
                icon={
                    <Facebook />
                }
                iconFlex='left'

            />
        </SectionComponents>
    )
}

export default SocialLogin