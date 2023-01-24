import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';
import { Fonts } from '../../Utils/Fonts';

export const styles = StyleSheet.create({
    view_input: {
        marginHorizontal: 20,
        marginVertical: 5
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

    },
    view_button: {
        justifyContent: "center",
        backgroundColor: Colors.primary,
        borderRadius: 5,
        alignItems: "center",
        height: 40,
        width: "50%",
        marginBottom: 10,
        borderRadius: 5,
        marginHorizontal: 5
    },
    view_button_warp: {
        flexDirection: 'row',
        marginVertical: 5
    },
    view_play: {
        justifyContent: "center",
        backgroundColor: Colors.primary,
        borderRadius: 5,
        alignItems: "center",
        height: 40,
        width: "80%",
        marginHorizontal: 5
    },
    view_copy: {
        justifyContent: "center",
        backgroundColor: Colors.primary,
        borderRadius: 5,
        alignItems: "center",
        height: 40,
        width: "20%",
    },
    view_control: {
        marginLeft: 10,
        marginRight: 30
    },
    texInput: {
        height: 50,
        width: "40%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.second,
        borderColor: Colors.third,
        borderWidth: 1.5,
        borderRadius: 20,
        alignSelf: "center",
    },
    view_clear: {
        justifyContent: "center",
        backgroundColor: Colors.eleven,
        borderRadius: 5,
        alignItems: "center",
        height: 50,
        width: "20%",
        position: "absolute",
        right: 0
    },
    view_input_: {
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 15
    }
})