import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { EMPTY } from "rxjs"
import {
  catchError,
  map,
  mergeMap,
  tap
} from "rxjs/operators"

import { PostsService } from '../services'
import { ActionTypes, postsFetchingSuccess } from '../actions'

@Injectable()
export class PostsEffects {
  constructor (
    private actions$: Actions,
    private postsService: PostsService
  ) {}

  fetchPosts$ = createEffect(() => this.actions$.pipe(
    ofType(
      ActionTypes.POST_SAVING_SUCCESS,
      ActionTypes.USER_SELECTED
    ),
    map(({ userId }) => userId),
    mergeMap(userId => this.postsService.getUsersPosts(userId)
      .pipe(
        map(posts => postsFetchingSuccess({ posts })),
        catchError(__ => EMPTY)
      )
    )
  ))
}
