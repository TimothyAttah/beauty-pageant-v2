// import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAlh5lmRyjxRoWlnjM3TorTopqBaHH2nJw',
  authDomain: 'nica-phone-auth.firebaseapp.com',
  projectId: 'nica-phone-auth',
  storageBucket: 'nica-phone-auth.appspot.com',
  messagingSenderId: '840025329462',
  appId: '1:840025329462:web:e10e15f8241ad0a0d2ed97',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
