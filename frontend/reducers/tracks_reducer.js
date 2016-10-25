import { START_RECORDING, STOP_RECORDING, ADD_NOTES }
  from '../actions/tracks_actions';

import merge from 'lodash/merge';


const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_RECORDING:
      let currTrackId = 1;
      const newTrack = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: new Date().getTime()
      };
      let newerState = merge({}, state);
      newerState[currTrackId] = newTrack;
      currTrackId++;
      return newerState;

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
      let newState1 = merge({}, state);
      newState1.roll.push(newRoll);
      return newState1;
    default:
      return state;
  }

};




export default tracksReducer;
