import React, { useEffect, useState } from 'react'
import { Button, FlatList, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector, removeAuth } from '../../redux/reducers/authReducer'
import asyncStorage from '../../utils/asyncStorage/asyncStorage'
import { appStorage } from '../../constants/appStorage'
import { globalStyles } from '../../styles/globalStyles'
import { appColor } from '../../constants/appColors'
import { CardComponents, CategoriesList, CirleComponents, EventItem, RowComponents, SectionComponents, SpaceComponents, TabBarComponents, TagComponents, TextComponents } from '../../components'
import { ArrowDown, HambergerMenu, Notification, SearchNormal1, Sort } from 'iconsax-react-native'
import { appFontFamilies } from '../../constants/appFontFamilies'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from 'react-native'
import { IMAGES } from '../../assets/image'
import { appInfo } from '../../constants/appInfo'
import { Image } from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios'
import { AddressModel } from '../../models/AddressModel'

const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch()
  const auth = useSelector(authSelector)
  const [currentLocation, setCurrentLocation] = useState<AddressModel>()

  const ItemEvent = {
    title: 'International Band Music Concert',
    description: 'Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase.',
    location: {
      title: 'Gala Convention Center',
      address: '36 Guild Street London, UK '
    },
    imageUrl: '',
    users: [''],
    authorId: '',
    startAt: Date.now(),
    endAt: Date.now(),
    date: Date.now()
  }

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      reverseGeocode({ lat: info.coords.latitude, long: info.coords.longitude })
    });
  }, [])

  const reverseGeocode = async ({ lat, long }: { lat: Number, long: Number }) => {
    const url = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat},${long}&lang=VI&apiKey=${appInfo.API_MAP_KEY}`;

    try {
      const res = await axios(url)
      if (res && res.status === 200 && res.data) {
        const items = res.data.items
        setCurrentLocation(items[0])
      }
    } catch (error) {
      console.log(error)
    }
  }
  const renderItemEvent = ({ item, index }: any) => {
    return (<EventItem item={ItemEvent} type='card' />)
  }
  console.log('abc: ', currentLocation)


  return (
    <View style={[globalStyles.container, { backgroundColor: 'FFFFFFB3' }]}>
      <StatusBar barStyle={'light-content'} />
      <View
        style={{
          backgroundColor: appColor.primary,
          borderBottomLeftRadius: 40,
          borderBottomEndRadius: 40,
          paddingTop: StatusBar.currentHeight
        }}
      >
        <SectionComponents>
          <RowComponents>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
            >
              <HambergerMenu size={24} color={appColor.white} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              {currentLocation && (
                <>
                  <RowComponents>
                    <TextComponents text='Curent Location' color={appColor.white2} size={12} />
                    <SpaceComponents width={1} />
                    <MaterialIcons name='arrow-drop-down' size={18} color={appColor.white2} />
                  </RowComponents>
                  <TextComponents text={`${currentLocation.address.city}, ${currentLocation.address.countryCode}`} color={appColor.white} font={appFontFamilies.medium} size={13} />
                </>
              )}
            </View>
            <CirleComponents color='#524CE0' size={36}>
              <Notification size={18} color={appColor.white} />
              <View
                style={{
                  backgroundColor: '#02E9FE',
                  height: 10,
                  width: 10,
                  borderRadius: 100,
                  borderWidth: 2,
                  borderColor: '#524CE0',
                  position: 'absolute',
                  top: 5,
                  right: 10
                }}
              />
            </CirleComponents>
          </RowComponents>
        </SectionComponents>
        <SpaceComponents height={20} />
        <SectionComponents>
          <RowComponents onpress={() => navigation.navigate('SearchEvents', {
            isFilter: false
          })}>
            <SearchNormal1
              variant='TwoTone'
              color={appColor.white}
              size={20} />
            <View
              style={{
                width: 1,
                backgroundColor: appColor.gray2,
                marginHorizontal: 10,
                height: 20
              }}
            />
            <TextComponents flex={1} text='Search...' color={appColor.gray2} size={18} />
            <TagComponents
              label='Filters'
              textColor={appColor.white}
              icon={
                <CirleComponents size={18} color='#B1AEFA'>
                  <Sort size={16} color='#524CE0' />
                </CirleComponents>
              }
              bgColor='#524CE0'
              onPress={() => navigation.navigate('SearchEvents', {
                isFilter: true
              })}
            />
          </RowComponents>
        </SectionComponents>
        <SpaceComponents height={20} />
      </View>
      <SectionComponents styles={{ marginTop: -14, paddingHorizontal: 0 }}>
        <CategoriesList isFill />
      </SectionComponents>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
        }}
      >
        <SpaceComponents height={20} />
        <SectionComponents>
          <TabBarComponents title='Upcoming Events' onPress={() => { }} />
        </SectionComponents>
        <SpaceComponents height={20} />
        <SectionComponents styles={{ paddingHorizontal: 0 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={Array.from({ length: 5 })}
            renderItem={renderItemEvent}
          />
        </SectionComponents>
        <SpaceComponents height={20} />
        <SectionComponents>
          <ImageBackground
            source={IMAGES.invite}
            style={{
              minHeight: 140,
              padding: 16,
              flex: 1,
              borderRadius: 12
            }}
            imageStyle={{
              borderRadius: 12
            }}
            resizeMode='contain'
          >
            <TextComponents text='Invite your friends' title />
            <TextComponents text='Get $20 for ticket' />
            <RowComponents>

              <TouchableOpacity style={[
                globalStyles.button,
                {
                  marginTop: 12,
                  backgroundColor: '#00F8FF',
                  paddingHorizontal: 20
                }
              ]}>
                <TextComponents text='INVATE' color={appColor.white2} font={appFontFamilies.medium} />
              </TouchableOpacity>
            </RowComponents>
          </ImageBackground>
        </SectionComponents>
        <SpaceComponents height={20} />
        <SectionComponents>
          <TabBarComponents title='Nearby You' onPress={() => { }} />
        </SectionComponents>
        <SpaceComponents height={20} />
        <SectionComponents styles={{ paddingHorizontal: 0 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={Array.from({ length: 5 })}
            renderItem={renderItemEvent}
          />
        </SectionComponents>
      </ScrollView>
    </View >
  )
}

export default HomeScreen