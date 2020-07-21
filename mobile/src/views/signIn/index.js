import React, {useState, useContext} from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Image, 
    KeyboardAvoidingView,
    ScrollView,
    Alert
} from 'react-native';
import Svg, {Path} from 'react-native-svg';

import styles from './styles';

import api from '../../services/api';

import { onSignIn } from '../../services/auth';

//Icones
import arrow from '../../assets/Arrow.png';
import arrowLeft from '../../assets/ArrowLeft.png';
import ocultar from '../../assets/hideBlack.png';
import mostrar from '../../assets/showBlack.png';

import AuthContext from '../../contexts/auth';

export default function SignIn({navigation}) {

    const { signed, signIn } = useContext(AuthContext);
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [hidePassword, setHidePassword] = useState(true);

    function Authenticate(){
        if(!email){
            return Alert.alert('Email is riquired');
        }

        if(!password){
            return Alert.alert('Password is riquired');
        }
        

        signIn({email, password});
        
    }

    return (
        <>
            <KeyboardAvoidingView behavior='height' style={styles.container}>
                <ScrollView style={{width: '100%'}}>
                    <Svg width="414" height="360" style={styles.teste} viewBox="10 0 414 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M405.044 6.21C425.536 25.612 437.526 51.99 446.464 76.842C455.402 101.912 461.506 125.456 462.16 149.218C462.596 173.198 457.582 197.396 449.952 224.646C442.322 251.896 431.858 282.416 410.93 299.856C390.002 317.514 358.61 322.092 326.564 322.964C294.518 323.618 262.036 320.784 232.606 308.14C203.176 295.496 176.798 273.26 164.59 245.138C152.382 217.016 154.344 183.008 160.666 152.706C166.988 122.186 177.67 95.59 193.366 73.572C209.062 51.554 229.772 34.114 252.88 16.238C276.206 -1.42001 301.494 -19.732 328.744 -22.566C355.776 -25.618 384.77 -13.192 405.044 6.21Z" fill="#5AC1E7"/>
                        
                        <Text style={styles.title}>Welcome Back</Text>
                        <Path d="M284.066 -102.945C316.343 -91.678 353.797 -81.325 383.638 -57.2695C413.783 -33.5185 418.716 -50.1966 422.37 -10.6116C425.72 28.6689 414.392 94.3554 383.638 116.888C352.883 139.726 274.5 176.5 250.5 199C220 227.594 205.5 318 144.5 332C98 342.672 30.722 317.514 -0.641464 289.5C-32.005 261.486 11.2285 197.63 -11 155C-33.533 112.066 -54.8425 77.624 -65.5 35.2985C-76.462 -7.33152 -66.4135 -55.747 -32.9185 -79.8025C0.272015 -103.554 56.909 -102.64 99.2345 -108.426C141.256 -114.516 168.661 -127 196.37 -127C224.08 -127 251.485 -114.516 284.066 -102.945Z" fill="#494E58"/>
                        <Path d="M109.728 -190.344C136.864 -180.872 168.352 -172.168 193.44 -151.944C218.784 -131.976 237.728 -100.488 240.8 -67.208C243.616 -34.184 299.356 -20.444 273.5 -1.5C247.644 17.7 140.192 41.848 109.984 63.096C79.776 84.6 58.016 124.28 26.272 141.432C-5.47202 158.328 -46.944 152.44 -73.312 128.888C-99.68 105.336 -110.944 63.608 -129.632 27.768C-148.576 -8.32798 -175.2 -38.536 -184.16 -74.12C-193.376 -109.96 -184.928 -150.664 -156.768 -170.888C-128.864 -190.856 -81.248 -190.088 -45.664 -194.952C-10.336 -200.072 12.704 -210.568 36 -210.568C59.296 -210.568 82.336 -200.072 109.728 -190.344Z" fill="#FFAD49"/>
                    </Svg>
                        
                    <View style={styles.content}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                        />
                        <View style={styles.password}>
                            <TextInput 
                                style={styles.input}
                                placeholder="Password"
                                onChangeText={(text) => setPassword(text)}
                                secureTextEntry={hidePassword}
                            />
                            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                                {
                                    hidePassword ?
                                    <Image source={mostrar} style={styles.iconPassword}/>
                                    :
                                    <Image source={ocultar} style={styles.iconPassword}/>
                                }

                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={Authenticate}>
                            <Text style={styles.textButton}>Sign In</Text>
                            <View style={styles.circle}>
                                <Image source={arrow} style={styles.image}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footer}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.textFooter}>Sign up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                                <Text style={styles.textFooter}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
                
            </KeyboardAvoidingView>
            
        </>
    );
}