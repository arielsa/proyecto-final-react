import firebase from 'firebase/compat/app'; // Importamos firebase/compat/app
import 'firebase/compat/firestore'; // Importamos firestore desde firebase/compat

const firebaseConfig = {
    apiKey: "AIzaSyCKDDDSF1sdaY-x_5scbskncqt3UG3vt3I",
    authDomain: "pelistadora-6ec55.firebaseapp.com",
    projectId: "pelistadora-6ec55",
    storageBucket: "pelistadora-6ec55.appspot.com",
    messagingSenderId: "87360732537",
    appId: "1:87360732537:web:06b308dc219387b75203a8"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
console.log(firebase);

export default db;