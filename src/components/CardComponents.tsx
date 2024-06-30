import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import { appColor } from '../constants/appColors'


interface Props {
    onPress?: () => void
    children: ReactNode
    styles?: StyleProp<ViewStyle>
    isShadow?: boolean
    color?: string
}
const CardComponents = (props: Props) => {
    const { onPress, children, styles, isShadow, color } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                globalStyles.card,
                isShadow ? globalStyles.shadow : undefined,
                {
                    backgroundColor: color ?? appColor.white
                },
                styles]}
        >
            {children}
        </TouchableOpacity>
    )
}

export default CardComponents