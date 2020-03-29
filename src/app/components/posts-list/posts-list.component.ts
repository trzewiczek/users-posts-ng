import { Component } from '@angular/core'
import { Store } from "@ngrx/store"
import { Observable } from 'rxjs'

import { Post } from 'src/app/types'
import { postSelected } from 'src/app/actions'

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.sass']
})
export class PostsListComponent {
  posts$: Observable<Post[]> = this.store.select('posts')

  constructor(
    private store: Store<{ posts: Post[] }>
  ) { }

  onPostSelected (id: number): void {
    this.store.dispatch(postSelected({ id }))
  }
}
