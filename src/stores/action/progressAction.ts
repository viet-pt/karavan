import { HIDE_PROGRESS, SHOW_PROGRESS } from "stores/action.constant"

export const showProgressTurn = () => (dispatch) => {
  return dispatch({ 
    type: SHOW_PROGRESS
  })
}

export const hideProgressTurn = () => (dispatch) => {
  return dispatch({
    type: HIDE_PROGRESS
  })
}