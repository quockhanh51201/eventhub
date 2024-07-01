import { View, Text } from 'react-native'
import React from 'react'
import RowComponents from './RowComponents'
import TextComponents from './TextComponents'
import { appColor } from '../constants/appColors'
import { appFontFamilies } from '../constants/appFontFamilies'
import { Image } from 'react-native'
import { IMAGES } from '../assets/image'
import SpaceComponents from './SpaceComponents'


interface Props {
    size?: number
}
const AvatarGroup = (props: Props) => {
    const { size } = props
    return (
        <RowComponents styles={{ marginVertical: 12 }}>
            {
                Array.from({ length: 3 }).map((item, index) => (
                    <Image key={`imgUser${index}`}
                        source={IMAGES.avtUser}
                        style={{
                            width: size ?? 24,
                            height: size ?? 24,
                            borderRadius: 100,
                            borderWidth: 1,
                            marginLeft: index > 0 ? -8 : 0,
                            borderColor: appColor.white
                        }}
                    />
                ))
            }

            <SpaceComponents width={5} />
            <TextComponents
                text='+20 Going'
                size={size ? (size / 2) : 12}
                color={appColor.primary}
                font={appFontFamilies.semibold}
            />
        </RowComponents>
    )
}

export default AvatarGroup