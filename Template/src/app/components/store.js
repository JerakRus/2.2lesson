import { createStore, applyMiddleware } from 'redux';

//Middleware
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

//Reducers
import reducers from '../../reducers/reducer';


// const reducer = combineReducers({
//     data: reducers
// });

const middleware = applyMiddleware(promise(), logger, thunk);

const store = createStore(reducers, middleware);

export default store;