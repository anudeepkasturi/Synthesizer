import { KEY_PRESSED, KEY_RELEASED } from '../actions/notes_actions';
import { NOTE_NAMES } from '../util/tones';
import union from 'lodash/union';

const defaultState = [];

const notes = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case KEY_PRESSED:
      if (NOTE_NAMES.includes(action.key)) {
        return union(state, [action.key]);
      } else {
        return state;
      }
    case KEY_RELEASED:
      const newState = state.slice();
      newState.remove(action.key);
      return newState;
    default:
      return state;
  }
};

export default notes;
