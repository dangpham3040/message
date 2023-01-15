import React from 'react';
import { TouchableOpacity, Image } from "react-native";
import { styles } from './styles';
export default function app(props) {
    const item = props.item
    const handleOntouch = () => {
        props.name(item.firm)
        props.ok()

    }
    return (
        <TouchableOpacity style={styles.item}
            onPress={() => handleOntouch()}>
            <Image style={styles.imgLogo} source={item.img} ></Image>
        </TouchableOpacity>
    )
};