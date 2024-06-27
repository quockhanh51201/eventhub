import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React, { Children, ReactNode } from 'react'
import { appColor } from '../constants/appColors'


interface Props {
    size?: number
    children: ReactNode
    color?: string
    onPress?: () => void
    styles?: StyleProp<ViewStyle>
}
const CirleComponents = (props: Props) => {
    const { size, children, color, onPress, styles } = props

    const localStyle: ViewStyle = {
        width: size ?? 40,
        height: size ?? 40,
        backgroundColor: color ?? appColor.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    }
    return (
        onPress ?
            <TouchableOpacity onPress={onPress}
                style={[localStyle, styles]}
            >
                {children}
            </TouchableOpacity>
            : <View
                style={[localStyle, styles]}
            >
                {children}
            </View>
    )
}

export default CirleComponents