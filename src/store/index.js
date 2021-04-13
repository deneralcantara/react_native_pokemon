import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

import pokemons from './reducers/pokemons'
import pokemon from './reducers/pokemon'

const c = combineReducers({
    pokemons,
    pokemon
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig,  c);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
