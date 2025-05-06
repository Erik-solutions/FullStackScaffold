// src/components/Login.tsx
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center pt-[1rem]">
      <form onSubmit={handleLogin} className="flex flex-col w-[40%]">
        <input
          className="border rounded my-2 px-2 py-2 w-[80%] self-center"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className="border rounded my-2 px-2 py-2 w-[80%] self-center"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="bg-white w-[36%] self-center text-[#273F4F] font-semibold my-2 py-2 rounded hover:bg-[#393E46]"
        >
          Login
        </button>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
