import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config ={
    apiKey: "AIzaSyDiFkfkytCOZQTprQvtoQs1hgCPwckXdD4",
    authDomain: "crwn-db-1c025.firebaseapp.com",
    projectId: "crwn-db-1c025",
    storageBucket: "crwn-db-1c025.appspot.com",
    messagingSenderId: "1012399562934",
    appId: "1:1012399562934:web:b73bb097af4cfae0f94617",
    measurementId: "G-JRWY5XQ56B"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
      prompt:"select_account"
  });

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;