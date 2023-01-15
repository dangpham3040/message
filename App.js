import React from 'react';
import Navigation from './src/Routing'
import { LogBox } from 'react-native';
export default function App() {
  return (<>
    {LogBox.ignoreAllLogs()}
    <Navigation />
  </>

  );
};


