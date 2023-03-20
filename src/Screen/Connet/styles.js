import { BackHandler, Dimensions, TextInput } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';
import { Fonts } from '../../Utils/Fonts';
import { common } from '../../Utils/common_styles';
export const styles = StyleSheet.create({

    component: {
        marginVertical: 10,
    },

    view_input: {
        marginHorizontal: 20,
        marginVertical: 10,
       
    },
    view_save: {
        justifyContent: "center",
        backgroundColor: Colors.primary,

        alignItems: "center",
        marginHorizontal: 20,
        height: 40,
        width: "90%",
        marginBottom: 10,
        borderRadius: 15
    },
    connet_view: {
        position:'absolute',
        bottom:20,
        right:0,
        left:0
    },
    reloadicon: {
        position: 'absolute',
        right: 10,
        top: 15
    },
    full: {
        flex: 1,
        backgroundColor: Colors.second
    },
    title: {
        color: Colors.primary,
        marginLeft: 20,
        textAlign: 'left',
        textTransform:'capitalize',
        marginBottom:10
    },
    radio_view: {
        marginLeft: 10,
        marginTop: 5
    },
    imgLogo: {
        height: 370,
        width: "100%",
       marginBottom:20
    },
    textsave:{
        color:"#fff"
    },
    View_Off:{
        justifyContent: "center",
        backgroundColor: Colors.primary,

        alignItems: "center",
        marginHorizontal: 20,
        height: 40,
        width: "90%",
        marginBottom: 10,
        borderRadius: 15
    },
    view_On:{
        justifyContent: "center",
        backgroundColor: "green",

        alignItems: "center",
        marginHorizontal: 20,
        height: 40,
        width: "90%",
        marginBottom: 10,
        borderRadius: 15
    }
})