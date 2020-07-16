import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../views/signIn';
import SignUp from '../views/signUp';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name='SignIn' component={SignIn} />
        <AuthStack.Screen name='SignUp' component={SignUp} />
    </AuthStack.Navigator>
);

export default AuthRoutes;
