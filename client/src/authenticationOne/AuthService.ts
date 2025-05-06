// authentication/AuthService.ts
import axios from 'axios';
import { AuthResponse, User } from './types';

const API_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:O0TZBdJy/auth';

const AuthService = {
  signup: (
    name: string,
    email: string,
    password: string,
    industry?: string,
    location?: string,
    contact?: string
  ) =>
    axios.post(`${API_URL}/signup`, {
      name,
      email,
      password,
      industry,
      location,
      contact,
    }),

  login: (email: string, password: string) =>
    axios.post<AuthResponse>(`${API_URL}/login`, { email, password }),

  getMe: (token: string) =>
    axios.get<User>(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export default AuthService;
