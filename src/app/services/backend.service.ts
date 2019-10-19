import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) {}
  contact(data) {
    return this.http.post('/api/contacts/create', data).toPromise();
  }
  login(data) {
    return Promise.resolve({
      // success: 200 //mocks having backend
      id: 123, // also mocks sending data back from backend
      username: data.username
    });
  }
  register(data) {
    return Promise.resolve();
  }
  logout() {
    return Promise.resolve();
  }
}
