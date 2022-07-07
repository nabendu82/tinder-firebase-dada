import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCOVqrUPNwfd5ZIiOxh7R9WEGf2J1RS__8",
    authDomain: "tinder-clone-dada.firebaseapp.com",
    projectId: "tinder-clone-dada",
    storageBucket: "tinder-clone-dada.appspot.com",
    messagingSenderId: "745613861526",
    appId: "1:745613861526:web:fcefcf1d18adf3d5f058b7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;