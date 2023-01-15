import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Colors } from "../../Utils/Color";
import { Dimensions, View, TouchableOpacity,Text } from 'react-native';
//icon
import MenuIcon from '../../Icons/Menu';
import CartIcon from '../../Icons/Cart'
export default function App(props) {
    const [numbercart, setnumbercart] = useState(2)
    return (
        <View style={styles.header}>
            <View style={styles.icon}>
                <TouchableOpacity style={styles.touchIconMenu} onPress={() => setisModalVisible(true)}>
                    <MenuIcon fill={Colors.second}/>
                </TouchableOpacity>
            </View>

            <View style={styles.center}>
                <Text style={styles.nameapp}>Fashionshop</Text>
            </View>
            <View style={styles.icon}>
                <TouchableOpacity style={styles.touchIconMenu} onPress={() => props.navigation.navigate('Cart')}>
                    <CartIcon />
                    {numbercart > 0 ? <View style={styles.numberCart}>
                        <Text style={styles.textnumberCart}>{numbercart}</Text>
                    </View> : null}
                </TouchableOpacity>
            </View>
        </View>
    );
}

