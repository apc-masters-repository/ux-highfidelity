import React from 'react';

import 'react-native-gesture-handler'
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './view/components/login'
import Landing from './view/landing/landing'
import ShopListing from './view/shoplisting/shoplisting'

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
          <Stack.Screen
            name='ShopListing'
            component={ShopListing}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

