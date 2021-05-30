import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';

export default function Index() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Index);
