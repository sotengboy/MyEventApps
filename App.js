/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React  from 'react';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/Home';
import TambahEvent from './src/AddEvent';
import data from './src/redux/data';

let RootStack = createStackNavigator({
  Home: {screen: Home},
  TambahEvent: {screen: TambahEvent}
});
let Navigation = createAppContainer(RootStack);
const App = () => {
  return (
    <Provider store={data}>
      <Navigation />
    </Provider>
  );
};

export default App;
