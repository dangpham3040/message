import React from 'react';
import Navigation from './src/Routing'
import { LogBox } from 'react-native';
import "react-native-url-polyfill/auto"
//redux
import { Provider } from 'react-redux';
import {store,persistor} from './src/Redux/store';


import { PersistGate } from 'redux-persist/integration/react';
export default function App() {
  return (<>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {LogBox.ignoreAllLogs()}
        <Navigation />
      </PersistGate>
    </Provider>

  </>

  );
};


