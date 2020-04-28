import React from 'react';
import {connect} from 'react-redux';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
  } from 'react-native';
import Event from './Event';

const Home = ({events, navigation}) => { 
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.h1}>Event Scheduler Apps</Text>
      <ScrollView>      
      <View style={styles.container}>
          {events.length ? (
            events.map((event, i) => <Event event={event} key={i} />)
          ) : (
            <Text>Tidak ada Event</Text>
          )}
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity 
          style={styles.TouchableOpacityStyle}
          onPress={() => navigation.navigate('TambahEvent')}
        >
        <Image
             source={require('../images/plus.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    </>
  );
  }


const styles = StyleSheet.create({
    h1: {
      fontSize: 36,
      textAlign: "center"
    },
    TouchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    },
    container: {
      backgroundColor: '#fff'
    },
    FloatingButtonStyle: {
      width: 50,
      height: 50,
    },
  });
  Home.navigationOptions = {
    headerShown: false,
  };
  const MapStateToProps = state => ({
    events: state.events,

  });
  
  export default connect(
    MapStateToProps,
    null,
  )(Home);