import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDCIn_yQge4J1mr-sR_6ErI5ZFhalY7uzM",
    authDomain: "react-native-uber-eats-c-47ab4.firebaseapp.com",
    projectId: "react-native-uber-eats-c-47ab4",
    storageBucket: "react-native-uber-eats-c-47ab4.appspot.com",
    messagingSenderId: "705228949591",
    appId: "1:705228949591:web:3d546097947590daf63b12"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
