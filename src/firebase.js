import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBF7guPXvo90QVih7lO8V27sWQBVRTG-S8",
    authDomain: "twitter-clone-ff392.firebaseapp.com",
    projectId: "twitter-clone-ff392",
    storageBucket: "twitter-clone-ff392.appspot.com",
    messagingSenderId: "887197915319",
    appId: "1:887197915319:web:3f9a926e4d3fbe5aec9532",
    measurementId: "G-YK91YE8N93"
  };

// Creates and initializes a Firebase  instance. and we pass config for app
const firebaseApp = firebase.initializeApp(firebaseConfig)
