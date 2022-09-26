import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import {AuthService} from './auth.service'


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  // req has a method called clone which allows us to clone the request and add a new header to it
  // In this case in each request we send, we'll add a header called authorization with the token
  // In this way the server will return the data that we need if the token is valid
  intercept(req, next) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });
    // Here we're adding the header to each request
    return next.handle(tokenizeReq);
  }

}