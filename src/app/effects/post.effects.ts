import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { EMPTY } from "rxjs"
import {
  catchError,
  map,
  mergeMap
} from "rxjs/operators"

import { PostService } from '../services'
import { ActionTypes, postSavingSuccess } from '../actions'

@Injectable()
export class PostEffects {
  constructor (
    private actions$: Actions,
    private postService: PostService
  ) {}

  savePost$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.POST_SAVING_REQUESTED),
    map(({ post }) => post),
    mergeMap(post => this.postService.savePost(post)
      .pipe(
        map(__ => postSavingSuccess()),
        catchError(__ => EMPTY)
      ))
  ))
}

