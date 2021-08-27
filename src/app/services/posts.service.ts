import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from './models/news';



@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) { }

  private _postsUrl = "http://localhost:3000/api/posts"
  private _someQuantityPostsUrl = "http://localhost:3000/api/posts?size="
  private _postByIdLink = "http://localhost:3000/api/posts/"

  getPosts():Observable<News>{
    return this._http.get<News>(this._postsUrl)
  }

  getSomePosts(quantity: number):Observable<News> {
    return this._http.get<News>(this._someQuantityPostsUrl + quantity)
  }

  getPostById(id: string):Observable<News>{
    return this._http.get<News>(this._postByIdLink + id)
  }
}
