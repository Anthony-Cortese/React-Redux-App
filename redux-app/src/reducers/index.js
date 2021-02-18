import {FETCH_ITEM_LOADING, FETCH_ITEM_SUCCESS, FETCH_ITEM_FAIL} from './../actions'

const initialState = {
    item: [],
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action)=> {
    switch (action.type) {
        case(FETCH_ITEM_LOADING):
            return({
            ...state,
            isFetching: true
        });

        case(FETCH_ITEM_SUCCESS):
            return({
                ...state,
                item: [...action.payload],
                isFetching: false
            });

        case(FETCH_ITEM_FAIL):
            return({
                ...state,
                error: action.payload,
                isFetching: false
            })    

            default:
                return state
    }
}