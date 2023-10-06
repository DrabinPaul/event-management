// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8gl7tXH0K8KdfS61asqF9AZl_oDifsOk",
    authDomain: "react-event-management-drabin.firebaseapp.com",
    projectId: "react-event-management-drabin",
    storageBucket: "react-event-management-drabin.appspot.com",
    messagingSenderId: "142269765286",
    appId: "1:142269765286:web:f84a5f21b14c8e96aac667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;