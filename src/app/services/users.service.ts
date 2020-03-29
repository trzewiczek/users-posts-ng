import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { EMPTY, Observable } from 'rxjs'
import { catchError } from "rxjs/operators";

import { User } from '../types'
import { BASE_URL } from "../consts"

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) {}

  getAllUsers (): Observable<User[]> {
    return this.http.get<User[]>(`${BASE_URL}/users`)
      .pipe(
        catchError(__ => EMPTY)
      )
  }
}
