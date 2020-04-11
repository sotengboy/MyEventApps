import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import EventRow from './EventRow';

class EventList extends Component {   
    render() {   
        const rows = [];
    
        this.props.events.forEach((event) => {
          rows.push(
              <EventRow event={event} key={event.id} />
          );
        });
        return (
          <View style={styles.container}>
            {rows}
          </View>
            
        );
      }       
}  
    const styles = StyleSheet.create({
      container: {
        backgroundColor: "#999",
      },
    
    });


export default EventList;