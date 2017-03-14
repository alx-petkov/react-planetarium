import {LANGUAGE_ACTIONS} from '../constants/actionTypes';
// import calculator from '../utils/fuelSavingsCalculator';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export function languageReducer(state = initialState.language, action) {

  switch (action.type) {
    case LANGUAGE_ACTIONS.CHANGE_LANGUAGE :
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, { active: state.other, other: state.active });


    default:
      return state;
  }
}
