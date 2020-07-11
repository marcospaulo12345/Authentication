import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './src/views/signIn';
import SignUp from './src/views/signUp';

const Routes = createAppContainer(
createSwitchNavigator({
    SignUp,
    SignIn
})
)

export default function App() {
  return <Routes />
}