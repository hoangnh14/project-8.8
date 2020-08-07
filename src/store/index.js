import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import { whitelist } from '../reducers/list/persist-keys';
import {rootReducer} from "./combine";

const persistConfig = {
  key: 'root',
  storage,
  whitelist,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export const persistor = persistStore(store);
