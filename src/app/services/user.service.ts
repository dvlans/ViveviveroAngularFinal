import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_ENDPOINT = 'http://localhost:9000/api'
  constructor( private _httpClient:HttpClient, ) { }
    save(user: User) {
    const headers = new HttpHeaders( {'Content-Type': 'application/json'} );
    return this._httpClient.post(this.API_ENDPOINT + '/users' , user, {headers:headers})
  }

}
