import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(username: any, email: any, password: any) {
    throw new Error('Method not implemented.');
  }
  private isAuthenticated = false;
  login() {
    this.isAuthenticated = true;
  }
  logout() {
    this.isAuthenticated = false;
  }
  isAuthenticatedUser() {
    return this.isAuthenticated;
  }
}