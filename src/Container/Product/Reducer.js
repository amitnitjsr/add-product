import * as types from './ActionTypes';

const initialState = {
    productDetails: [
        {
            'id': 1,
            'name': 'Brown Brim',
            'description': 'nice clothes and color',
            'price': 100,
            'qty': 20,
            'imageurl': "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        }, {
            'id': 2,
            'name': 'Blue Beanie',
            'description': 'nice clothes and color',
            'price': 300,
            'qty': 80,
            'imageurl': "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        },
        {
            'id': 3,
            'name': 'Brown Cowboy',
            'description': 'nice clothes and color',
            'price': 550,
            'qty': 40,
            'imageurl': "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        }, {
            'id': 4,
            'name': 'Brown Brim',
            'description': 'nice clothes and color',
            'price': 220,
            'qty': 30,
            'imageurl': "https://i.ibb.co/RjBLWxB/grey-brim.png",
        }, {
            'id': 5,
            'name': 'Green Beanie',
            'description': 'nice clothes and color',
            'price': 120,
            'qty': 40,
            'imageurl': "https://i.ibb.co/YTjW3vF/green-beanie.png",
        }, {
            'id': 6,
            'name': 'Brown Brim',
            'description': 'nice clothes and color',
            'price': 300,
            'qty': 50,
            'imageurl': "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        }, {
            'id': 7,
            'name': 'Red Beanie',
            'description': 'nice clothes and color',
            'price': 50,
            'qty': 20,
            'imageurl': "https://i.ibb.co/bLB646Z/red-beanie.png",
        }, {
            'id': 8,
            'name': 'Wolf Cap',
            'description': 'nice clothes and color',
            'price': 350,
            'qty': 80,
            'imageurl': "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        }
    ],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_NEW_PRODUCT:
        case types.DELETE_PRODUCT:
        case types.EDIT_PRODUCT:
        case types.SEARCH_PRODUCT:
            return {
                ...state,
                productDetails: action.payload,
            }
        default:
            return state
    }
}