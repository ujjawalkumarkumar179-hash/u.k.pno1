// U.K.P NO1 Education - Firebase Authentication
import { db } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut 
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import { app } from "./firebase.js";

const auth = getAuth(app);


// Register Function
window.register = function(name, email, password){
createUserWithEmailAndPassword(auth,email,password)
.then((userCredential)=>{localStorage.setItem("studentName", name);

alert("🎉 Welcome " + name);

alert("Registration Successful ✅");

})
.catch((error)=>{

alert(error.message);

});

}


// Login Function
window.login = function(email,password){

signInWithEmailAndPassword(auth,email,password)
.then((userCredential)=>{let name = localStorage.getItem("studentName");
alert("🎉 Welcome " + name);
alert("Login Successful ✅");

})
.catch((error)=>{

alert(error.message);

});

}


// Logout Function
window.logout = function(){

signOut(auth)
.then(()=>{

alert("Logout Successful");

});

      }
