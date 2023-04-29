// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_KZW0RVO4Uz2ZRXvk8cAObKURIhI84tU",
  authDomain: "the-news-hunter-1fec5.firebaseapp.com",
  projectId: "the-news-hunter-1fec5",
  storageBucket: "the-news-hunter-1fec5.appspot.com",
  messagingSenderId: "322326248025",
  appId: "1:322326248025:web:f30aa2e8299c1be6818f48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;