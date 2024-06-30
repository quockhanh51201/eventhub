import { View, Text, FlatList } from 'react-native'
import React, { ReactNode } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { appColor } from '../constants/appColors'
import TagComponents from './TagComponents'

interface Props {
    isFill?: boolean
}
interface Category {
    icon: ReactNode
    color: string
    label: string
    key: string
}
const CategoriesList = (props: Props) => {
    const { isFill } = props

    const categories: Category[] = [
        {
            key: 'sports',
            label: 'Sports',
            icon: <FontAwesome5 name='basketball-ball' color={isFill ? appColor.white : '#F0635A'} />,
            color: '#F0635A'
        },
        {
            key: 'music',
            label: 'Music',
            icon: <FontAwesome5 name='music' color={isFill ? appColor.white : '#F59762'} />,
            color: '#F59762'
        },
        {
            key: 'food',
            label: 'Food',
            icon: <MaterialCommunityIcons name='silverware-fork-knife' color={isFill ? appColor.white : '#29D697'} />,
            color: '#29D697'
        },
        {
            key: 'art',
            label: 'Art',
            icon: <Ionicons name='color-palette-sharp' color={isFill ? appColor.white : '#46CDFB'} />,
            color: '#46CDFB'
        },
    ]

    const renderItem = ({ item, index }: any) => {
        return (
            <TagComponents
                onPress={() => { }}
                icon={item.icon}
                label={item.label}
                bgColor={isFill ? item.color : appColor.white}
                textColor={isFill ? appColor.white : item.color}
                styles={{ marginHorizontal: 5, minWidth: 82, justifyContent: 'center' }}
            />
        )
    }
    return (
        <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.key}
            renderItem={renderItem}
        />
    )
}

export default CategoriesList