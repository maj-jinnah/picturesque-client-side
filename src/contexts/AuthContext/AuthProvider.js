import React, { createContext, useState } from 'react';
import {getAuth, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const googleProviderSignIn  = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const authInfo = {user, googleProviderSignIn};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;