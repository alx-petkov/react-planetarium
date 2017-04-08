import { LAYOUT_ACTIONS } from '../constants/actionTypes';
import selectMenu from '../utils/menuHelper';
import selectBasics from '../utils/basicsHelper';
import selectDetail from '../utils/detailsHelper';
import objectAssign from 'object-assign';
import initialState from './initialState';


// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export function layoutReducer(state = initialState.layout, action) {

  switch (action.type) {
    case LAYOUT_ACTIONS.LOAD_MENU :
      return objectAssign({}, state, { menu: selectMenu(action.section) });
    case LAYOUT_ACTIONS.LOAD_BASICS:
      return objectAssign({}, state, { basics: selectBasics(action.section, action.item) });
    case LAYOUT_ACTIONS.LOAD_DETAIL:
      return objectAssign({}, state, { detail: selectDetail(action.section, action.item, action.detail) });
    default:
      return state;
  }
}
