import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Setting our connection to the backend
  private URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient, private router: Router) { }

  // The user parameter is the object that we will send with our post method which we created in the backend
  signUpUser(user) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signInUser(user) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  // We create a method to check if the user is logged in or not by checking if the token is in the local storage
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  // We create a method to get the token from the local storage
  getToken() {
    return localStorage.getItem('token');
  }

}
