import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { signOut} from "firebase/auth";
// import { getAuth, signOut, GoogleAuthProvider,signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import { auth } from '../firebase';


const HomeScreen = ({ navigation }) => {
  function handleSignOut(){
        signOut(auth).then(() => {
          navigation.navigate('Login')
        }).catch((error) => {
          alert(error.message)
        });
  }

  return (
    <View style={styles.container}>
      <Text> FOODI </Text>
        <Text>Email: {auth.currentUser?.email} </Text>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
            <Text style={styles.buttonText}>
              Sign out
            </Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16
  },

})