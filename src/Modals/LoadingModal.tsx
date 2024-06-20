import { View, Text, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalStyles'
import { SpaceComponents, TextComponents } from '../components'
import { appColor } from '../constants/appColors'
import { appFontFamilies } from '../constants/appFontFamilies'

interface Props {
    visible: boolean,
    mess?: string,
}

const LoadingModal = (props: Props) => {
    const { visible, mess } = props
    return (
        <Modal
            visible={visible}
            style={[globalStyles.container, {}]}
            transparent
            statusBarTranslucent>
            <View
                style={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1
                }}>
                <ActivityIndicator color={appColor.white} size={40} />
                <SpaceComponents height={10} />
                <TextComponents
                    text='Loading'
                    color={appColor.white}
                    flex={0}
                    font={appFontFamilies.bold}
                    size={22}
                />
            </View>
        </Modal>
    )
}

export default LoadingModal