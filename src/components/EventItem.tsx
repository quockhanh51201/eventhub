import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import CardComponents from './CardComponents'
import TextComponents from './TextComponents'
import { appInfo } from '../constants/appInfo'
import { EventModel } from '../models/EventModel'
import AvatarGroup from './AvatarGroup'
import RowComponents from './RowComponents'
import { Location } from 'iconsax-react-native'
import { appColor } from '../constants/appColors'
import SpaceComponents from './SpaceComponents'
import { IMAGES } from '../assets/image'
import { appFontFamilies } from '../constants/appFontFamilies'
import SectionComponents from './SectionComponents'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

interface Props {
    item: EventModel
    type: 'card' | 'list'
}
const EventItem = (props: Props) => {
    const { item, type } = props
    const navigation: any = useNavigation()
    return (
        <CardComponents
            isShadow
            onPress={() => {
                navigation.navigate('EventDetail', { item })
            }}
            styles={{
                width: appInfo.sizes.WIDTH * 0.7,
                padding: 0
            }}
        >
            <ImageBackground
                source={IMAGES.imgEvent}
                style={{
                    flex: 1,
                    height: 130,
                }}
                imageStyle={{
                    resizeMode: 'cover',
                    borderRadius: 12
                }}
            >
                <RowComponents justify='space-between'>
                    <CardComponents
                        styles={{
                            alignItems: 'center',
                            width: 45,
                            height: 45,
                            justifyContent: 'center',
                            paddingHorizontal: 0,
                            marginHorizontal: 6
                        }}
                        color='#FFFFFFB3'
                    >
                        <TextComponents text='10' color={appColor.text_red} font={appFontFamilies.bold} size={18} />
                        <TextComponents text='June' color={appColor.text_red} font={appFontFamilies.semibold} size={10} />
                    </CardComponents>
                    <CardComponents
                        styles={{
                            alignItems: 'center',
                            width: 45,
                            height: 45,
                            justifyContent: 'center',
                            paddingHorizontal: 0,
                            marginHorizontal: 6
                        }}
                        color='#FFFFFFB3'
                    >
                        <MaterialIcons name='bookmark' color={appColor.text_red} size={22} />
                    </CardComponents>

                </RowComponents>

            </ImageBackground>
            <SectionComponents styles={{ marginVertical: 6, paddingHorizontal: 6 }}>
                <TextComponents text={item.title} title size={18} numberOfLines={1} />
                <AvatarGroup />
                <RowComponents>
                    <Location size={18} color={appColor.text3} variant='Bold' />
                    <SpaceComponents width={5} />
                    <TextComponents text={item.location.address} numberOfLines={1} flex={1} color={appColor.text2} />
                </RowComponents>
            </SectionComponents>
        </CardComponents>
    )
}

export default EventItem