import React, { ReactNode } from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import TextComponents from './TextComponents'
import { globalStyles } from '../styles/globalStyles'
import SpaceComponents from './SpaceComponents'
import { appColor } from '../constants/appColors'
import { appFontFamilies } from '../constants/appFontFamilies'


interface Props {
    onPress?: () => void
    label: string
    icon: ReactNode
    textColor?: string
    bgColor?: string
    styles?: StyleProp<ViewStyle>
}
const TagComponents = (props: Props) => {
    const { onPress, label, icon, textColor, bgColor, styles } = props
    return (
        <TouchableOpacity style={[globalStyles.row, globalStyles.tag, {
            backgroundColor: bgColor ?? appColor.white,
        }, styles]}
            onPress={onPress}
        >
            {icon && icon}
            {icon && <SpaceComponents width={5} />}
            <TextComponents text={label} color={textColor} font={appFontFamilies.medium} />
        </TouchableOpacity>
    )
}

export default TagComponents