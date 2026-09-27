// U.K.P NO1 Education - Firebase Authentication

import { db } from "./firebase.js";
import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import { app } from "./firebase.js";

const auth = getAuth(app);


// ===============================
// Register Function
// ===============================

window.register = function(name, email, password) {

  createUserWithEmailAndPassword(auth, email, password)

    .then(async (userCredential) => {

      const user = userCredential.user;

      // Firebase Profile में नाम सेव करें
      await updateProfile(user, {
        displayName: name
      });

      // Local Storage में भी नाम रखें
      localStorage.setItem("studentName", name);

      // Firestore में student data सेव करें
      await setDoc(doc(db, "students", user.uid), {
        name: name,
        email: email
      });

      alert("🎉 Welcome " + name);
      alert("Registration Successful ✅");

    })

    .catch((error) => {

      alert(error.message);

    });

};


// ===============================
// Login Function
// ===============================

window.login = function(email, password) {

  signInWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {

      const user = userCredential.user;

      // Firebase से असली नाम लें
      const name = user.displayName || localStorage.getItem("studentName") || "Student";

      // Local Storage update करें
      localStorage.setItem("studentName", name);

      alert("🎉 Welcome " + name);
      alert("Login Successful ✅");

    })

    .catch((error) => {

      alert(error.message);

    });

};


// ===============================
// Logout Function
// ===============================

window.logout = function() {

  signOut(auth)

    .then(() => {

      localStorage.removeItem("studentName");

      alert("Logout Successful");

    })

    .catch((error) => {

      alert(error.message);

    });

};
