import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {authReducer} from './Authentication/reducer';
import {veichlesReducer} from './Veichles/reducer';
import {searchReducer} from './Search/reducer';
import {veichlesSaga} from './Veichles/sagas';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['search'],
};
const rootReducer = combineReducers({
  auth: authReducer,
  veichle: veichlesReducer,
  search: searchReducer,
});
// lets cache images
const persistedReducer = persistReducer(persistConfig, rootReducer);

function* allSagas() {
  yield all([...veichlesSaga]);
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares),
);
export const persistor = persistStore(store);

sagaMiddleware.run(allSagas);
