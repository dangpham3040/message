import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Color";
import { Dimensions } from 'react-native';
export const styles = StyleSheet.create({
    icon: {
        padding: 10,
        margin: 10
    },
    input: {
        flex: 1,
        padding: 10,
        color: Colors.input,
        
    },
    Textput: {
        height: 50,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.second,
        borderColor: Colors.third,
        borderWidth: 1.5,
        alignSelf: "center",
    },

})