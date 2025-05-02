import React, {useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../integration.init';

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    // const {createUser} = useContext(AuthContext);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signOutUser = () =>{
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
            setUser(currentUser)
            console.log('inside useEffect on auth state change', currentUser);
            return () => {
                 unsubscribe();

            }
        })
    },[])

     const userInfo = {
        user,
       createUser,
       signInUser,
       signOutUser
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