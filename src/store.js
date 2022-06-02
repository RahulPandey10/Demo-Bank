import reducers from './reducers/AllReducer';
import { createStore } from 'redux';

const store = createStore(reducers);
export default store;
