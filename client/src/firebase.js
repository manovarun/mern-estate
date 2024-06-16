// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'estate-16f02.firebaseapp.com',
  projectId: 'estate-16f02',
  storageBucket: 'estate-16f02.appspot.com',
  messagingSenderId: '874861012340',
  appId: '1:874861012340:web:8cdb3b99b0113a39d07821',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
