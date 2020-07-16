import { AsyncStorage, Alert } from 'react-native';

export const TOKEN_KEY = 'authorization';

export const onSignIn = ( token ) => {
    AsyncStorage.setItem(TOKEN_KEY, token);
}
export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export const isSignIn = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);

    return ((token !== null) ? true : false);
}