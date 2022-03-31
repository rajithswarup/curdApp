import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  List, User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  apiUrl='https://gorest.co.in/public/v1/posts'

  constructor(private _http: HttpClient) { }

  getUsers()
  {
    return this._http.get(this.apiUrl);
  }

  apiTableUrl='https://gorest.co.in/public/v1/users'

  getTableList()
  {
    return this._http.get(this.apiTableUrl);
  }
}
