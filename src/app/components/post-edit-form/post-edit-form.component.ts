import { Component, OnInit, Input } from '@angular/core';
import { Store, createSelector } from "@ngrx/store";

import { Post, State } from "src/app/types";
import { postSavingRequested } from 'src/app/actions';

const selectedPost = createSelector(
  (state: State) => state.posts,
  (state: State) => state.ui.selectedPostId,
  (posts: Post[], selectedPostId: number) =>
    posts.find(e => e.id === selectedPostId)
)

@Component({
  selector: 'app-post-edit-form',
  templateUrl: './post-edit-form.component.html',
  styleUrls: ['./post-edit-form.component.sass']
})
export class PostEditFormComponent implements OnInit {
  post: Post

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.store.select(selectedPost).subscribe(
      selectedPost => this.post = selectedPost
    )
  }

  save (): void {
    this.store.dispatch(postSavingRequested({ post: this.post }))
  }
}
