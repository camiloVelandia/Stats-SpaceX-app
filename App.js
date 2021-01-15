/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { SafeAreaView,StyleSheet,View,Text,} from 'react-native';
import CoinStack from 'statSpaceX/src/components/counter/CounterStack';

const App = () => {
  return (
    <NavigationContainer>
      <CoinStack/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
