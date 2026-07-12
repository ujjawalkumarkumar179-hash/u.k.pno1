// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDv1tOYiuQAYAtOa85-9gZvM-fCrjWow6E",
  authDomain: "ukp-no1-education.firebaseapp.com",
  projectId: "ukp-no1-education",
  storageBucket: "ukp-no1-education.firebasestorage.app",
  messagingSenderId: "983226412948",
  appId: "1:983226412948:web:5a9f5ecbc2af1a395ca981"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  collection,
  addDoc
};
