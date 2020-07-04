import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public creds = {
    username: '',
    password: ''
  }
  public loginError;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // authenticate the user.
  public loginUser(): void {
    this.loginError = '';
    this.auth.authenticateUser(this.creds,  response => {
      if(response.status === 200) {
        console.log()
        this.router.navigate(['home/']);
      } else {
        this.loginError = response.message;
      }
    })
  }

}
