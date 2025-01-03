import React, { useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)

  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const loginUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logout=()=>{
    setLoading(true)
    return signOut(auth);
  }

useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth,currentUser=>{
  
    setUser(currentUser)
    console.log("State Captured",currentUser);
    setLoading(false);
  })
  return ()=>{
    unsubscribe();
  }
},[])

const signInWithGoogle=()=>{
  setLoading(true)
  return signInWithPopup(auth,googleProvider);
}

  const authInfo={
    user,
    loading,
    createUser,
    loginUser,
    logout,
    signInWithGoogle,
  }

    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;