import React, { useEffect } from 'react';
import { View, Dimensions, StatusBar,StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
// import Orientation from 'react-native-orientation';

export default function App(props) {
  // useEffect(() => {
  //   Orientation.unlockAllOrientations();
  //   Orientation.lockToLandscape();
  // }, []);
  return (
    <View style={{ flex: 1 ,}}>
  
      <WebView source={{ uri: props.route.params.url }} />
    </View>
  );
}
