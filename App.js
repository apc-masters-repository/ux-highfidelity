import React from 'react';

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './view/components/login'
import Landing from './view/landing/landing'

const Stack = createStackNavigator();

export default class App extends React.Component { 
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen
            name='Login'
            component={Login}
          />
          <Stack.Screen
            name='Landing'
            component={Landing}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

