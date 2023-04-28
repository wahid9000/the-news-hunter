// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBXjhLGO_I7NgVV8C71jFx_zDZcnhtLI0",
  authDomain: "the-news-hunter.firebaseapp.com",
  projectId: "the-news-hunter",
  storageBucket: "the-news-hunter.appspot.com",
  messagingSenderId: "154399720983",
  appId: "1:154399720983:web:b9211bd5ffc72be5053e52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;