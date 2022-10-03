import * as firebase from 'firebase';

const firebaseConfig = {
    name: "fire_base_auth_test",
    apiKey: "AIzaSyARRcgerLjLUzQOz7l7mG0SJExGnAF4mp8",
    authDomain: "fire-base-auth-276cc.firebaseapp.com",
    projectId: "fire-base-auth-276cc",
    storageBucket: "fire-base-auth-276cc.appspot.com",
    messagingSenderId: "325079120900",
    appId: "1:325079120900:web:376146e10166d9c2d0c951",
}

let app;

console.log(firebase.app.length)

if (firebase.app.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
}
else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };