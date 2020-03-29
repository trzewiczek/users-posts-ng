import { createReducer, on } from "@ngrx/store";

import { UIState } from "../types";
import { userSelected } from '../actions';

const initialState: UIState = {
  selectedUserId: null,
  selectedPostId: null
}

const __uiReducer = createReducer(initialState,
  on(
    userSelected,
    (state, action) => ({
      ...state,
      selectedUserId: action.id
    })
  )
)

export function uiReducer (state, action) {
  return __uiReducer(state, action)
}
