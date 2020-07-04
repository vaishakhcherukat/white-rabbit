import { Injectable } from '@angular/core';
import { Credential, CredentialService } from './credential.service';
import * as user from '../../../assets/user.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CredentialService{
  public response = {
    status: 200,
    data : {}
  }
  public getCredentials() {
    const creds = user['default'];
    const credentials: Credential[] = [ {
      username: creds.username,
      password: creds.password,
      isLoggedIn: creds.isLoggedIn,
      name: creds.name,
      email: creds.email,
      phone: creds.phone,
    }];

    return credentials;
  }

  public authenticateUser(request, cb): void {
    let cred = this.getCredentials()[0];
    if(cred['username'] === request.username && cred['password'] === request.password) {
      cred.isLoggedIn = true;
      sessionStorage.setItem('Auth', JSON.stringify(cred));
      cb({
        status: 200,
        data : cred,
        message: 'Login Successful'
      });
    } else {
      cb({
        status: 401,
        data : null,
        message: 'Incorrect Username or password. Please try again.'
      })
    }
  }
}
