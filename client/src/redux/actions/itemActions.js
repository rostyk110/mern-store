import {ADD_ITEMS, DELETE_ITEMS, GET_ITEMS, ITEMS_LOADING} from "./types";
import axios from 'axios'

export const getItems = () => dispatch => {
  dispatch(setItemsLoading())

  axios
    .get('/api/items')
    .then(res => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    })
}

export const addItems = newItem => dispatch => {
  axios
    .post('/api/items', newItem)
    .then(res => {
      dispatch({
        type: ADD_ITEMS,
        payload: res.data
      })
    })
}

export const deleteItems = id => dispatch => {
  axios
    .delete(`api/items/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_ITEMS,
        payload: id
      })
    })
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}
