import { Post } from './posts.types'
import { User } from './users.types'


export interface UIState {
  selectedPostId: number,
  selectedUserId: number
}

export interface State {
  posts: Post[],
  ui: UIState,
  users: User[]
}

