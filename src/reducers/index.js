import { combineReducers } from 'redux';
import activeUtangs from './utangReducer';
import paidUtangs from './paidUtangReducer';

const allReducers = combineReducers({
    activeUtangs,
    paidUtangs
})
  
export default allReducers