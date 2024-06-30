import React from 'react'
import { Button, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector, removeAuth } from '../../redux/reducers/authReducer'
import asyncStorage from '../../utils/asyncStorage/asyncStorage'
import { appStorage } from '../../constants/appStorage'
import { globalStyles } from '../../styles/globalStyles'
import { appColor } from '../../constants/appColors'
import { CategoriesList, CirleComponents, RowComponents, SectionComponents, SpaceComponents, TagComponents, TextComponents } from '../../components'
import { ArrowDown, HambergerMenu, Notification, SearchNormal1, Sort } from 'iconsax-react-native'
import { appFontFamilies } from '../../constants/appFontFamilies'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch()
  const auth = useSelector(authSelector)

  return (
    <View style={[globalStyles.container]}>
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
              <RowComponents>
                <TextComponents text='Curent Location' color={appColor.white2} size={12} />
                <SpaceComponents width={1} />
                <MaterialIcons name='arrow-drop-down' size={18} color={appColor.white2} />
              </RowComponents>
              <TextComponents text='New york, USA' color={appColor.white} font={appFontFamilies.medium} size={13} />
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
      <View
        style={{
          flex: 1,
        }}
      >
      </View>
    </View>
  )
}

export default HomeScreen