import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  getUsersRemotely() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  getUsersfromServer(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
