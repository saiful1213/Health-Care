/* eslint-disable react/prop-types */
import {
   createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
   signInWithEmailAndPassword, signOut, onAuthStateChanged,
} from "firebase/auth";

import auth from "../Firebase/Firebase.config"
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);

// google provider
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   // createUserWithEmailAndPassword
   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   // Google Signin
   const googleSignin = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
   }

   // Sign in a user with an email address and password
   const emailSignin = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   // Sign out
   const logOut = () => {
      setLoading(true)
      signOut(auth)
   }


   // get the currently signed in user
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
         setLoading(false)
      })
      return ()=>{
         unSubscribe()
      }
   }, [])


   const authInfo = { createUser, googleSignin, emailSignin, logOut, user, loading };
   
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProviders;