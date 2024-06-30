import { Platform, StyleSheet } from "react-native";
import { appColor } from "../constants/appColors";
import { appFontFamilies } from "../constants/appFontFamilies";
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColor.white,
    },
    text: {
        color: appColor.black,
        fontSize: 13,
        fontFamily: appFontFamilies.semibold,
    },
    button: {
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColor.white,
        paddingHorizontal: 16,
        paddingVertical: 16,
        minHeight: 56,
        flexDirection: 'row'
    },
    textButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    shadow: {
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8
    },
    section: {
        paddingHorizontal: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3366FF',
        width: 30,
        height: 30,
        borderRadius: 100
    },
    tag: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 100
    },
    card: {
        borderRadius: 12,
        backgroundColor: appColor.white,
        padding: 12,
        marginHorizontal: 12,
        marginVertical: 6,
    }
})
// export const heightStatusBar = () => Platform.OS == 'android' ? 20 : getStatusBarHeight() + isDynamicIsland() ? 35 : 0;
export const heightStatusBar = 40
