import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { EMPTY } from "rxjs"
import {
  catchError,
  map,
  mergeMap
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
    ofType(ActionTypes.POSTS_FETCHING_REQUESTED),
    mergeMap(__ => this.postsService.getAllPosts()
      .pipe(
        map(posts => postsFetchingSuccess({ posts })),
        catchError(__ => EMPTY)
      )
    )
  ))
}
