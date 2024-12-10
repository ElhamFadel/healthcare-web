import { useState } from 'react';
import Link from 'next/link';
import  useAuthActions  from '@/context/useAuthActions';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Get auth actions
  const { register, loading, error } = useAuthActions();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (password === confirmPassword) {
      // Call the register function from useAuthActions
      await register(email, password);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
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
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required
            />
          </div>
          <button 
            type="submit" 
            className={`w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <div className="mt-4 text-center">
          <Link href="/login">
            <span className="text-blue-500">Already have an account? Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
