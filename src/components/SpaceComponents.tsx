import React from 'react'
import { View } from 'react-native'

interface Props {
    width?: number
    height?: number
}

const SpaceComponents = (props: Props) => {
    const { width, height } = props
    return (
        <View style={{
            width,
            height
        }} />
    )
}

export default SpaceComponents