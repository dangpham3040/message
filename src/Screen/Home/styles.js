import { BackHandler, Dimensions } from 'react-native';
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
        paddingHorizontal: 20
    },
    view_input: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    view_save: {
        justifyContent: "center",
        backgroundColor: Colors.primary,
        borderRadius: 5,
        alignItems: "center",
        marginHorizontal: 20,
        height: 40,
        width: "90%",
        marginBottom: 10,
        borderRadius: 15
    },
    dropdown1BtnStyle: {
        width: '50%',
        height: 50,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#444',
        borderRadius: 20,

    },
    dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown1SelectedRowStyle: { backgroundColor: 'rgba(0,0,0,0.1)' },
    dropdown1searchInputStyleStyle: {
        backgroundColor: '#EFEFEF',
        borderRadius: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
    },
    imgLogo: {
        height: 400,
        width: "100%",
       marginBottom:20
    },
    view_Type: {
        marginTop: 10,
        marginHorizontal: 20,
        flexDirection: "row",

    },
    view_switch: {
        flexDirection: "row",
    },
    text_notification: {
        color: "#000",
        textAlign: 'center', // <-- the magic
        textAlignVertical: 'center',
        height:"100%",
        marginHorizontal:10
    }
})