import { createAction, props } from "@ngrx/store"

import { Post } from '../types'
import { ActionTypes } from "./action.types";

export const postSelected = createAction(
  ActionTypes.POST_EDIT_OPENED,
  props<{ id: number }>()
)

export const postEditCanceled = createAction(
  ActionTypes.POST_EDIT_CANCELED
)

export const postSavingRequested = createAction(
  ActionTypes.POST_SAVING_REQUESTED,
  props<{ post: Post }>()
)

export const postSavingSuccess = createAction(
  ActionTypes.POST_SAVING_SUCCESS,
  props<{ userId: number }>()
)
