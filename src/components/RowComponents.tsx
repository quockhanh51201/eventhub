import { View, Text, StyleProp, ViewProps, TouchableOpacity, ViewStyle } from 'react-native'
import React, { Children, ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles'

interface Props {
    justify?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined,
    styles?: StyleProp<ViewStyle>
    children: ReactNode
    onpress?: () => void
}

const RowComponents = (props: Props) => {
    const { justify, styles, children, onpress } = props

    const locolStyle = [
        globalStyles.row,
        {
            justifyContent: justify
        },
        styles]
    return onpress ? (
        <TouchableOpacity activeOpacity={0.5} style={locolStyle} onPress={onpress}>
            {children}
        </TouchableOpacity>
    ) : (
        <View style={locolStyle}>
            {children}
        </View>
    )
}

export default RowComponents