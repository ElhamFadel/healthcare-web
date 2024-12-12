import { useState } from 'react';
import { useAuth } from './AuthContext'; 
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, auth } from '../../firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase';   

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
      const userRef = doc(db, 'users', user.uid); 
      await setDoc(userRef, { email: user.email, lastLogin: new Date() }, { merge: true });

      if (state.typeUser.role) {
        router.push(`/doctor/${user.uid}`);
      } else {
        router.push(`/patient/${user.uid}`);
      }
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

  const register = async (email, password, formData) => {
    console.log(email,"email")
    console.log("step3")
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential,"usercred")
      const user = userCredential.user;
      dispatch({ type: 'SET_USER', payload: user });
      console.log("step2")
      const userRef = doc(db, 'users', user.uid); 
      console.log(userRef,"userref")
      await setDoc(userRef, {
        email: user.email,
        name: formData.name,
        age: formData.age,
        phone: formData.phone,
        healthStatus: formData.healthStatus,
        specialty: formData.specialty || '',
        role: state.typeUser?.role,   
        lastLogin: new Date()
      });
      console.log("I'm here")
      if ( formData.typeUser.role === 'doctor') {
        router.push(`/doctor/${user.uid}`);
      } else {
        router.push(`/patient/${user.uid}`);
      }
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
