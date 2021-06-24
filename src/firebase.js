import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBWxo0pWTzIrqKVsF5Txw6z24ojhrdixbE",
    authDomain: "facebook-messenger-clone-86374.firebaseapp.com",
    projectId: "facebook-messenger-clone-86374",
    storageBucket: "facebook-messenger-clone-86374.appspot.com",
    messagingSenderId: "774449514177",
    appId: "1:774449514177:web:b6de27d4230ce3da6f3640",
    measurementId: "G-E2X1W56BWL"
});

const db = firebaseApp.firestore();

export default db;