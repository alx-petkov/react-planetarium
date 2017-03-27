import { LAYOUT_ACTIONS } from '../constants/actionTypes';

export function loadMenu(section) {
  return {
    type: LAYOUT_ACTIONS.LOAD_MENU,
    section,
  };
}

export function loadFundamentals(section, item) {
  return {
    type: LAYOUT_ACTIONS.LOAD_FUNDAMENTALS,
    section,
    item,
  };
}
