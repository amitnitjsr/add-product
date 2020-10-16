import storage from 'redux-persist/lib/storage'
import { persistCombineReducers } from 'redux-persist'
import BaseReducer from './BaseReducer';
import product from '../Container/Product/Reducer';

const rootReducer = {
    baseReducer: BaseReducer,
    product
}

export const persistConfig = {
    key: 'Project.0.0',
    storage,
    blacklist: [
        'product',
    ]
}

const appReducer = persistCombineReducers(persistConfig, rootReducer)

const reducer = (state, action) => {
    return appReducer(state, action)
};

export default reducer;