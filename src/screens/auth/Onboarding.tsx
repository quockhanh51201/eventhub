import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import Swiper from 'react-native-swiper'
import { IMAGES } from '../../assets/image'
import { TextComponents } from '../../components'
import { appColor } from '../../constants/appColors'
import { appFontFamilies } from '../../constants/appFontFamilies'
import { appInfo } from '../../constants/appInfo'

const Onboarding = ({ navigation }: any) => {
    const [index, setIndex] = useState(0)
    return (
        <View style={[{ flex: 1 }]}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
            <Swiper
                loop={false}
                activeDotColor={appColor.white}
                dotColor={appColor.gray}
                onIndexChanged={num => setIndex(num)}
                index={index}
                autoplay
            >
                <Image source={IMAGES.onboarding1} resizeMode='cover' style={{ width: appInfo.sizes.WIDTH, height: appInfo.sizes.HEIGHT, flex: 1 }} />
                <Image source={IMAGES.onboarding2} resizeMode='cover' style={{ width: appInfo.sizes.WIDTH, height: appInfo.sizes.HEIGHT, flex: 1 }} />
                <Image source={IMAGES.onboarding3} resizeMode='cover' style={{ width: appInfo.sizes.WIDTH, height: appInfo.sizes.HEIGHT, flex: 1 }} />
            </Swiper>
            <View style={[styles.tuoch]}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <TextComponents text='Skip' color={appColor.white} font={appFontFamilies.medium} size={16} styles={{ opacity: 0.5 }} />
                </TouchableOpacity>
                <>
                    {index === 2
                        ? (
                            <TouchableOpacity onPress={() => {
                                index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')
                            }}>
                                <TextComponents text='Next' color={appColor.white} font={appFontFamilies.medium} size={16} />
                            </TouchableOpacity>
                        )
                        : ''}
                </>
            </View>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    tuoch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 23,
        left: 40,
        right: 40,
    }
})