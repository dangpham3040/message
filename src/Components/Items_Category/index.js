import React from 'react';
import { TouchableOpacity, Image } from "react-native";
import { styles } from './styles'

export default app = (props) => {
    const item = props.item
    return (
        <TouchableOpacity style={styles.item}
            onPress={()=>alert(item.firm)}>
            <Image style={styles.imgLogo} source={item.img} ></Image>
        </TouchableOpacity>
    )
};