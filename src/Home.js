import React, { Component } from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,

  } from 'react-native';
import Event from './Event';
class Home extends Component{
    static navigationOptions= ({navigation}) =>({
        header: null,
      
  });
constructor(props){
		super(props);
		this.state = {
			events: [
        {
          id: "1",
          title: "Event 1",
          date: "2020-04-11 07:22:00",
        },
        {
          id: "2",
          title: "Event 2",
          date: "2020-05-25 23:59:00",
        },
        {
          id: "3",
          title: "Event 3",
          date: "2020-06-25 23:59:00",
        },
      ]
    };
		}
  render() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.h1}>Event Scheduler Apps</Text>
      <ScrollView>      
          <Event events={this.state.events} />
      </ScrollView>
      
    </>
  );
  }
}
const styles = StyleSheet.create({
    h1: {
      fontSize: 36,
      textAlign: "center"
    },
    
  });

export default Home;