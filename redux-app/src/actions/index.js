import axios from 'axios'

export const FETCH_ITEM_LOADING = 'FETCH_ITEM_LOADING'
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS'
export const FETCH_ITEM_FAIL = 'FETCH_ITEM_FAIL'

export const getShoes = () => {
    return dispatch => {
        dispatch({type:FETCH_ITEM_LOADING});
        axios
            .get('https://mikestore23.herokuapp.com/api/products/men')
            .then(res=>{
                dispatch({type:FETCH_ITEM_SUCCESS, payload:res.data})
                console.log(res.data)
            })
            .catch(err=>{
                dispatch({type:FETCH_ITEM_FAIL, payload:err.message})
            })
    }
}


export const fetchItemLoading = () => {
    return({ type: FETCH_ITEM_LOADING })
}

export const fetchItemSuccess = (item) => {
    return({ type: FETCH_ITEM_SUCCESS, payload:item })
}

export const fetchItemFail = (error) => {
    return({ type: FETCH_ITEM_FAIL, payload:error })
}