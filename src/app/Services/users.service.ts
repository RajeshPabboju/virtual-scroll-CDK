import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public  baseUrl = "http://localhost:3000/users"

 
  
  constructor(private http:HttpClient) { }

  public getUsers(){
    return this.http.get(`${this.baseUrl}`)
  }

}
