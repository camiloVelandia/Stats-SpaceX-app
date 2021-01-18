/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CounterStack from 'statSpaceX/src/components/counter/CounterStack';
import AboutStack from 'statSpaceX/src/components/about/AboutStack';
import DragonsStack from 'statSpaceX/src/components/dragon/DragonStack';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Image} from 'react-native'

const Tabs = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: '#ED3636',
          style: {
            backgroundColor: '#000',
          },
        }}>
          <Tabs.Screen
            name="Home"
            component={CounterStack}
            options={{
              tabBarIcon: ({size, color}) => (
                <Image
                  style={{tintColor: color, width: size, height: size}}
                  source={require('statSpaceX/src/assets/images/hogar.png')}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="Rockets"
            component={AboutStack}
            options={{
              tabBarIcon: ({size, color}) => (
                <Image
                  style={{tintColor: color, width: size, height: size}}
                  source={require('statSpaceX/src/assets/images/puesta-en-marcha.png')}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="Launches"
            component={AboutStack}
            options={{
              tabBarIcon: ({size, color}) => (
                <Image
                  style={{tintColor: color, width: size, height: size}}
                  source={require('statSpaceX/src/assets/images/historia.png')}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="Dragons"
            component={DragonsStack}
            options={{
              tabBarIcon: ({size, color}) => (
                <Image
                  style={{tintColor: color, width: size, height: size}}
                  source={require('statSpaceX/src/assets/images/transbordador.png')}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="Stats"
            component={AboutStack}
            options={{
              tabBarIcon: ({size, color}) => (
                <Image
                  style={{tintColor: color, width: size, height: size}}
                  source={require('statSpaceX/src/assets/images/stats.png')}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="About"
            component={AboutStack}
            options={{
              tabBarIcon: ({size, color}) => (
                <Image
                  style={{tintColor: color, width: size, height: size}}
                  source={require('statSpaceX/src/assets/images/about.png')}
                />
              ),
            }}
          />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};



export default App;
