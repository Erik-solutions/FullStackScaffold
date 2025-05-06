// authentication/types.ts
export interface AuthResponse {
    authToken: string;
  }
  
  export interface User {
    id: number;
    email: string;
    name?: string;
    industry?: string;
    location?: string;
    contact?: string;
  }
  