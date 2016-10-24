import { START_RECORDING, STOP_RECORDING, ADD_NOTES }
  from '../actions/tracks_actions';

import { merge } from 'lodash/merge';

let currTrackId = 0;

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_RECORDING:
      currTrackId++;
      let track = newTrack;
      return merge(state, track);
    case STOP_RECORDING:
      let newState = merge({}, state);
      newState.roll.push({
        notes: [],
        timeSlice: action.timeNow - state[currTrackId].timeStart
      });
      return newState;
    case ADD_NOTES:
      let newRoll = {
        notes: action.notes,
        timeSlice: action.timeNow - state[currTrackId].timeStart};
      let newState = merge({}, state);
      newState.roll.push(newRoll);
      return newState;
    default:
      return state;
  }

};

const newTrack = {id: currTrackId,  name: `Track ${currTrackId}`,  roll: [],  timeStart: new Date().getTime()};



export default tracksReducer;
