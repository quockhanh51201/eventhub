import React, { ReactNode } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { globalStyles } from '../styles/globalStyles'

interface Props {
    children: ReactNode,
    styles?: StyleProp<ViewStyle>
}

const SectionComponents = (props: Props) => {
    const { children, styles } = props
    return (
        <View style={[globalStyles.section, styles]}>
            {children}
        </View>
    )
}

export default SectionComponents