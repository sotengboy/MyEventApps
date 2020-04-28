import React, {useState} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {View,Text,TextInput,Button,TouchableOpacity,Keyboard,StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {addEvent} from './redux/actions';

const TambahEvent = ({navigation, addEvent}) => {
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    Keyboard.dismiss();
    return setShowDatePicker(!showDatePicker);
  };

  const onSubmit = () => {
    if (!date || !title) {
      alert('Please fill all fields');
      return;
    }
    Keyboard.dismiss();
    setShowDatePicker(false);

    const newEvent = {
      title: title,
      date: date,
    };

    addEvent(newEvent);

    setDate(new Date());
    setTitle('');

    setTimeout(() => {
      navigation.navigate('Home');
    }, 200);
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Title"
          onChangeText={value => setTitle(value)}
        />
        <TouchableOpacity onPress={toggleDatePicker} style={styles.input}>
          <Text style={{alignItems: 'center'}}>{moment(date).format('YYYY-MM-DD HH:mm:ss')}</Text>
        </TouchableOpacity>

        {showDatePicker ? (
          <DatePicker
            date={date}
            onDateChange={setDate}
            style={styles.datepicker}
          />
        ) : null}
      </View>
      <View>
        <Button title="Tambah Event" onPress={onSubmit} />
      </View>
    </View>
  );
};
TambahEvent.navigationOptions = ({navigation}) => ({
  title:'Buat Event Kamu',
  headerTitleStyle:{
    fontSize:20,
    textAlign: "center",
  },
  headerStyle:{
    backgroundColor:'#4A94FB',
  },
  headerTintColor: 'white',
  headerLeft: () => (
    <TouchableOpacity                
      onPress={() => navigation.navigate('Home')}
    >
    <Text style={styles.backButton}>{`< Back`}</Text>
    </TouchableOpacity>
  ),
 
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    
  },
  datepicker: {
    backgroundColor: '#fff',
    marginBottom: 15,
    display: 'flex',
    alignSelf: 'center'
  },
  backButton: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16
  }
});

const MapStateToProps = state => ({
  events: state.events,
});

const MapDispatchToProps = dispatch => ({
  addEvent: event => dispatch(addEvent(event)),
});
export default connect(
  MapStateToProps,
  MapDispatchToProps,
)(TambahEvent);