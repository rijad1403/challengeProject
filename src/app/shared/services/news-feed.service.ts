import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserRegister } from '../models/user-register';
import { UserLogin } from '../models/user-login';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  configApi = 'https://randomlyapi.symphony.is/api/';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<Observable<any>>(`${this.configApi}posts/`);
  }

  likePost(post: {}): Observable<any> {
    return this.http.post<Observable<any>>(`${this.configApi}post-likes/`, post);
  }

  addPost(post: any): Observable<any> {
    return this.http.post<Observable<any>>(`${this.configApi}posts/`, post);
  }


}
