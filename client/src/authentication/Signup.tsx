// src/components/Signup.tsx
import React, { useState, FormEvent } from 'react';
import AuthService from './AuthService';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      // Pass extra fields if needed
      await AuthService.signup(name, email, password);
      setMessage('Signup successful! You can now login.');
    } catch (err: any) {
      setMessage('Signup failed: ' + (err.response?.data?.message || 'Unknown error'));
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSignup}
        className="p-4 rounded flex flex-col w-[90%] sm:w-[60%] md:w-[40%] bg-white shadow-md"
      >
        <h1 className="text-2xl text-center font-light my-4 text-[#273F4F]">Enter Business Details</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F8F8E1] p-4 rounded">
          <input
            type="text"
            className="border rounded px-3 py-2"
            placeholder="Business Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            className="border rounded px-3 py-2"
            placeholder="Industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
          <input
            type="text"
            className="border rounded px-3 py-2"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            className="border rounded px-3 py-2"
            placeholder="Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <h2 className="text-lg mt-6 font-medium text-[#273F4F]">Sign Up</h2>

        <input
          type="email"
          className="border rounded px-3 py-2 my-2"
          placeholder="Business Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="border rounded px-3 py-2 my-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          className="border rounded px-3 py-2 my-2"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-[#273F4F] text-white font-semibold py-2 rounded hover:bg-[#1e2e38] mt-4"
        >
          Sign Up
        </button>

        {message && <p className="text-red-600 mt-3">{message}</p>}
      </form>
    </div>
  );
};

export default Signup;


























// src/components/Signup.tsx
/*import React, { useState, FormEvent } from 'react';
import AuthService from './AuthService';


const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await AuthService.signup(name, email, password);
      setMessage('Signup successful! You can now login.');
    } catch (err: any) {
      setMessage('Signup failed: ' + err.response?.data?.message || 'Unknown error');
    }
  };
 
 





  return (
    <div className="flex justify-center ">
    <form onSubmit={handleSignup}
     className="  p-4 rounded flex flex-col w-[40%] p-4">

        <div> 
          <h1 className='text-[30px] text-center font-light my-2'>Enter Business details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-[#F8F8E1] rounded w-full">

        
        <input
         onChange={(e) => setName(e.target.value)}
        className='border rounded my-2 px-2 py-2 w-[80%]'
        type='text'
        placeholder='business name'

        ></input> 

         
        <input
        className='border rounded my-2 px-2 py-2 w-[80%]'
        type='text'
        placeholder='industry'
        ></input> 

        
        <input
        className='border rounded my-2 px-2 py-2 w-[80%]'
        type='text'
        placeholder='location'></input>

        <input
        className='border rounded my-2 px-2 py-2 w-[80%]'
        type='text'
        placeholder='contact number'></input>
      </div> </div>
     
      <h2 className="text-white ">Sign Up</h2>
      
      <input
        className="border my-2 rounded px-2 py-2"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Business Email"
        required
      />
  
      <input
        className="border rounded my-2 px-2 py-2"
        type="password"
        value={password}
       
        placeholder="Password"
        required
      />
      <input
        className="border rounded my-2 px-2 py-2"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Confirm Password"
        required
      />
  
      <button
        type="submit"
        className="bg-white w-[36%] self-end text-[#273F4F] font-semibold my-2 py-2 rounded hover:bg-[#393E46]"
      >
        Sign Up
      </button>
  
      {message && <p className="text-white ml-4">{message}</p>}
    </form>
    </div>
  );
  }  

  export default Signup; */


