import { LANGUAGE_ACTIONS } from '../constants/actionTypes';

export function changeLanguage() {
  console.log('action');
  return {
    type: LANGUAGE_ACTIONS.CHANGE_LANGUAGE,
    // newLang,
  };
}
