import firebase from "firebase/app";
import "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyDcZQIHgGdDdlPbkuaGiHX2A7UaWWGESkg",
    authDomain: "clone-efbc3.firebaseapp.com",
    projectId: "clone-efbc3",
    storageBucket: "clone-efbc3.appspot.com",
    messagingSenderId: "278822516206",
    appId: "1:278822516206:web:1bf47a624c64e6a2c28aff"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const auth=firebaseApp.auth();

  export {auth};