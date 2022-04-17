// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBohnGiQBAqKaRDQTaVbk5zszRt0y4ctts",
    authDomain: "photographers-world-4c2dc.firebaseapp.com",
    projectId: "photographers-world-4c2dc",
    storageBucket: "photographers-world-4c2dc.appspot.com",
    messagingSenderId: "166749890997",
    appId: "1:166749890997:web:a90939bae471bb2d7a91fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;