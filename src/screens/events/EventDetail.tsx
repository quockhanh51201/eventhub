import { ArrowLeft, ArrowRight, Calendar, Location } from 'iconsax-react-native'
import React from 'react'
import { ImageBackground, ScrollView, StatusBar, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { IMAGES } from '../../assets/image'
import { AvatarGroup, ButtonComponents, CardComponents, RowComponents, SectionComponents, SpaceComponents, TabBarComponents, TextComponents } from '../../components'
import { appColor } from '../../constants/appColors'
import { globalStyles } from '../../styles/globalStyles'
import { EventModel } from '../../models/EventModel'
import { appFontFamilies } from '../../constants/appFontFamilies'
import { Image } from 'react-native'

const EventDetail = ({ navigation, route }: any) => {

    const { item }: { item: EventModel } = route.params

    return (
        <View style={[globalStyles.container, { backgroundColor: appColor.white }]}>
            <StatusBar barStyle={'light-content'} />
            <ImageBackground
                source={IMAGES.avtEvent}
                style={{
                    height: 244,
                    backgroundColor: 'blue'
                }}
                resizeMode='cover'
            >
                <LinearGradient
                    colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0)']}
                >
                    <SectionComponents styles={{ paddingTop: StatusBar.currentHeight }}>
                        <RowComponents justify='space-between'>
                            <RowComponents styles={{ alignItems: 'center' }}>
                                <TouchableOpacity style={{ height: 48, justifyContent: 'center' }}>
                                    <ArrowLeft size={32} color={appColor.white} />
                                </TouchableOpacity>
                                <SpaceComponents width={10} />
                                <TextComponents text='Event Details' title color={appColor.white} />
                            </RowComponents>
                            <CardComponents styles={{ marginVertical: 0, width: 36, height: 36, padding: 10 }} color='#FFFFFF4D'>
                                <MaterialIcons name='bookmark' color={appColor.white} size={15} />
                            </CardComponents>
                        </RowComponents>
                    </SectionComponents>
                </LinearGradient>
            </ImageBackground>
            <View style={{ marginTop: -20 }}>
                <RowComponents styles={[globalStyles.shadow, {
                    backgroundColor: appColor.white,
                    borderRadius: 100,
                    marginHorizontal: 48,
                    paddingHorizontal: 12
                }]}
                    justify='space-between'
                >
                    <AvatarGroup size={36} />
                    <ButtonComponents
                        text='Invate'
                        type='primary'
                        styles={{
                            minHeight: 28,
                            paddingVertical: 6,
                            paddingHorizontal: 12
                        }} />
                </RowComponents>
            </View>
            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <SectionComponents>
                    <TextComponents title text={item.title} size={34} font={appFontFamilies.medium} />
                </SectionComponents>
                <SpaceComponents height={10} />
                <SectionComponents>
                    <RowComponents>
                        <CardComponents styles={{
                            marginVertical: 0,
                            width: 48,
                            height: 48,
                            padding: 10,
                            marginHorizontal: 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                            color={`${appColor.primary}4D`}
                        >
                            <Calendar variant='Bold' color={appColor.primary} size={22} />
                        </CardComponents>
                        <SpaceComponents width={10} />
                        <View style={{ flex: 1 }}>
                            <TextComponents text={item.location.title} size={16} font={appFontFamilies.medium} />
                            <TextComponents text={item.location.address} color={appColor.gray} />
                        </View>
                    </RowComponents>
                    <SpaceComponents height={15} />
                    <RowComponents>
                        <CardComponents styles={{
                            marginVertical: 0,
                            width: 48,
                            height: 48,
                            padding: 10,
                            marginHorizontal: 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                            color={`${appColor.primary}4D`}
                        >
                            <Location variant='Bold' color={appColor.primary} size={22} />
                        </CardComponents>
                        <SpaceComponents width={10} />
                        <View style={{ flex: 1 }}>
                            <TextComponents text={item.date.toString()} size={16} font={appFontFamilies.medium} />
                            <TextComponents text={`${item.startAt} - ${item.endAt}`} color={appColor.gray} />
                        </View>
                    </RowComponents>
                    <SpaceComponents height={15} />
                    <RowComponents>
                        <Image
                            source={IMAGES.avtUser}
                            style={{
                                marginVertical: 0,
                                width: 48,
                                height: 48,
                                marginHorizontal: 0,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 12
                            }}
                            resizeMode='cover'
                        />
                        <SpaceComponents width={10} />
                        <View style={{ flex: 1 }}>
                            <TextComponents text={item.title} size={16} font={appFontFamilies.medium} />
                            <TextComponents text={item.title} color={appColor.gray} />
                        </View>
                    </RowComponents>
                </SectionComponents>
                <SpaceComponents height={10} />
                <SectionComponents>
                    <TabBarComponents title='About Event' />
                    <SpaceComponents height={10} />
                    <TextComponents text={item.description} size={14} font={appFontFamilies.regular} numberOfLines={3} />
                </SectionComponents>
            </ScrollView>
            <LinearGradient
                colors={['rgba(255,255,255,0.9)', 'rgba(255,255,255,1)']}
                style={{
                    paddingVertical: 12,
                    paddingHorizontal: 48,
                }}>
                <ButtonComponents
                    text='BUY TICKET $120'
                    type='primary'
                    iconFlex='right'
                    icon={
                        <View style={[globalStyles.iconContainer, {
                            backgroundColor: appColor.blue
                        }]}>
                            <ArrowRight size={18} color={appColor.white} />
                        </View>
                    }

                />
            </LinearGradient>

        </View>
    )
}

export default EventDetail