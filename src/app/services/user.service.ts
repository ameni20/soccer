import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // matchUrl = 'api/matches';
  userUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get<{ message: string, users: any }>(`${this.userUrl}/allUsers`);
  }

  deleteUser(id: string) {
    return this.httpClient.delete(`${this.userUrl}/deleteUser/${id}`);
  }

  signup(user: any) {
    return this.httpClient.post(`${this.userUrl}/signup`, user);
  }

  editUser(user: any) {
    return this.httpClient.put(`${this.userUrl}/editUser/${user._id}`, user);
  }

  getUserById(id: string) {
    return this.httpClient.get<{ user: any }>(`${this.userUrl}/displayUser/${id}`);
  }

  login(user:any) {
    return this.httpClient.post<{user:any}>(`${this.userUrl}/login`, user);
  }
}
