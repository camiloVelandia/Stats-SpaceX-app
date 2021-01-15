import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import CounterScreen from './CounterScreen'

const Stack = createStackNavigator()

const CounterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Counter' component={CounterScreen} />
    </Stack.Navigator>
  );
};

export default CounterStack;