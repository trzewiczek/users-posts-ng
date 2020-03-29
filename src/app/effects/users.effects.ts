import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { EMPTY } from "rxjs"
import {
  catchError,
  map,
  mergeMap
} from "rxjs/operators"

import { UsersService } from '../services'
import { ActionTypes, usersFetchingSuccess } from '../actions'

@Injectable()
export class UsersEffects {
  constructor (
    private actions$: Actions,
    private usersService: UsersService
  ) {}

  fetchUsers$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.USERS_FETCHING_REQUESTED),
    mergeMap(__ => this.usersService.getAllUsers()
      .pipe(
        map(users => usersFetchingSuccess({ users })),
        catchError(__ => EMPTY)
      )
    )
  ))
}
