import { createReducer, on } from "@ngrx/store";

import { User } from "../types";
import { usersFetchingSuccess } from '../actions';

const initialState: User[] = []

const __usersReducer = createReducer(initialState,
  on(
    usersFetchingSuccess,
    (__, action) => action.users
  )
)

export function usersReducer (state, action) {
  return __usersReducer(state, action)
}
