import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from '../config/firebase';
import { where } from 'firebase/firestore';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { getData } from '../helpers/firebaseAPI';

const FirebaseAuthContext = React.createContext();

export const useAuth = () => {
  return useContext(FirebaseAuthContext);
};

const FirebaseAuthenticationProvider = ({ children }) => {
  const naviagte = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const gAuthProvider = new GoogleAuthProvider();
  const [pending, setPending] = useState(true);
  const [userData, setUserData] = useState(null);

  const setData = async (data) => {
    setUserData(data);
  };

  const signupWithEmail = async (email, password) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);
    setLoading(false);
  };

  const signInWithEmail = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, gAuthProvider);
      naviagte('/home');
    } catch {
      setError('Failed To SignIn');
    }
  };

  const logout = async () => {
    await signOut(auth);
    setCurrentUser(null);
  };

  useEffect(
    () =>
      auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        setPending(false);
      }),
    []
  );

  const value = {
    currentUser,
    signupWithEmail,
    signInWithEmail,
    googleSignIn,
    logout,
    error,
    userData,
    loading,
    pending,
    setData,
  };
  return pending ? (
    <Loading text='Loading ⏳️' />
  ) : (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export default FirebaseAuthenticationProvider;
