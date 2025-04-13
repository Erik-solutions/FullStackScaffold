import { User } from "./schema";

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface HealthStatus {
  status: string;
  uptime: number;
  timestamp: string;
}

export interface UsersResponse {
  users: User[];
  count: number;
}

export interface UserResponse {
  user: User;
}
