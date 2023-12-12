// // src/redux/store.js
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
console.log('Redux store created:', store);
export default store;