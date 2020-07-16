import React, {useState} from 'react';
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

//Icones
import arrow from '../../assets/Arrow.png';
import arrowLeft from '../../assets/ArrowLeft.png';

export default function SignUp({ navigation }) {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function createUser(){

        if(!name)
            return Alert.alert('Name is required');
        
        if(!email)
            return Alert.alert('Email is required');
        
        if(!password)
            return Alert.alert('Password is required');
        
        


        await api.post('/auth/register', {
            name,
            email,
            password
        }).then(response => {
            Alert.alert('Registration Complete');
        }).catch(err => {
            const { data } = err.response;
            Alert.alert(data.error);
        })
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={{width: '100%'}}>
                <Svg width="400" height="712" viewBox="0 0 414 896" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M353 240.156C423.048 276.5 479.073 356.614 520.62 383.682C561.538 411.38 553.984 480.626 529.433 536.022C504.253 591.418 462.077 632.965 423.048 663.181C384.019 693.397 338 712.054 286.5 749C217.5 798.5 179.431 883 179.431 945.197C117.74 991.78 28.981 1001.85 -28.3035 963.452C-86.2175 924.423 -112.027 836.922 -153.574 760.123C-195.121 683.324 -252.406 616.598 -267.514 541.687C-282.622 466.776 -256.183 383.053 -196.38 337.099C-136.578 291.146 -44.6705 283.592 28.3515 240.156C100.744 197.35 153.622 119.292 195.798 137.548C237.975 156.433 292.568 190.426 353 240.156Z" fill="#5AC1E7"/>
                    <Text style={styles.title}>Create Account</Text>
                    <Path d="M408.399 -104C440.376 -80.438 420.18 28.957 452.157 102.448C484.695 175.939 569.406 212.965 595.212 264.577C620.457 316.75 545.832 243.82 483 264.577C420.168 284.773 329.5 290.491 271 331.5C212.5 372.509 180.5 463 139.5 493.5C48.0005 561.567 -50.168 537.598 -113 527.5C-175.832 516.841 -127.356 539.467 -139.698 467.098C-152.601 394.729 -135.771 322.36 -146.43 243.82C-157.089 164.719 -196.359 80.008 -180.651 13.249C-164.382 -53.51 -94.257 -101.756 -20.766 -101.756C52.725 -101.756 130.143 -53.51 210.927 -60.242C291.711 -66.413 376.422 -128.123 408.399 -104Z" fill="#494E58"/>
                </Svg>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                    <Image source={arrowLeft} style={styles.imageArrowLeft} />
                </TouchableOpacity>
                <View style={styles.content}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor="#fff"
                        onChangeText = {(text) => setName(text)}
                        value={name}
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#fff"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#fff"
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                        value={password}
                    />

                    <TouchableOpacity style={styles.button} onPress={createUser}>
                        <Text style={styles.textButton}>Sign Up</Text>
                        <View style={styles.circle}>
                            <Image source={arrow} style={styles.image}></Image>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={() => {navigation.navigate('SignIn')}}>
                            <Text style={styles.textFooter}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                

            </ScrollView>
        </KeyboardAvoidingView>
    );
}