import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    // If the loggedIn method returns true, the user is logged in and can access the route
    if (this.authService.loggedIn()) {
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }

}
