// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBnsDYD-Qm9Scsk4yEYvJZKr_mwvJJcdYg",
    authDomain: "collegeevents-15204.firebaseapp.com",
    projectId: "collegeevents-15204",
    storageBucket: "collegeevents-15204.firebasestorage.app",
    messagingSenderId: "33055463844",
    appId: "1:33055463844:web:d8e07c22affa1a600cc931",
    measurementId: "G-2WKNJHEXWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;