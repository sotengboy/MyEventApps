import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

class EventRow extends Component {
    render() {
      const event = this.props.event;
      //const date = moment(event.date).format();
      //const timestamp = event.date;
      const timestamp = moment.utc(`${event.date}`).unix();
      const until = (timestamp * 1000 - Date.now()) / 1000;

      return (
        <View style={styles.countdown}>
          <View style={styles.event}>
            <Text style={styles.date}>{moment(event.date).format('d MMMM YYYY')}</Text>
            <Text style={styles.title}>{event.title}</Text>
          </View>
            <CountDown
                until={until}
                onPress={() => alert(event.title)}
                digitStyle={{backgroundColor: '#C12C0C', marginRight: 20,}}
                digitTxtStyle={{color: '#fff'}}
                size={20}
            />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    countdown: {
      backgroundColor: '#fff',
      padding: 20,
      margin: 20,
      borderWidth: 1,
      borderRadius: 5
    },
    event: {
      flexDirection: 'row'
    },
    date: {
      fontSize: 18,
      marginTop: 5,
      color: '#999'
    },
    title: {
      fontWeight: "700",
      fontSize: 25,
      marginLeft: 10,
      marginBottom: 10
    }
    
  });
export default EventRow;