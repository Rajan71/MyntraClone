import { createStore, applyMiddleware, compose } from 'redux'
import ProfilePicReducer from '../reducer/ProfilePicReducer'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import appReducer from '../reducer';


const enhancer = compose(
    applyMiddleware(
        thunk,
        createLogger({
            predicate: () => __DEV__,
        }),
    ),
)


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['ProfilePicReducer', 'MobileNumReducer', 'UpdateCartReducer']
}
// const persistData = {
//     key: 'rootD',
//     storage: AsyncStorage,
//     whitelist: ['MobileNumReducer']
// }

const persistedReducer = persistReducer(persistConfig, appReducer,)


export const store = createStore(persistedReducer, {}, enhancer)
export const persistor = persistStore(store)

