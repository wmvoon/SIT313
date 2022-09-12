import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZFHjp0Db0BB0TUz2olk63RHQhi2bDHBY",
    authDomain: "deakin-sit313-7p.firebaseapp.com",
    projectId: "deakin-sit313-7p",
    storageBucket: "deakin-sit313-7p.appspot.com",
    messagingSenderId: "307206232381",
    appId: "1:307206232381:web:0b88cd73ff5437e251cd54"
  };


  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const logout = () => {
    signOut(auth);
  };

  export const auth = getAuth();
  export const db = getFirestore();
  export { logout }
