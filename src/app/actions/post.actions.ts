import { createAction, props } from "@ngrx/store"

import { Post } from '../types'
import { ActionTypes } from "./action.types";

export const postEditOpened = createAction(
  ActionTypes.POST_EDIT_OPENED,
  props<{ id: number }>()
)

export const postEditCanceled = createAction(
  ActionTypes.POST_EDIT_CANCELED
)

export const postSavingRequested = createAction(
  ActionTypes.POSTS_FETCHING_REQUESTED,
  props<{ post: Post }>()
)

export const postSavingSuccess = createAction(
  ActionTypes.POSTS_FETCHING_SUCCESS,
  props<{ post: Post }>()
)
