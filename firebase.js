import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuQN-pnptR-SDSItfxIozAFOt42TYnPfM",
  authDomain: "uber-eats-clone-16f71.firebaseapp.com",
  projectId: "uber-eats-clone-16f71",
  storageBucket: "uber-eats-clone-16f71.firebasestorage.app",
  messagingSenderId: "471625841737",
  appId: "1:471625841737:android:604613a3e5062dd8a65398",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
