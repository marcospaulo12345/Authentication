import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './src/views/signIn';
import SignUp from './src/views/signUp';
import Profile from './src/views/Profile';

import { isSignIn } from './src/services/auth';


const Stack = createStackNavigator();

export default function App() {

  const [initialRoute, setInitialRoute] = useState();

  useEffect(() => {
    isSignIn().then(res => {
      setInitialRoute(res)
      console.log(res)
    })
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator >
      { initialRoute ? (
          <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false}}/>
        ) : (
          <>
            <Stack.Screen name='SignIn' component={SignIn}  options={{ headerShown: false}}/>
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false}}/>
          </>
        )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}