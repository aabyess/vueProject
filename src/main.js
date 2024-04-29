import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 라우터만든거 from './router.js'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGGeNquYCFFhAHDxxgg9JqMQiR3nxA9aI",
  authDomain: "vuefire-16122.firebaseapp.com",
  projectId: "vuefire-16122",
  storageBucket: "vuefire-16122.appspot.com",
  messagingSenderId: "707357552563",
  appId: "1:707357552563:web:2dfe209ef0d8149b90a5c6",
  measurementId: "G-LX1MNNWF57"
};

// Initialize Firebase
initializeApp(firebaseConfig); // 'app' 변수 없이 호출

const appFirebase = initializeApp(firebaseConfig);
getAnalytics(appFirebase); // 'analytics' 변수 없이 이렇게 호출

createApp(App).use(라우터만든거).mount('#app')
