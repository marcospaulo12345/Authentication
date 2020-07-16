import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../views/Profile';

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen name='Profile' component={Profile} />
    </AppStack.Navigator>
);

export default AppRoutes;