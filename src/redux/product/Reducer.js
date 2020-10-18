import * as types from './ActionTypes';
import Data from '../../asset/data/data';

const initialState = {
    productDetails: Data
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_NEW_PRODUCT:
        case types.DELETE_PRODUCT:
        case types.EDIT_PRODUCT:
        case types.SEARCH_PRODUCT:
        case types.FILTER_PRODUCT:
            return {
                ...state,
                productDetails: action.payload,
            }
        default:
            return state
    }
}