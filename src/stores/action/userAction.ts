import { ADD_USER_INFO, REMOVE_USER_INFO } from "stores/action.constant"

export const fetchUser = (data?: any) => dispatch => {
  dispatch({
    type: ADD_USER_INFO,
    payload: data
  })
}

export const removeUser = () => dispatch => {
  dispatch({
    type: REMOVE_USER_INFO
  })
}
