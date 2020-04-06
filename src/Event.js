import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';
class Event extends Component {
    state = {
        events: [
          {
            id: "1",
            title: "Event 1",
            date: "06-04-2020 23:00",
          },
          {
            id: "2",
            title: "Event 2",
            date: "07-04-2020 23:00",
          },
          {
            id: "3",
            title: "Event 3",
            date: "08-04-2020 23:00",
          },
        ]
      };
      renderItem = ({ item }) => (
          <View
            style={{ padding: 15, borderBottomColor: "#ddd", borderBottomWidth: 1 }}
            key={item.key}
          >
              <Text style={{ fontSize: 20 }}>{item.title}</Text>
              <Text style={{ color: "rgba(0, 0, 0, .5)" }}>{item.date}</Text>
              
          </View>
        );
    render () {
    return (
        <>
              <View style={styles.body}>
                <FlatList 
                data={this.state.events}
                keyExtractor={item => item.id}
                renderItem={this.renderItem}
                style={styles.sectionContainer}/>
              </View>
        </>
      );
              }
    };
    
    const styles = StyleSheet.create({
      body: {
        backgroundColor: "#999",
      },
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        backgroundColor: "#fff"
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
      },
      highlight: {
        fontWeight: '700',
      },
      footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
      },
    });


export default Event;