import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react';

const LoginScreen = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
     <View style = {styles.inputContainer}>
        <TextInput 
            placeholder='Email'
            value={email}
            style={styles.input} 
            onChange = { text => {setEmail(text)}}
        />
        <TextInput 
            placeholder='Password'
            value={password}
            style={styles.input} 
            onChange = { text => {setPassword(text)}}
            secureTextEntry
        />
     </View>
     <View style={styles.buttonContainer}>
        <TouchableOpacity 
            onPress={() => {}}
            style = {styles.button}>
            <Text style = {styles.buttonText}>Log in</Text>   

        </TouchableOpacity>

        <TouchableOpacity 
            onPress={() => {}}
            style = {[styles.button, styles.buttonOutline]}>
            <Text style = {styles.buttonOutlineText}>Register</Text>   

        </TouchableOpacity>

     </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 7,
        borderColor: '#0782F9',
        borderWidth: 2
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16
    },
    
})