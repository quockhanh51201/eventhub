import React, { ReactNode } from 'react'
import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { appColor } from '../constants/appColors'
import { appFontFamilies } from '../constants/appFontFamilies'
import { globalStyles } from '../styles/globalStyles'
import TextComponents from './TextComponents'


interface Props {
    icon?: ReactNode,
    text: string,
    type: 'primary' | 'text' | 'link'
    color?: string,
    styles?: StyleProp<ViewStyle>,
    textColor?: string,
    textStyles?: StyleProp<TextStyle>
    textFont?: string
    onpress?: () => void,
    iconFlex?: 'right' | 'left'
    disable?: boolean
}
const ButtonComponents = (props: Props) => {
    const { icon, text, type, color, styles, textColor, textStyles, onpress, iconFlex, textFont, disable } = props
    return (
        type === 'primary'
            ? (
                <TouchableOpacity
                    style={[globalStyles.button, globalStyles.shadow, { backgroundColor: disable ? appColor.gray : color ?? appColor.primary }, styles]}
                    onPress={onpress}
                    activeOpacity={0.5}
                    disabled={disable}
                >
                    {icon && iconFlex === 'left' && icon}
                    <TextComponents
                        text={text}
                        color={textColor ?? appColor.white}
                        styles={[{
                            marginLeft: icon ? 12 : 0,
                            textAlign: 'center'
                        }, textStyles]}
                        flex={icon && iconFlex === 'right' ? 1 : 0}
                        font={textFont ?? appFontFamilies.medium}
                        size={16}
                    />

                    {icon && iconFlex === 'right' && icon}
                </TouchableOpacity>
            ) :
            (
                <TouchableOpacity
                    style={[globalStyles.textButton, {}, styles]}
                    onPress={onpress}
                    activeOpacity={0.5}
                    disabled={disable}
                >
                    {icon && iconFlex === 'left' && icon}
                    <TextComponents
                        text={text}
                        color={textColor ?? (type === 'text' ? appColor.text_bl_2 : appColor.blue)}
                        styles={[{
                            marginLeft: icon ? 12 : 0,
                        }, textStyles]}
                        flex={icon && iconFlex === 'right' ? 1 : 0}
                        font={textFont ?? appFontFamilies.regular}
                        size={16}
                    />
                    {icon && iconFlex === 'right' && icon}
                </TouchableOpacity>
            )
    )
}

export default ButtonComponents