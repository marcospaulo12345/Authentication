import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

const AuthContext = createContext({signed: false, user: {}});

import api from '../services/api';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);


    async function signIn({email, password}) {
        let data
        await api.post('/auth/authenticate', {
            email,
            password
        }).then(response => {
            setUser(response.data.user)
            data = response.data
            
        }).catch(err => {
            const {data} = err.response;
            return Alert.alert(data.error);
        })

        await AsyncStorage.setItem('@Auth/user', data.user);
        await AsyncStorage.setItem('@Auth/token', data.token);
    }

    function signOut() {
        AsyncStorage.clear().then(()=> {
            setUser(null);
        })
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut, loading }} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;