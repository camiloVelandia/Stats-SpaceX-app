import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Image} from 'react-native';
import StatsScreen from './StatsScreen';
import Colors from 'statSpaceX/src/res/colors';
import {ThemeContext} from 'styled-components';


const Stack = createStackNavigator();

const StatsStack = () => {
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

        headerTintColor: Colors.white,
      }}>
      <Stack.Screen name="Stats" component={StatsScreen} />
    </Stack.Navigator>
  );
};

export default StatsStack;
