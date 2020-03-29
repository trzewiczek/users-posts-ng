import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { EMPTY, Observable } from 'rxjs'
import { catchError } from "rxjs/operators";

import { Post } from '../types'
import { BASE_URL } from "../consts"

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) {}

  getUsersPosts (userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${BASE_URL}/posts?userId=${userId}`)
      .pipe(
        catchError(__ => EMPTY)
      )
  }
}
