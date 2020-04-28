import { createStore } from 'redux';
import eventAdd from './reducers';

const initStore =  {
        events: [
            {
              title: "Event 1",
              date: "2020-04-11 07:22:00",
            },
            {
              title: "Event 2",
              date: "2020-05-25 23:59:00",
            },
            {
              title: "Event 3",
              date: "2020-06-25 23:59:00",
            },
          ]
};

    const data = createStore(eventAdd, initStore);
    export default data;