import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Image} from 'react-native';
import DragonScreen from './DragonScreen';
import Colors from 'statSpaceX/src/res/colors';

const Stack = createStackNavigator();

const DragonStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.black,
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
      <Stack.Screen name="Dragons" component={DragonScreen} />
    </Stack.Navigator>
  );
};

export default DragonStack;
