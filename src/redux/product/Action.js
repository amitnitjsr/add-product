import * as types from './ActionTypes';
import Data from '../../asset/data/data';

export const addNewProduct = (data) => {
    const { name, description, price, qty, imageurl } = data;
    return (dispatch, getState) => {
        const { productDetails } = getState().product;
        const lastData = productDetails[productDetails.length - 1];
        const newData = [
            ...productDetails,
            {
                'id': lastData.id + 1,
                'name': name || '',
                'description': description || '',
                'price': price || '',
                'qty': qty || '',
                'imageurl': imageurl || '',
            }
        ]
        return dispatch({ type: types.CREATE_NEW_PRODUCT, payload: newData });
    }
}


export const deleteProduct = (data) => {
    const { id } = data;
    return (dispatch, getState) => {
        const { productDetails } = getState().product;
        const newData = productDetails.filter((data) => data.id !== id);
        return dispatch({ type: types.DELETE_PRODUCT, payload: newData });
    }
}

export const editProduct = (data) => {
    const { id, name, description, price, qty, imageurl } = data;
    return (dispatch, getState) => {
        const { productDetails } = getState().product;
        const newData = productDetails.filter(data => {
            if (data.id === id) {
                if (name) data.name = name;
                if (description) data.description = description;
                if (price) data.price = price;
                if (qty) data.qty = qty;
                if (imageurl) data.imageurl = imageurl;
            }
            return data;
        })
        return dispatch({ type: types.EDIT_PRODUCT, payload: newData });
    }
}

export const searchProduct = (searchInput) => {
    return (dispatch, getState) => {
        // const { productDetails } = getState().product;
        let filteredData = '';
        if (searchInput) {
            filteredData = Data.filter(value => {
                return value.name
                    .toString()
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
            })
            return dispatch({ type: types.SEARCH_PRODUCT, payload: filteredData });
        }
        else {
            return dispatch({ type: types.SEARCH_PRODUCT, payload: Data });
        }
    }
}

export const filterProduct = (data) => {
    const { filterBy, range } = data;
    return (dispatch, getState) => {
        // const { productDetails } = getState().product;
        let filteredData = '';
        if (filterBy === 'Price' && Data) {
            filteredData = Data.filter(f => ((f.price) <= parseInt(range)))
            return dispatch({ type: types.FILTER_PRODUCT, payload: filteredData });
        }
        else if (filterBy === 'Quantity' && Data) {
            filteredData = Data.filter(f => ((f.qty) <= parseInt(range)))
            return dispatch({ type: types.FILTER_PRODUCT, payload: filteredData });
        }
    }
}