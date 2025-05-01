import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../integration.init';

export const AuthProvider = ({children}) => {

    // const {createUser} = useContext(AuthContext);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

     const userInfo = {
       createUser
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