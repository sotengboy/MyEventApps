import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';
import CountDown from 'react-native-countdown-component';

const Event = ({event}) => {   

  const [finish, setFinish] = useState(false);
  timestamp = moment(event.date).format("X");
  const until = (timestamp * 1000 - Date.now()) / 1000;
  const handleFinish = () => {
    setFinish(true);
  }
  if (until > -1) {
    return (
      <View style={styles.countdown}>
      <View style={styles.event}>
        <Text style={styles.date}>{moment(event.date).format('DD MMMM YYYY')}</Text>
        <Text style={styles.title}>{event.title}</Text>
      </View>
      <CountDown
                until={until}
                running={finish ? false : true}
                onFinish={handleFinish}
                digitStyle={{backgroundColor: '#C12C0C', marginRight: 20,}}
                digitTxtStyle={{color: '#fff'}}
                timeLabelStyle={{color: '#000', marginRight: 20}}
                timeLabels={{d: 'Hari', h: 'Jam', m: 'Menit', s: 'Detik'}}
                size={20}
            />
            {finish ? (
            <View >
                <Text >Finish</Text>
            </View>
      ) : null}
    </View>
      );
    } else {
      return null;
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
export default Event;