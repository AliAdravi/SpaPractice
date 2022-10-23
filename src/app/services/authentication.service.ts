import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ICredential, IUser } from '../models/auth.model';
import { constants } from './../../assets/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: IUser |null = null;
  constructor(private httpClient: HttpClient,
    private router: Router) { }

  login(credential: ICredential):Observable<IUser> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'email': credential.email,
      'Password': credential.password 
    });
    let options = { headers: headers };
    return this.httpClient.post<IUser>(`${constants.Urls.authentication.login}`, null, options)
      .pipe(map( x => {
        this.maintainSession(x);
        return x;
      }));
  }

  register(user: IUser):Observable<IUser> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Password': user.password });
    let options = { headers: headers };
    user.password = '';
    return this.httpClient.post<IUser>(`${constants.Urls.authentication.register}`, user, options);
  }

  refreshToken() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'RefreshToken': this.getRefreshToken });
    let options = { headers: headers };
    return this.httpClient.post<IUser>(`${constants.Urls.authentication.refreshToken}`, null, options)
      .pipe(map(user => {
        this.maintainSession(user);
        return user.token;
      }));
  }

  get isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/"]);
  }

  private maintainSession(user: IUser) : void {
    localStorage.setItem('token', user.token);
    localStorage.setItem('refreshToken', user.refreshToken);
    localStorage.setItem('user', JSON.stringify(user));
  }
  get getToken(): string {
    return localStorage.getItem('token') || '';
  }
  get getRefreshToken(): string {
    return localStorage.getItem('refreshToken') || '';
  }

  get getUser(): IUser | null {
    return this.user;
  }
}
