import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserRegister } from '../models/user-register';
import { UserLogin } from '../models/user-login';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  configApi = 'https://randomlyapi.symphony.is/api/';

  constructor(private http: HttpClient) { }

  register(userRegister: UserRegister): Observable<any> {
    return this.http.post<Observable<any>>(`${this.configApi}auth/signup/`, userRegister);
  }

  login(userLogin: UserLogin): Observable<any> {
    return this.http.post<Observable<any>>(`${this.configApi}auth/login/`, userLogin);
  }

  getInfluencers(pageNumber: number): Observable<any> {
    return this.http.get<Observable<any>>(`${this.configApi}influencer/?page=${pageNumber}`);
  }

  assignInfluencers(influencers: {}): Observable<any> {
    return this.http.post<Observable<any>>(`${this.configApi}influencer/`, influencers);
  }
}
