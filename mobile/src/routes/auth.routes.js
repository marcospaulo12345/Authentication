import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../views/signIn';
import SignUp from '../views/signUp';
import ForgotPassword from '../views/ForgotPassword';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name='SignIn' component={SignIn} options={{ headerShown: false}} />
        <AuthStack.Screen name='SignUp' component={SignUp} options={{ headerShown: false}}/>
        <AuthStack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false}}/>
    </AuthStack.Navigator>
);

export default AuthRoutes;
