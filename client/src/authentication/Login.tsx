import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import here
import AuthService, { User } from './AuthService';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // ✅ Put this inside the component

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const loginRes = await AuthService.login(email, password);
      const token = loginRes.data.authToken;
      localStorage.setItem('token', token);

      const meRes = await AuthService.getMe(token);
      setUser(meRes.data);

      // ✅ Navigate after successful login
      navigate('/dashboard');
    } catch (err: any) {
      alert('Login failed: ' + (err.response?.data?.message || 'Unknown error'));
    } finally {
      setLoading(false);
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
          disabled={loading}
          className="bg-white w-[36%] self-center text-[#273F4F] font-semibold my-2 py-2 rounded hover:bg-[#393E46]"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {user && <p>Welcome, {user.email}!</p>}
      </form>
    </div>
  );
};

export default Login;










// src/components/Login.tsx
/*import React, { useState, FormEvent } from 'react';
import AuthService, { User } from './AuthService';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const loginRes = await AuthService.login(email, password);
      const token = loginRes.data.authToken;
      localStorage.setItem('token', token);

      const meRes = await AuthService.getMe(token);
      setUser(meRes.data);
    } catch (err: any) {
      alert('Login failed: ' + err.response?.data?.message || 'Unknown error');
    }
  };

  return (
    <div className='flex justify-center pt-[1rem]'>
    <form onSubmit={handleLogin} className='flex flex-col  w-[40%] '>
     
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
      <button type="submit"
      className="bg-white w-[36%] self-center text-[#273F4F] font-semibold my-2 py-2 rounded hover:bg-[#393E46]"
      >Login</button>
      {user && <p>Welcome, {user.email}!</p>}
    </form> </div>
  );
};

export default Login; */
