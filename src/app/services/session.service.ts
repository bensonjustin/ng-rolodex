import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user = {
    id: 0,
    username: '',
    loggedIn: false
  };

  constructor() {
    // check if the user is in the localStorage
    const userString = localStorage.getItem('user');
    try {
      if (userString) {
        this.user = JSON.parse(userString);
      } else {
        console.log('user was not found');
      }
    } catch (err) {
      console.log('could not parse user');
    }
  }

  getSession() {
    return this.user;
  }

  setSession(data) {
    // save to memory
    this.user.id = data.id;
    this.user.username = data.username;
    this.user.loggedIn = true;

    // save to localStorage
    const userString = JSON.stringify(this.user);
    // localStorage is a preset variable
    localStorage.setItem('user', userString);
  }

  clearSession() {
    //clear from memory
    this.user.id = 0;
    this.user.username = '';
    this.user.loggedIn = false;

    //clear from localStorage
    localStorage.removeItem('user');
  }
  isLoggedIn() {
    return this.user.loggedIn;
  }
}
