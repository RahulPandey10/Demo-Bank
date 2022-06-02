import { combineReducers } from 'redux';
import amountReducer from './amountReducer';
import transactionReducer from './TransactionReducer';

const reducers = combineReducers({
  amount: amountReducer,
  transaction: transactionReducer,
});

export default reducers;
