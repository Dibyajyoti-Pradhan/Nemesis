import {AsyncStorage} from "react-native";
import {persistReducer, persistStore} from "redux-persist";
import {offlineReducer, rootReducer} from "./src/root.reducer";
import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    transaction: rootReducer,
    isOffline: offlineReducer
}));
const configuredStore = createStore(
    persistedReducer,
    {},
    composeWithDevTools()
);
const persistence = persistStore(configuredStore);

export const persistenceConfiguredStore = {
    persistence, configuredStore
};
