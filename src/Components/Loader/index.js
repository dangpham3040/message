import React from 'react';
import { styles } from './styles';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import Svg, { Circle, Rect } from 'react-native-svg'
import { Colors } from "../../Utils/Color";
import { Dimensions, View } from 'react-native';
export default function App(props) {
    const Items = () =>
    (
        <SvgAnimatedLinearGradient
            primaryColor={Colors.third}
            secondaryColor={Colors.primary}
            height={200} width={500}
            style={styles.item}
            >
            <Rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
            <Rect x="0" y="80" rx="3" ry="3" width="350" height="10" />
            <Rect x="0" y="100" rx="3" ry="3" width="200" height="10" />
            <Rect x="0" y="120" rx="3" ry="3" width="360" height="10" />
        </SvgAnimatedLinearGradient>
    );
    const Temps = []
    for (let i = 0; i < 4; i++) {
        Temps.push(<Items key={i}/>)
    }
    return (
        <View style={styles.Container}>
          {Temps}
        </View>
    );
}

