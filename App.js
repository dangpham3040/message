import React from 'react';
import Navigation from './src/Routing'
import { LogBox } from 'react-native';
import "react-native-url-polyfill/auto"

export default function App() {
  return (<>
    {LogBox.ignoreAllLogs()}
    <Navigation />
  </>

  );
};


