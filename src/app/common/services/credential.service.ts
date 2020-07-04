import { Injectable } from '@angular/core';

export interface Credential {
  username: string;
  password: string;
  isLoggedIn: boolean;
  name: string;
  email: string;
  phone: string;
}


@Injectable({
  providedIn: 'root'
})
export abstract class CredentialService {

  // Returns a list of all of the current user's details.
  abstract getCredentials(): Credential[];
}
