import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const googleLogin = () =>{
        return signInWithPopup (auth, googleProvider)
    }

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, (currentUser) =>{
              setUser(currentUser)
              setLoading(false)
          })
          return ()=>{
             return unSubscribe();
          }
      }, [])

    const authInfo = {
        createUser,
        login,
        logOut,
        googleLogin,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;