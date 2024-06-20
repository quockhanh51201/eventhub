import React from 'react'
import { ActivityIndicator, Image, ImageBackground } from 'react-native'
import { IMAGES } from '../assets/image'
import { SpaceComponents } from '../components'
import { appColor } from '../constants/appColors'
import { appInfo } from '../constants/appInfo'

const SplashScreen = () => {
  return (
    <ImageBackground source={IMAGES.background} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Image source={IMAGES.textLogo} resizeMode='contain' style={{
        width: appInfo.sizes.WIDTH * 0.8,
      }} />
      <SpaceComponents height={10} />
      <ActivityIndicator color={appColor.gray} size={25} />
    </ImageBackground>
  )
}

export default SplashScreen