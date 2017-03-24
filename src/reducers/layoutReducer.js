import { LAYOUT_ACTIONS } from '../constants/actionTypes';
import { SECTIONS } from '../constants/sections';
import { menu as solar_system } from '../data/solar_system/menu';
import { menu as stars } from '../data/stars/menu';
import objectAssign from 'object-assign';
import initialState from './initialState';


// toDo separate in helper ???
const selectMenu = (section) => {
  switch (section) {
    case SECTIONS.solar_system:
      return solar_system;
    case SECTIONS.stars:
        return stars;
    default:
    return {};
  }
};

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export function layoutReducer(state = initialState.layout, action) {

  switch (action.type) {
    case LAYOUT_ACTIONS.LOAD_MENU :
      return objectAssign({}, state, { menu: selectMenu(action.section) });

    default:
      return state;
  }
}
