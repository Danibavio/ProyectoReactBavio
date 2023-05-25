
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCiSqszIuJx-63ARPaTdJTiTFP1sp20pck",
    authDomain: "codermanga-cfc46.firebaseapp.com",
    projectId: "codermanga-cfc46",
    storageBucket: "codermanga-cfc46.appspot.com",
    messagingSenderId: "1008676296627",
    appId: "1:1008676296627:web:9ebf5e21c201ca6f91ddc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)