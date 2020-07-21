import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage, Alert } from 'react-native';

import api from '../services/api';

const AuthContext = createContext({signed: false, user: {}});


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        async function loadStorangeData() {
            const storangeUser = await AsyncStorage.getItem('@Auth/user');
            const storangeToken = await AsyncStorage.getItem('@Auth/token');

            if(storangeUser && storangeToken){
                setUser(JSON.parse(storangeUser));
            }
        }

        loadStorangeData();
    }, [])

    async function signIn({email, password}) {
        let data;
        await api.post('/auth/authenticate', {
            email,
            password
        }).then(response => {
            setUser(response.data.user)
            data = response.data;
            
        }).catch(err => {
            this.data = false;
            const {data} = err.response;
            return Alert.alert(data.error);
        })
        if(data){
            await AsyncStorage.setItem('@Auth/user', JSON.stringify(data.user));
            await AsyncStorage.setItem('@Auth/token', data.token);
        }
    }

    async function signUp({name, email, password}){
        let data;
        await api.post('/auth/register', {
            name,
            email,
            password
        }).then(response => {
            setUser(response.data.user);
            data = response.data;
        }).catch(err => {
            const { data } = err.response;
            Alert.alert(data.error);
        })
        if(data){
            await AsyncStorage.setItem('@Auth/user', JSON.stringify(data.user));
            await AsyncStorage.setItem('@Auth/token', data.token);
        }
    }

    function signOut() {
        AsyncStorage.clear().then(()=> {
            setUser(null);
        })
    }

    async function forgotPassword({email}) {
        await api.post('/auth/forgot_password', {
            email
        }).then(response => {
            return true;
        }).catch(err =>{
            const { data } = err.response;
            Alert.alert(data.error);
        })
    }
    async function resetPass({email, password, token}){
        await api.post('/auth/reset_password', {
            email,
            password,
            token
        }).then(response => {
            Alert.alert('Senha alterada')
        }).catch(err => {
            const { data } = err.response;
            Alert.alert(data.error);
        })
    }
    async function updateUser({userId, name, email}){
        await api.put(`/auth/update/${userId}`, {
            name, 
            email
        }).then(response => {
            Alert.alert('Completed Change');
        }).catch(err => {
            const { data } = err.response;
            Alert.alert(data.error);
        })
    }

    async function changePassword({userId, currentPassword, newPassword}) {
        await api.post(`/auth/change_password/${userId}`, {
            currentPassword, 
            newPassword
        }).then(response => {
            Alert.alert('Password Changed!')
        }).catch(err => {
            const { data } = err.response;
            Alert.alert(data.error);
        })
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, signIn, signUp, signOut, forgotPassword,resetPass, updateUser, changePassword,loading }} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;