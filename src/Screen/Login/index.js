/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   Text,
   TouchableOpacity,
   View,
 } from 'react-native';
 //style
 import { styles } from './styles';
 import { common } from '../../Utils/common_styles';
 

 export default function App(props){
   return (
    <View style={common.full} >
    
      <TouchableOpacity onPress={()=>props.navigation.navigate('Home')}>
      <Text>LOgion</Text>
      </TouchableOpacity>
     
    </View>
   );
 };
 
 
 