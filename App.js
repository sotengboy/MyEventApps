/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text
} from 'react-native';

import Event from './src/Event';
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.h1}>Event Scheduler Apps</Text>
      <SafeAreaView>      
          <Event/>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  h1: {
    fontSize: 36,
    textAlign: "center"
  }
});

export default App;
