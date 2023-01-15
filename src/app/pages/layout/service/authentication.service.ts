import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiUrl="http://localhost/8000/api/"
  constructor(private http: HttpClient, private router: Router) { }
  getalluser(){
    return 
  }
}
