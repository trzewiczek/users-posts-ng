import { createAction, props } from "@ngrx/store"

import { User } from '../types'
import { ActionTypes } from "./action.types";

export const usersFetchingRequested = createAction(
  ActionTypes.USERS_FETCHING_REQUESTED
)

export const usersFetchingSuccess = createAction(
  ActionTypes.USERS_FETCHING_SUCCESS,
  props<{ users: User[] }>()
)
