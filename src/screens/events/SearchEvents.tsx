import { View, Text } from 'react-native'
import React from 'react'

const SearchEvents = ({ navigation, route }: any) => {
    const { isFilter } = route.params
    console.log(isFilter)
    return (
        <View>
            <Text>SearchEvents</Text>
        </View>
    )
}

export default SearchEvents