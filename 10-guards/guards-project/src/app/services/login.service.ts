import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(){
    localStorage.setItem('token', 'asd321ad24ada')
  }

  doLogout(){
    localStorage.clear()
  }
}
