import { createAction, props } from "@ngrx/store"

import { Post } from '../types'
import { ActionTypes } from "./action.types";

export const postsFetchingRequested = createAction(
  ActionTypes.POSTS_FETCHING_REQUESTED
)

export const postsFetchingSuccess = createAction(
  ActionTypes.POSTS_FETCHING_SUCCESS,
  props<{ posts: Post[] }>()
)

