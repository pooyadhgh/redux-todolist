import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter } from './Reducers';

const reducer = combineReducers({
  todos,
  visibilityFilter,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
