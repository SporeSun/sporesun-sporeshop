// // src/redux/store.js
// import { createStore } from 'redux';
// import storage from 'redux-persist/lib/storage';
// import rootReducer from './reducers';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer);

// export { store, persistor };


// // src/redux/store.js
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
console.log('Redux store created:', store);
export default store;