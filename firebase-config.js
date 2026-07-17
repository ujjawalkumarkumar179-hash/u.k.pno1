// Firebase Configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDv1tOYiuQAYAtOa85-9gZvM-fCrjWow6E",
  authDomain: "ukp-no1-education.firebaseapp.com",
  projectId: "ukp-no1-education",
  storageBucket: "ukp-no1-education.firebasestorage.app",
  messagingSenderId: "983226412948
    "
  appId: "1:983226412948:web:7d332914d26850085ca981"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
