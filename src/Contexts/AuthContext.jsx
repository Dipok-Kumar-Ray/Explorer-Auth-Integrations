// import { createContext} from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../integration.init';
// // import { auth } from '../firebase.config'; // বা যেখানেই auth config

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//     const createUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password);
//     };

//     const userInfo = {
//         createUser
//     };

//     return (
//         <AuthContext.Provider value={userInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };




// import { createContext } from "react";

// export const AuthContext = createContext(null)

import { createContext } from "react";

export const AuthContext = createContext(null);