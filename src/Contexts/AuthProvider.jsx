import React, {useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../integration.init';


const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // const {createUser} = useContext(AuthContext);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signInUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    
    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    onAuthStateChanged(auth, (currentUser) =>{
        if(currentUser){
            console.log('Has current user', currentUser);
        }
        else{
            console.log('Current user', currentUser);
        }
    })

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('inside useEffect on auth state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
             unsubscribe();

        }
    },[])

     const userInfo = {
        user,
        loading,
       createUser,
       signInUser,
       signOutUser,
       googleSignIn
     }
    return (

        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
        // <AuthContext value={userInfo}>
        //     {children}
        // </AuthContext>
    );
};

export default AuthProvider;