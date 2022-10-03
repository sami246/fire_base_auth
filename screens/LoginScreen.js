import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState, useEffect} from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';


const LoginScreen = ({ navigation }) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        // Use unsubscribe to leave from listener to save power
        const unsubscribe = auth.onAuthStateChanged(user => {
            console.log("user is here", user?.email)
            if(user){
                navigation.replace('Home')
            }
            })
            return unsubscribe;
    }, [])

    const signInWithGoogle = async () => {
        try {
          const res = await signInWithPopup(auth, googleProvider);
          const user = res.user;
          const q = query(collection(db, "users"), where("uid", "==", user.uid));
          const docs = await getDocs(q);
          if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
              uid: user.uid,
              name: user.displayName,
              authProvider: "google",
              email: user.email,
            });
          }
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };
    
   
    function handleSignIn () {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                
                const user = userCredential.user;
                console.log(user)
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
                    <Text style = {styles.buttonText}>Log in</Text>   
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