import { useNavigation } from '@react-navigation/native'
import { ArrowLeft, Flag } from 'iconsax-react-native'
import React, { ReactNode, useEffect, useState } from 'react'
import { ImageBackground, Platform, SafeAreaView, ScrollView, StatusBar, View } from 'react-native'
import { IMAGES } from '../assets/image'
import { appColor } from '../constants/appColors'
import { appFontFamilies } from '../constants/appFontFamilies'
import { globalStyles } from '../styles/globalStyles'
import ButtonComponents from './ButtonComponents'
import RowComponents from './RowComponents'
import TextComponents from './TextComponents'

interface Props {
    isImageBackground?: boolean
    isScroll?: boolean,
    title?: string
    children: ReactNode
    back?: boolean
}
const ContainerComponents = (props: Props) => {
    const { children, isScroll, title, isImageBackground, back } = props
    const [statusBarHeight, setStatusBarHeight] = useState<number>(0);

    const navigation: any = useNavigation()

    useEffect(() => {
        if (Platform.OS === 'android') {
            setStatusBarHeight(StatusBar.currentHeight || 0);
        }
    }, []);
    const headerComponents = (
        <View>
            <RowComponents styles={{
                paddingHorizontal: 12,
                minWidth: 48,
                minHeight: 48,
                justifyContent: 'space-between',
            }}>
                <ButtonComponents
                    icon={<ArrowLeft size={24} color={appColor.text} />}
                    iconFlex='left'
                    text={title ? title : ''}
                    textColor={appColor.text}
                    textFont={appFontFamilies.bold}
                    type='text'
                    onpress={() => navigation.goBack()}

                />
                {/* nếu muốn title nằm giữa sử dụng cái dưới này và thêm nó trong 1 row nữa  */}
                {/* {title && (
                    <TextComponents text={title} flex={1} font={appFontFamilies.medium} />
                )} */}

                {/* icon bên phải header */}

                {/* <ButtonComponents
                    icon={<ArrowLeft size={24} color={appColor.text} />}
                    iconFlex='left'
                    text={''}
                    textColor={appColor.text}
                    textFont={appFontFamilies.bold}
                    type='text'
                    onpress={() => navigation.goBack()}
                /> */}
            </RowComponents>
        </View>
    )
    const bodyComponents = isScroll ? (

        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >{children}</ScrollView>
    ) : <View>{children}</View>
    const returnContainer = () => (
        <View style={{ flex: 1 }}>
            {back || title ? headerComponents : null}
            {bodyComponents}
        </View>
    )

    return isImageBackground
        ? (
            <ImageBackground
                source={IMAGES.background}
                style={{ flex: 1 }}
                imageStyle={{ flex: 1 }}

            >
                <SafeAreaView style={[{
                    flex: 1,
                    paddingTop: statusBarHeight,
                }]}>
                    {returnContainer()}
                </SafeAreaView>
            </ImageBackground>
        )
        : (
            <SafeAreaView style={[globalStyles.container, {
                paddingTop: statusBarHeight
            }]}>
                {returnContainer()}
            </SafeAreaView>
        )

}

export default ContainerComponents