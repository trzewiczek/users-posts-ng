import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store"
import { Observable } from 'rxjs'

import { User } from 'src/app/types'
import { userSelected, usersFetchingRequested } from 'src/app/actions'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit{
  users$: Observable<User[]> = this.store.select('users')

  constructor(
    private store: Store<{ users: User[] }>
  ) { }

  ngOnInit (): void {
    this.store.dispatch(usersFetchingRequested())
  }

  onUserSelected (id: number): void {
    this.store.dispatch(userSelected({ id }))
  }
}
