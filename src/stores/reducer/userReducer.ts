import { ADD_USER_INFO, REMOVE_USER_INFO } from "stores/action.constant"
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const initialState = {
  authorized: cookies.get('token') ? true : false,
  data: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_INFO:
      return {
        ...state,
        authorized: true,
        data: action.payload
      };
    case REMOVE_USER_INFO:
      return {
        authorized: false,
        data: null
      };

    default:
      return state;
  }
};
