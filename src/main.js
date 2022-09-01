import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './routes'
// import { initializeApp } from 'firebase/app';
// import { initializeApp } from 'firebase/app';
// import { initializeApp } from '@firebase/app'
// import { getFirestore } from 'firebase/firestore/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import Main from './Main.vue'

// Font Awesome CSS
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

// Bootsrap CSS, JS
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './main.css' 

const firebaseConfig = {
    apiKey: "AIzaSyB76Z9J9H1urUf7ZoOEC1qq9PYyBwPpL-I",
    authDomain: "mclamba-gr8qm.firebaseapp.com",
    databaseURL: "https://mclamba-gr8qm-default-rtdb.firebaseio.com",
    projectId: "mclamba-gr8qm",
    storageBucket: "mclamba-gr8qm.appspot.com",
    messagingSenderId: "826457252851",
    appId: "1:826457252851:web:c36e04d0148c9670d2e886",
    measurementId: "G-X2TM7GC83F"
  };

  // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

// Vue.config.productionTip = false;

createApp(App).use(router).mount('#app')
// createApp(Main).mount('#header')
 
export default {db, auth }