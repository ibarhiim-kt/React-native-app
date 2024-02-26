import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { firebase } from './Config';
import 'firebase/auth';


export default function Login({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const forLogin  = async (email, password) => {
        try {
          // Basic validation
          if (!email || !password) {
            alert("Please enter both email and password.");
            return;
          }
    
          // You can add more advanced email validation if needed
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
          }
    
          await firebase.auth().signInWithEmailAndPassword(email, password);
    
          navigation.navigate('Dscreen');
        } catch (error) {
          alert(error.message);
        }
      };    

    const goToRegisterScreen = () => {
        navigation.navigate('Register')
        }
    
    return(

        <View>
        <TextInput
        
        placeholder='E-mail'
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        />
        <TextInput
        
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder='Password'
        onChangeText={(text) => setPassword(text)}
        value={password}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        />

        <TouchableOpacity        
        onPress={() => forLogin()}>
        <Text >Login</Text>
        </TouchableOpacity>

        <View >
        <Text >Not an account? <Text
        onPress={goToRegisterScreen}>Register</Text></Text>
        </View>

        </View>        

    )
}