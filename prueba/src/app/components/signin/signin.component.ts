import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          // We save the token in the local storage
          localStorage.setItem('token', res.token);
          alert('Logged in successfully')
          this.router.navigate(['/private']);
        },
        err => {
          console.log(err)
          alert('Wrong credentials, plsease try again')
        }
        
      )
  }

}
