import React, { Component, useState } from 'react';
import EventList from './EventList';
class Event extends Component {   
  constructor(props) {
    super(props);
  }
    render () {
    return (
        <EventList events={this.props.events} />
      );
    }
};

export default Event;