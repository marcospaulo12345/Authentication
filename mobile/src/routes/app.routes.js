import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../views/Profile';
import ChangePassword from '../views/ChangePassword';

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen name='Profile' component={Profile} options={{ headerShown: false}}/>
        <AppStack.Screen name='ChangePassword' component={ChangePassword} options={{headerShown: false}} />
    </AppStack.Navigator>
);

export default AppRoutes;