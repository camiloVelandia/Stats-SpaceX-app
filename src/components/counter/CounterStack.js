import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

const CounterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Counter} />
    </Stack.Navigator>
  );
};

export default CounterStack;