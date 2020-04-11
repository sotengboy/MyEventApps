/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React  from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/Home';
import AddEvent from './src/AddEvent';

const App = createStackNavigator({
  Home: Home,
  AddEvent: AddEvent,
},
{
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(App);

export default AppContainer;
