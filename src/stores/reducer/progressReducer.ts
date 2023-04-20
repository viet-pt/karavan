import { HIDE_PROGRESS, RESET_PROGRESS, SHOW_PROGRESS } from "stores/action.constant"

const initialState = {
  loading: 0
};

export function progressReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_PROGRESS:
      return {
        ...state,
        loading: state.loading + 1,
      };
      
    case HIDE_PROGRESS:
      return {
        ...state,
        loading: state.loading - 1,
      };

    case RESET_PROGRESS:
      return {
        ...state,
        loading: 0,
      };

    default:
      return state;
  }
}
