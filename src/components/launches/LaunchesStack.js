import React, {useContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Image} from 'react-native';
import LaunchesScreen from './LaunchesScreen';
import PastLaunches from './PastLaunches';
import NextLaunches from './NextLaunches';
import Results from './Results';
import {ThemeContext} from 'styled-components';


const Stack = createStackNavigator();

const LaunchesStack = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: themeContext.body,
        },
        headerTitleAlign: 'center',
        headerTitle: (
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              source={require('statSpaceX/src/assets/images/logo.png')}
              style={{width: 150, height: 20}}
            />
          </View>
        ),

        headerTintColor: themeContext.text,
      }}>
      <Stack.Screen name="Launches" component={LaunchesScreen} />
      <Stack.Screen name="PastLaunches" component={PastLaunches} />
      <Stack.Screen name="NextLaunches" component={NextLaunches} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
};

export default LaunchesStack;
