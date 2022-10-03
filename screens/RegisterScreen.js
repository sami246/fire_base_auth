import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase'

const RegisterScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');


    function handleRegister() {
        console.log(email)
        console.log(password)
        console.log(firstName)
        console.log(surname)
        console.log("HELLO")

        // auth.createUserWithEmailAndPassword(email, password)
        // .then(userCredentials => {
        //     const user = userCredentials.user
        //     console.log("USER", user)
        // })
        // .catch(error => alert(error.message))
    }

  return (
    <View style={styles.container} behavior='padding'>
        <View style = {styles.inputContainer}>
            <TextInput 
                placeholder='First Name'
                value={firstName}
                style={styles.input} 
                onChange = { text => {setFirstName(text)}}
            />
            <TextInput 
                placeholder='Surname'
                value={surname}
                style={styles.input} 
                onChange = { text => {setSurname(text)}}
            />
            <TextInput 
                placeholder='Email'
                keyboardType='email-address'
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
                    onPress={handleRegister}
                    style = {styles.button}>
                    <Text style = {styles.buttonText}>Register</Text>   
                </TouchableOpacity>

        </View>
    </View>
  )
}

export default RegisterScreen;

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