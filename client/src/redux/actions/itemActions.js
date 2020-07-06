import {ADD_ITEMS, DELETE_ITEMS, GET_ITEMS} from "./types";

export const getItems = () => {
  return {
    type: GET_ITEMS
  }
}

export const addItems = newItem => {
  return {
    type: ADD_ITEMS,
    payload: newItem
  }
}

export const deleteItems = id => {
  return {
    type: DELETE_ITEMS,
    payload: id
  }
}
