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
        marginTop: 50
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
    },
    radio_view: {
        marginLeft: 10,
        marginTop: 5
    }

})