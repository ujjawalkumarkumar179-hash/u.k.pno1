// U.K.P NO1 Education - Firebase Authentication

import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut 
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import { app } from "./firebase.js";

const auth = getAuth(app);


// Register Function
window.register = function(email, password){

createUserWithEmailAndPassword(auth,email,password)
.then((userCredential)=>{

alert("Registration Successful ✅");

})
.catch((error)=>{

alert(error.message);

});

}


// Login Function
window.login = function(email,password){

signInWithEmailAndPassword(auth,email,password)
.then((userCredential)=>{

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
