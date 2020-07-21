import React, { useContext, useState } from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

import styles from './styles';

import { onSignOut } from '../../services/auth';

//Icones
import arrowLeft  from '../../assets/ArrowLeft.png';
import UserPhoto from '../../assets/userPhoto.png';

import AuthContext, { AuthProvider } from '../../contexts/auth';
import { useSafeArea } from 'react-native-safe-area-context';

export default function Profile({ navigation }){ 
    const {user, signOut, updateUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);


    function handleSignout(){
        signOut();
    }

    function changeUser(){
        updateUser({userId: user._id, name, email});
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={{width: '100%'}}>
                <Svg width="414" height="700" viewBox="40 100 414 896" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M507.035 211.026C530.771 283.818 453.851 669.498 360.885 743.301C267.919 817.104 92.686 988.039 19.5 938.5C-54.1805 888.961 -33.8057 634.254 6.24885 538.209C46.3033 441.659 312.013 47.1074 415.364 46.0964C518.714 45.0854 483.793 138.74 507.035 211.026Z" fill="#5AC1E7"/>
                    <Path d="M324.79 -30.45C388.628 -47.762 436.777 20.404 423.793 83.701C411.35 147.539 338.315 207.049 292.33 252.493C245.804 297.396 227.41 329.315 200.36 395.317C172.769 460.778 137.063 561.404 83.5041 586.29C29.4041 611.176 -42.5489 560.322 -48.4999 487.828C-54.9919 414.793 4.51806 320.118 -9.00694 254.657C-22.5319 189.196 -12.118 149.214 -25.643 120C-39.168 90.786 -48.5 62.201 -48.5 6C3.63607 -8 -30.653 14.591 28.857 -13C88.367 -40.591 260.952 -12.597 324.79 -30.45Z" fill="#494E58"/>
                </Svg>

                <TouchableOpacity style={styles.exit} onPress={handleSignout}>
                    <Text style={styles.textExit}>Sair</Text>
                </TouchableOpacity>
                <View style={styles.content}>
                    <Image source={UserPhoto} style={styles.userPhoto}/>
                    <Text style={styles.title}>Acconut</Text>

                    <View style={styles.boxInput}>
                        <TextInput 
                            style={styles.input}
                            placeholder='Name'
                            onChangeText={(text) => setName(text)}
                            value={name}
                        />

                        <TextInput 
                            style={styles.input}
                            placeholder='Email'
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                        />

                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.buttonUpdate} onPress={changeUser}>
                            <Text style={styles.textButton}>Save Changes</Text>
                        </TouchableOpacity>
                    </View>

                    </View>

                    

                    <View style={styles.footer}>
                        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                            <Text style={styles.textFooter}>Change Password</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}