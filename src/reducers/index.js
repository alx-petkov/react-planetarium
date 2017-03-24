import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import { languageReducer as language } from './languageReducer';
import { layoutReducer as layout } from './layoutReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  language,
  layout,
  routing: routerReducer
});

export default rootReducer;
