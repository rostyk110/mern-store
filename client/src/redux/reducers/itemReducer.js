import {v4 as uuid} from "uuid";
import {GET_ITEMS, ADD_ITEMS, DELETE_ITEMS} from "../actions/types";

const initialState = {
  items: [
      {id: uuid(), name: 'Eggs'},
      {id: uuid(), name: 'Milk'},
      {id: uuid(), name: 'Steak'},
      {id: uuid(), name: 'Water'}
    ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {...state}
    case ADD_ITEMS:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case DELETE_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    default:
      return state
  }
}


