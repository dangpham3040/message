import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';
import { Fonts } from '../../Utils/Fonts';
import { common } from '../../Utils/common_styles';
export const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    component: {
        marginVertical: 10,
    },
    bannerBackground: {
        height: 150,
        width: "100%",

    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 15,
        padding: 0,
        margin: 0,
    },
    imgLogo: {
        height: 13,
        width: 60
    },
    listCategory: {
        paddingLeft: 20,
        paddingRight: -5
    },
    listProduct: {
        paddingHorizontal:20
    },
    view_seach:{
        marginHorizontal:20,
        marginVertical:10
    }
})