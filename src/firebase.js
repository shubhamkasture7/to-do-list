// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG7bjyXSo6OfIdy3zgVUMduqOARdsVKvM",
  authDomain: "to-do-list-4ca87.firebaseapp.com",
  projectId: "to-do-list-4ca87",
  storageBucket: "to-do-list-4ca87.firebasestorage.app",
  messagingSenderId: "480910522478",
  appId: "1:480910522478:web:06f46a99f03c3278010e7f",
  measurementId: "G-J11SX9KCL6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Google Sign-In function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user; // Return the user object
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error; // Re-throw the error for handling in the component
  }
};

// Export auth for other uses (if needed)
export { auth };