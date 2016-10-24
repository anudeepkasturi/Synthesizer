import { START_RECORDING, STOP_RECORDING, ADD_NOTES }
  from '../actions/tracks_actions';


const isRecordingReducer = (state = {isRecording: false}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_RECORDING:
      return {isRecording: true};
    case STOP_RECORDING:
      return {isRecording: false};
    default:
      return state;
  }
};

export default isRecordingReducer;
