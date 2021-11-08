
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOVMFlSOb8Fqn3DMNBbpycGpPVIR32hbA",
  authDomain: "uber-clone-live.firebaseapp.com",
  projectId: "uber-clone-live",
  storageBucket: "uber-clone-live.appspot.com",
  messagingSenderId: "878298719010",
  appId: "1:878298719010:web:be026055ea6d0969f87b7b",
  measurementId: "G-PXQJS8HM8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider,auth}