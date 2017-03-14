import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import { languageReducer as language } from './languageReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  language,
  routing: routerReducer
});

export default rootReducer;
