import { combineReducers } from 'redux';

import passport_valid_reducer from './passport_valid_reducer';

const rootReducer = combineReducers({
  passport_valid_reducer,
});

export default rootReducer;