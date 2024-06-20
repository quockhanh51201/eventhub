import { Eye, EyeSlash } from 'iconsax-react-native'
import React, { ReactNode, useState } from 'react'
import { KeyboardType, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { appColor } from '../constants/appColors'
import { globalStyles } from '../styles/globalStyles'
interface Props {
    value: string,
    onChange: (val: string) => void,
    affix?: ReactNode,
    suffix?: ReactNode,
    placeHolder?: string,
    isPassword?: boolean,
    allowClear?: boolean
    keyboardType?: KeyboardType
}
const TextInputComponents = (props: Props) => {
    const { value, onChange, affix, suffix, placeHolder, isPassword, allowClear, keyboardType } = props
    const [isShowPass, setIsShowPass] = useState(isPassword ?? false)
    return (
        <View style={[Styles.inputContainer]}>
            {affix ?? affix}
            <TextInput
                style={[Styles.input, globalStyles.text]}
                placeholder={placeHolder}
                onChangeText={val => onChange(val)}
                secureTextEntry={isShowPass}
                value={value}
                placeholderTextColor={appColor.gray2}
                keyboardType={keyboardType ?? 'default'}
            />
            {suffix ?? suffix}
            {
                <TouchableOpacity onPress={isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')}>
                    {
                        isPassword ? (
                            <>
                                {
                                    isShowPass
                                        ? <Eye size={22} color={appColor.gray} />
                                        : <EyeSlash size={22} color={appColor.gray} />
                                }
                            </>
                        ) : (
                            value.length > 0 && allowClear && (
                                <AntDesign name="close" size={22} color={appColor.text} />
                            )
                        )
                    }
                </TouchableOpacity >
            }
        </View >
    )
}

export default TextInputComponents
const Styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: appColor.gray3,
        width: '100%',
        minHeight: 56,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    input: {
        padding: 0,
        flex: 1,
        margin: 0,
        paddingHorizontal: 14,
        color: appColor.text
    }
})