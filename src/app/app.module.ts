import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { AppRoutingModule } from './app-routing.module'

import {
  PostEffects,
  PostsEffects,
  UsersEffects
} from './effects'
import { uiReducer, usersReducer } from './reducers'

import { AppComponent } from './components/app/app.component'
import { UserComponent } from './components/user/user.component'
import { UsersListComponent } from './components/users-list/users-list.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      ui: uiReducer,
      users: usersReducer,
    }),
    EffectsModule.forRoot([
      PostEffects,
      PostsEffects,
      UsersEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
