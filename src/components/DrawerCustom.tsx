import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RowComponents from './RowComponents'
import ButtonComponents from './ButtonComponents'
import { TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import TextComponents from './TextComponents'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SpaceComponents from './SpaceComponents'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector, removeAuth } from '../redux/reducers/authReducer'
import { Image } from 'react-native'
import { IMAGES } from '../assets/image'
import { appColor } from '../constants/appColors'
import { Bookmark2, Calendar, Logout, Message2, MessageQuestion, Setting2, Sms, User } from 'iconsax-react-native'
import { FlatList } from 'react-native'

const DrawerCustom = ({ navigation }: any) => {
    const user = useSelector(authSelector)
    const dispatch = useDispatch()


    const size = 20
    const color = appColor.gray2
    const profileMenu = [
        {
            key: 'myProfile',
            title: 'My Profile',
            icon: <User size={size} color={color} />
        },
        {
            key: 'message',
            title: 'Message',
            icon: <Message2 size={size} color={color} />
        }, {
            key: 'calender',
            title: 'Calendar',
            icon: <Calendar size={size} color={color} />
        }, {
            key: 'bookmark',
            title: 'Bookmark',
            icon: <Bookmark2 size={size} color={color} />
        }, {
            key: 'contactUs',
            title: 'ContactUs',
            icon: <Sms size={size} color={color} />
        }, {
            key: 'setting',
            title: 'Setting',
            icon: <Setting2 size={size} color={color} />
        }, {
            key: 'helpAndFAQs',
            title: 'Help & FAQs',
            icon: <MessageQuestion size={size} color={color} />
        }, {
            key: 'signOut',
            title: 'Sign Out',
            icon: <Logout size={size} color={color} />
        },
    ]
    const renderItemMenu = ({ item, index }: any) => {
        return (
            <RowComponents styles={[styles.itemMenu]} onpress={() => handleOnpressMenu({ item })}>
                {item.icon}
                <SpaceComponents width={12} />
                <TextComponents text={item.title} />
            </RowComponents>
        )
    }
    const handleOnpressMenu = ({ item }: any) => {
        switch (item.key) {
            case 'myProfile':
                {
                    navigation.closeDrawer()
                    navigation.navigate('Profile', {
                        screen: 'profile'
                    })
                }
                break;
            case 'signOut':
                {
                    navigation.closeDrawer()
                    dispatch(removeAuth())
                }
                break;
            default:
                break;
        }
    }
    return (
        <View style={[styles.container]}>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.closeDrawer()
                        navigation.navigate('Profile', {
                            screen: 'profile'
                        })
                    }}
                >
                    {/* [Thiếu] đây là avt người dùng cần cập nhật thêm? */}
                    {/* <Image source={IMAGES.avt} style={[styles.avatar]} resizeMode='contain' /> */}
                    {/* [Thiếu] nếu không có hình thì hiển thị chữ đầu của tên */}
                    <View style={[styles.avatar, { backgroundColor: appColor.gray2, justifyContent: 'center', alignItems: 'center' }]}>
                        <TextComponents
                            title
                            size={22}
                            color={appColor.white}
                            text={
                                user?.userName ? user.userName.split(' ')[user.userName.split(' ').length - 1].substring(0, 1) : ''
                            } />
                    </View>
                </TouchableOpacity>
                <TextComponents text={user?.userName} size={18} />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={profileMenu}
                style={[styles.menu]}
                renderItem={renderItemMenu}
                keyExtractor={(item) => item.key}
            />
            <RowComponents>
                <TouchableOpacity
                    style={[globalStyles.button, { backgroundColor: '#00F8FF33' }]}
                >
                    <MaterialCommunityIcons name='crown' size={22} color={'#00F8F8'} />
                    <SpaceComponents width={8} />
                    <TextComponents text='Upgrade Pro' color='#00F8F8' />
                </TouchableOpacity>
            </RowComponents>
        </View >
    )
}

export default DrawerCustom

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 48
    },
    menu: {
        flex: 1
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 100,
    },
    itemMenu: {
        paddingVertical: 12
    }
})