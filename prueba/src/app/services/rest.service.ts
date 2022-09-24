import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

// To send the data to the server we need to set the headers 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class RestService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private deleteUrl = 'https://jsonplaceholder.typicode.com/posts/1'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  deletePost(post: Post): Observable<Post> {
    const url = `${this.deleteUrl}/${post.id}`;
    return this.http.delete<Post>(url);
  }
}