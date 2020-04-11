import React from 'react';
import {View, ScrollView, TextInput, Button, StyleSheet} from 'react-native';

const AddEvent = () => {
    
    return (
        <ScrollView>
      <View>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Button title="Tambah Event" />
      </View>
    </ScrollView>
    );
}
const styles = StyleSheet.create({
    input: {
        margin: 10,
        backgroundColor: "#ccc",
        borderRadius: 5
    }
});
export default AddEvent;