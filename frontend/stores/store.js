import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { NOTE_NAMES } from '../util/tones';


const defaultState = {};
const configureStore = (preloadedState = defaultState ) => {
  return createStore(rootReducer, preloadedState);
};

export default configureStore;
