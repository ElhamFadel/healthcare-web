import { useState } from 'react';
import { useAuth } from './AuthContext'; 
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import { auth,signInWithEmailAndPassword } from '../../firebase';
import 'firebase/auth';

const useAuthActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUser, setIsAuthenticated } = useAuth(); 
  const router = useRouter();

  const login = async (email, password) => {
    setLoading(true);
    try {
      console.log("auhhhhhhhhh")
      const userCredential = await signInWithEmailAndPassword(auth,email, password);
      const user = userCredential.user;
      setUser(user); 
      setIsAuthenticated(true); 
      
      router.push(`/doctor/${user.uid}`); 
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await firebase.auth().signOut();
      setUser(null); 
      setIsAuthenticated(false);
      router.push('/login'); 
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const register = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      setUser(user); 
      setIsAuthenticated(true);
      router.push('/dashboard'); 
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    logout,
    register,
    loading,
    error
  };
};

export default useAuthActions;
