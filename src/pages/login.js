import { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/register">
            <span className="text-blue-500">Don't have an account? Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
