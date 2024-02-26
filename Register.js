import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { firebase } from './Config';

export default function Register({navigation}) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [reg , setReg] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
    navigation.navigate('Login')
    }

    const onRegisterPress = async (email, password) =>{
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url:'https://comsatapp.firebaseapp.com',
            })
            .then(() =>{
                alert('Verification email send successfully')
            }).catch((error) =>{
                alert(error.message)
            })
            .then(() =>{
               firebase.firestore().collection('UsersData')
               .doc(firebase.auth().currentUser.uid)
               .set({
                email, password
               }) 
            })
            .catch((error) => {
                alert(error.message)
            })
        })
        .catch((error) => {
            alert(error.message)
        })
    }
    return (
        <View>
        <TextInput
        
        placeholder='Full Name'
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setFullName(text)}
        value={fullName}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        />
        <TextInput
        
        placeholder='E-mail'
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        />
         <TextInput
        
        placeholder='Registration No.'
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setReg(text)}
        value={reg}
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
        <TextInput
    
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder='Confirm Password'
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        />
        <TouchableOpacity
        
        onPress={() => onRegisterPress()}>
        <Text >Create account</Text>
        </TouchableOpacity>
        <View >
        <Text >Already got an account? <Text
        onPress={onFooterLinkPress}>Log in</Text></Text>
        </View>
        </View>
        )
        } 
       