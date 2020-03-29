import { createReducer, on } from "@ngrx/store"

import { UIState } from "../types"
import {
  postEditCanceled,
  postSelected,
  postSavingSuccess,
  userSelected,
} from '../actions'

const initialState: UIState = {
  selectedUserId: null,
  selectedPostId: null
}

const __uiReducer = createReducer(initialState,
  on(
    userSelected,
    (state, action) => ({
      ...state,
      selectedUserId: action.userId
    })
  ),

  on(
    postSelected,
    (state, action) => ({
      ...state,
      selectedPostId: action.id
    })
  ),

  on(
    postEditCanceled,
    postSavingSuccess,
    (state, __) => ({
      ...state,
      selectedPostId: null
    })
  )
)

export function uiReducer (state, action) {
  return __uiReducer(state, action)
}
