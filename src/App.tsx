import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Router from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
