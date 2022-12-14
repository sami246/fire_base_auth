import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState, useEffect} from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});

    useEffect(() => {
        // Use unsubscribe to leave from listener to save power
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace('Home')
            }
            })
            return unsubscribe;
    }, [])
    
   
    function handleSignIn () {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                
                const user = userCredential.user;
                setUser(user)
                // navigation.navigate('Home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

  
  return (
        <View style={styles.container} behavior='padding'>
            <View style = {styles.titleContainer}>
                <Text style={styles.title} >AUTH TEST</Text>
            </View>
            <View style = {styles.inputContainer}>
                <TextInput 
                    placeholder='Email'
                    value={email}
                    style={styles.input} 
                    onChangeText = { text => setEmail(text)}
                />
                <TextInput 
                    placeholder='Password'
                    value={password}
                    style={styles.input} 
                    onChangeText = { text => setPassword(text)}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={handleSignIn}
                    style = {styles.button}>
                    <Text style = {styles.buttonText}>Login</Text>   
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => navigation.navigate('Register')}
                    style = {[styles.button, styles.buttonOutline]}>
                    <Text style = {styles.buttonOutlineText}>Register</Text>   

                </TouchableOpacity>

            </View>
        </View>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        maxHeight: '70%',
        top: 80
    },
    inputContainer: {
        flex: 1,
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
        flex: 1,
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
    titleContainer : {
        flex: 2,
        width: '80%',
        justifyContent: 'center',
        alignContent: 'center',
        
    },
    title: {
        fontSize: 35,
        fontWeight: '450',
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 3,
        padding: 15,
        borderRadius: 30,
        color: '#0782F9',
        borderColor: '#0782F9',
    }
    
})