/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import CounterStack from 'statSpaceX/src/components/counter/CounterStack';

const App = () => {
  return (
    <NavigationContainer>
      <CounterStack/>
    </NavigationContainer>
  );
};



export default App;
