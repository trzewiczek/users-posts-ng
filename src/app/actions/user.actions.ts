import { createAction, props } from "@ngrx/store"

import { ActionTypes } from "./action.types";

export const userSelected = createAction(
  ActionTypes.USER_SELECTED,
  props<{ id: number }>()
)
