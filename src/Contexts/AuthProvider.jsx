import React from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({children}) => {
     const userInfo = {
         email: 'pota@to.com'
     }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;