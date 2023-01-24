import React from 'react';
import { styles } from './styles';
import { Colors } from "../../Utils/Color";
import { Dimensions, View, TextInput } from 'react-native';
import { common } from '../../Utils/common_styles';
export default function App(props) {
    const onChangeText = (e) => {
        props.send(e)
    }
    return (
        <View style={styles.Textput}>
            <View style={styles.icon}>
                {props.icon}
            </View>
            <TextInput
                style={[styles.input,props.style]}
                placeholder={props.text}
                onChangeText={e => onChangeText(e)}
                value={props.value}
                placeholderTextColor='gray'
            />
        </View>
    );
}

