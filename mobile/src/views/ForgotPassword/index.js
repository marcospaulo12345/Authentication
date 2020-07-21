import React, {useState, useContext} from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Image, 
    KeyboardAvoidingView,
    ScrollView,
    Alert,
    Modal
} from 'react-native';
import Svg, {Path} from 'react-native-svg';

import styles from './styles';

import api from '../../services/api';

import { onSignIn } from '../../services/auth';


//Icones
import arrow from '../../assets/Arrow.png';
import arrowLeft from '../../assets/ArrowLeft.png';

import AuthContext from '../../contexts/auth';

export default function ForgotPassword({navigation}) {
    const { forgotPassword, resetPass } = useContext(AuthContext);
    const [email, setEmail] = useState();
    const [newPassword, setNewPassword] = useState();
    const [code, setCode] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    function sendEmail(){
        if(!email)
            return Alert.alert('Email is required');

        forgotPassword({email});
        setModalVisible(true);
    }
    function resetPassword(){
        resetPass({email: email, password: newPassword, token: code});
    }

    return (
        <>
            <KeyboardAvoidingView behavior='height' style={styles.container}>
                <Modal 
                    animationType="slide" 
                    transparent={true} 
                    visible={modalVisible} 
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TextInput 
                                style={styles.modalInput} 
                                placeholder="Verification Code"
                                onChangeText={(text)=>setCode(text)}
                                value={code}
                            />
                            <TextInput 
                                style={styles.modalInput} 
                                placeholder="New Password"
                                onChangeText={(text) => setNewPassword(text)}
                                value={newPassword}
                            />

                            <View style={styles.modalButtons}>
                                <TouchableOpacity style={styles.buttonModal} onPress={() => setModalVisible(!modalVisible)}>
                                    <Text>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity  style={styles.buttonModal} onPress={resetPassword}>
                                    <Text>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    
                    
                </Modal>
                <ScrollView style={{width: '100%'}}>
                    <Svg width="414" height="680" viewBox="0 50 414 530" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Text style={styles.title}>Forgot Password</Text>
                        <Path d="M422.078 282.345C395.323 347.159 372.486 387.067 340.255 409.933C308.047 432.131 266.791 436.966 229.212 432.583C191.287 428.522 156.719 414.898 87.8783 388.664C19.3593 362.775 -83.407 323.608 -88.2411 282.352C-93.0508 240.428 0.417471 196.094 71.8691 141.935C143.667 87.4551 193.472 22.4841 263.282 4.00107C332.772 -14.8277 421.945 12.4857 450.874 70.6559C480.124 129.172 449.154 217.877 422.078 282.345Z" fill="#5AC1E7"/>
                        <Path d="M439.664 -192.607C497.595 -151.54 531.827 -119.973 547.11 -82.9855C561.741 -46.1728 557.184 -4.35359 544.36 31.7513C531.776 68.2702 510.51 99.3139 469.047 161.337C427.998 223.121 366.097 315.71 324.278 311.153C281.806 306.421 259.176 204.13 221.87 121.35C184.325 38.1569 131.452 -25.6993 128.992 -98.7919C126.118 -171.646 173.244 -253.497 237.208 -268.9C301.586 -284.543 382.148 -233.913 439.664 -192.607Z" fill="#FFAD49"/>
                        <Path d="M297.999 37.593C332.002 90.837 343.03 162.9 315.001 210.177C286.512 257.913 218.506 281.322 129.822 293.256C40.6795 305.19 -68.6815 306.108 -103.604 254.7C-138.066 203.292 -97.63 100.017 -42.9495 34.839C11.731 -30.339 81.1155 -57.42 144.067 -53.748C207.018 -50.076 263.996 -15.651 297.999 37.593Z" fill="#494E58"/>
                    </Svg>

                        
                    <View style={styles.content}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                        />

                        <TouchableOpacity style={styles.button} onPress={sendEmail}>
                            <Text style={styles.textButton}>Send Email</Text>
                            <View style={styles.circle}>
                                <Image source={arrow} style={styles.image}/>
                            </View>
                        </TouchableOpacity>


                        <View style={styles.footer}>
                            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                                <Text style={styles.textFooter}>Sign ip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </ScrollView>
                
            </KeyboardAvoidingView>
            
        </>
    );
}