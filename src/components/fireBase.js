import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDjgFIM0peaNt752OS1zKTIKQPkqi5J_g0",
    authDomain: "camisetasfutbol-97232.firebaseapp.com",
    projectId: "camisetasfutbol-97232",
    storageBucket: "camisetasfutbol-97232.appspot.com",
    messagingSenderId: "214247228196",
    appId: "1:214247228196:web:2fcaafb07ba2e158e1e9b1",
    measurementId: "G-6EVDBP4NTR"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)