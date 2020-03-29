import { createReducer, on } from "@ngrx/store";

import { Post } from "../types";
import { postsFetchingSuccess } from '../actions';

const initialState: Post[] = []

const __postsReducer = createReducer(initialState,
  on(
    postsFetchingSuccess,
    (__, action) => action.posts
  )
)

export function postsReducer (state, action) {
  return __postsReducer(state, action)
}
