import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { appColor } from '../constants/appColors';
import { appFontFamilies } from '../constants/appFontFamilies';
import { globalStyles } from '../styles/globalStyles';


interface Props {
    text: string,
    color?: string,
    title?: boolean,
    size?: number,
    font?: string,
    styles?: StyleProp<TextStyle>;
    flex?: number,
    numberOfLines?: number
}
const TextComponents = (props: Props) => {
    const {
        text, color, size, font, styles, title, flex, numberOfLines
    } = props
    return <Text
        numberOfLines={numberOfLines}
        style={[
            globalStyles.text,
            {
                color: color ?? appColor.black,
                fontSize: size ?? (title ? 24 : 14),
                fontFamily: font ?? (title ? appFontFamilies.bold : appFontFamilies.regular),
                flex,
            },
            styles
        ]}>{text}</Text>
}

export default TextComponents