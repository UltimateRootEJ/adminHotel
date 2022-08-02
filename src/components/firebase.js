
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD3I6MoPivA7NE20Y6b6dUHog3dAqX7kI4",
    authDomain: "hotel-263fa.firebaseapp.com",
    projectId: "hotel-263fa",
    storageBucket: "hotel-263fa.appspot.com",
    messagingSenderId: "98707717603",
    appId: "1:98707717603:web:85594d09d86ef1f26cf4d6",
    measurementId: "G-1FLY3E0G5Q"
  };


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {db, auth, storage};