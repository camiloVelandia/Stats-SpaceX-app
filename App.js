/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import CounterStack from 'statSpaceX/src/components/counter/CounterStack';
import AboutStack from 'statSpaceX/src/components/about/AboutStack';
import DragonsStack from 'statSpaceX/src/components/dragon/DragonStack';
import RocketsStack from 'statSpaceX/src/components/rockets/RocketsStack';
import LaunchesStack from 'statSpaceX/src/components/launches/LaunchesStack';
import StatsStack from 'statSpaceX/src/components/stats/StatsStack';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Image} from 'react-native'

import {ThemeProvider} from 'styled-components';
import {Button, Text, Header} from './globalStyles'

const lightTheme = {
  body: '#E2E2E2',
  text: '#363537',
  Alpha: 'rgba(255,255,255,.7)',
  succes: '#5ca400',
};

export const darkTheme = {
  body: '#000',
  Alpha: 'rgba(0,0,0,.8)',
  text: '#FAFAFA',
  succes: '#98e832',
};


const Tabs = createBottomTabNavigator()

const App = () => {
  const [theme, setTheme] = useState('dark');

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
      // otherwise, it should be light
    } else {
      setTheme('light');
    }
  };
  

  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Header>
      <Button onPress={toggleTheme}>
        <Text>{theme === 'light' ? '🌙' : '☀️'}</Text>
      </Button>
      </Header>
        <NavigationContainer>
            <Tabs.Navigator
              tabBarOptions={{
                tintColor: '#ED3636',
                style: {
                  backgroundColor: theme === 'light' ? '#fff' : '#000'
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
                component={RocketsStack}
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
                component={LaunchesStack}
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
                component={StatsStack}
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
      </ThemeProvider>
  );
};



export default App;
