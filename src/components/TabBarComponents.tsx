import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import RowComponents from './RowComponents'
import TextComponents from './TextComponents'
import { appColor } from '../constants/appColors'
import { ArrowRight2 } from 'iconsax-react-native'
import { appFontFamilies } from '../constants/appFontFamilies'

interface Props {
    title: string
    onPress?: () => void
}
const TabBarComponents = (props: Props) => {
    const { title, onPress } = props
    return (
        <RowComponents>
            <TextComponents text={title} title flex={1} size={18} />
            {
                onPress && <RowComponents onpress={onPress}>
                    <TextComponents text='See all' size={12} color={appColor.gray} font={appFontFamilies.medium} />
                    <ArrowRight2 size={15} color={appColor.gray} variant='Bold' />
                </RowComponents>
            }

        </RowComponents>
    )
}

export default TabBarComponents