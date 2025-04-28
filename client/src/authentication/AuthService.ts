// src/services/AuthService.ts
import axios from 'axios';

const API_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:O0TZBdJy/auth'; // Replace with your actual URL

export interface AuthResponse {
  authToken: string;
}

export interface User {
  id: number;
  email: string;
  // add more fields if needed
}

const AuthService = {
  signup: (name: string, email: string, password: string) =>
    axios.post(`${API_URL}/signup`, {name, email, password }),

  login: (email: string, password: string) =>
    axios.post<AuthResponse>(`${API_URL}/login`, { email, password }),

  getMe: (token: string) =>
    axios.get<User>(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export default AuthService;


