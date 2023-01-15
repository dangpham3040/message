import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';
import { Fonts } from '../../Utils/Fonts';

export const styles = StyleSheet.create({
    full: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textloadng: {
        color: Colors.primary,
        textTransform: 'capitalize',
        fontSize: 20
    },
    dotloading: {
        color: Colors.primary,
        fontSize: 20,
    },
    loadng: {
        flexDirection: 'row'
    }
})