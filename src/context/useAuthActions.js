import { useState } from 'react';
import { useAuth } from './AuthContext'; 
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, auth } from '../../firebase';
import checkIfDoctor from '@/utils/checkIsDoctor';
const useAuthActions = () => {
  const { state, dispatch } = useAuth();
  const { loading, error, user, isAuthenticated } = state;
  const router = useRouter();

  const login = async (email, password) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch({ type: 'SET_USER', payload: user });
      if(checkIfDoctor(email))
      router.push(`/doctor/${user.uid}`);
     router.push(`/patient/${user.uid}`);
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const logout = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      await auth.signOut();
      dispatch({ type: 'REMOVE_USER' });
      router.push('/login'); 
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const register = async (email, password) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch({ type: 'SET_USER', payload: user });
      if(checkIfDoctor(email))
        router.push(`/doctor/${user.uid}`);
       router.push(`/patient/${user.uid}`);  
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return {
    login,
    logout,
    register,
    loading,
    error,
    user,
    isAuthenticated
  };
};

export default useAuthActions;
