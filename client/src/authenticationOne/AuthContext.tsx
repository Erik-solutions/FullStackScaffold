// authentication/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import AuthService from './AuthService';
import { User } from './types';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  loading: true,
  login: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');
  const isAuthenticated = !!user;

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const res = await AuthService.getMe(token);
          setUser(res.data);
        } catch {
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, [token]);

  const login = async (email: string, password: string) => {
    const res = await AuthService.login(email, password);
    localStorage.setItem('token', res.data.authToken);

    const meRes = await AuthService.getMe(res.data.authToken);
    setUser(meRes.data);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
