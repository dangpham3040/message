import AnimatedEllipsis from 'react-native-animated-ellipsis';
import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import { styles } from './styles';
export default function App(props) {
    return (
        <View style={styles.full}>
            <View style={styles.loadng}>
                <Text style={styles.textloadng}>Loading</Text>
                <AnimatedEllipsis
                    style={styles.dotloading}
                    numberOfDots={3}
                    minOpacity={0.4}
                    animationDelay={200}
                  
                />
            </View>

        </View>
    );

};


