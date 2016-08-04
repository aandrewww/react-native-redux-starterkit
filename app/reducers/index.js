import {combineReducers} from 'redux';

import auth from './auth';
import counter from './counter';
import identity from './identity';
import storage from './storage';

export default rootReducer = combineReducers({
	auth,
	counter,
    identity,
    storage
});

