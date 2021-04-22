import firebase from 'firebase/app';
import  'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyCSTCcxF9rXlx0zgIrA90otZxepjEjGd-w",
    authDomain: "e-commerce-app-c5e1f.firebaseapp.com",
    projectId: "e-commerce-app-c5e1f",
    storageBucket: "e-commerce-app-c5e1f.appspot.com",
    messagingSenderId: "481185516466",
    appId: "1:481185516466:web:7db05c09f3d5c5b29072ab",
    measurementId: "G-GGSHPHQJRW"
  };

  var firebaseapp =firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

export default auth;