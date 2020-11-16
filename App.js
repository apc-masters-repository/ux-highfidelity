import React from 'react';

import 'react-native-gesture-handler'
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './view/components/login'
import Landing from './view/landing/landing'
import ShopListing from './view/shoplisting/shoplisting'
import CoffeeListing from './view/shoplisting/coffeelisting'
import CoffeeCreator from './view/coffeecreator/coffeecreator'
import Checkout from './view/payment/checkout'
import Payment from './view/payment/payment'
import Personalize from './view/personalized/personalize'

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={false}>
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
          <Stack.Screen
            name='CoffeeCreator'
            component={CoffeeCreator}
            />
          <Stack.Screen
            name='Checkout'
            component={Checkout}
            />
          <Stack.Screen
            name='Payment'
            component={Payment}
            />
          <Stack.Screen
            name='Personalize'
            component={Personalize}
            />
          <Stack.Screen
            name='CoffeeListing'
            component={CoffeeListing}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

