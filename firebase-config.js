import { getAnalytics } from "https://gstatic.com";
import { getFirestore, collection, addDoc } from "https://gstatic.com"; 
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://gstatic.com";

// आपका Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDv1tOYiuQAYAtOa85-9gZvM-fCrjWow6E",
  authDomain: "://firebaseapp.com",
  projectId: "ukp-no1-education",
  storageBucket: "ukp-no1-education.firebasestorage.app",
  messagingSenderId: "983226412948",
  appId: "1:983226412948:web:7d332914d26850085ca981",
  measurementId: "G-HPJLJLQBVX"
};

// Initialize Firebase, Firestore, और Auth
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// बटन के लिए फंक्शन्स को विंडो ऑब्जेक्ट में जोड़ना ताकि HTML इसे पहचान सके
window.loginWithGoogle = async function() {
  try {
    const result = await signInWithPopup(auth, provider);
    alert(`स्वागत है, ${result.user.displayName}!`);
  } catch (error) {
    alert("लॉगिन फेल: " + error.message);
  }
}

window.logout = async function() {
  try {
    await signOut(auth);
    alert("आप लॉगआउट हो चुके हैं।");
  } catch (error) {
    console.error(error);
  }
}

window.saveData = async function(inputText) {
  const currentUser = auth.currentUser;
  if (currentUser) {
    try {
      const docRef = await addDoc(collection(db, "user_submissions"), {
        uid: currentUser.uid,
        name: currentUser.displayName,
        email: currentUser.email,
        message: inputText,
        timestamp: new Date()
      });
      alert("डेटा सुरक्षित सेव हो गया!");
    } catch (error) {
      alert("एरर: डेटा सेव नहीं हुआ।");
    }
  } else {
    alert("कृपया पहले गूगल से लॉगिन करें!");
  }
}DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UKP NO1 Education - Test Page</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f4f4f4; }
        button { padding: 12px 24px; margin: 10px; font-size: 16px; cursor: pointer; border: none; border-radius: 5px; color: white; font-weight: bold; }
        .btn-login { background-color: #4285F4; } /* Google Blue */
        .btn-save { background-color: #34A853; }  /* Green */
        .btn-logout { background-color: #EA4335; } /* Red */
    </style>
</head>
<body>

    <h1>Firebase System Test</h1>
    <p>नीचे दिए गए बटनों का उपयोग करके टेस्ट करें:</p>
    
    <!-- ये बटन सीधे JS फाइल के फंक्शन्स को कॉल करेंगे -->
    <button class="btn-login" onclick="loginWithGoogle()">Google से लॉगिन करें</button>
    <button class="btn-save" onclick="saveData('मोबाइल से भेजा गया टेस्ट डेटा')">डेटाबेस में सेव करें</button>
    <button class="btn-logout" onclick="logout()">लॉगआउट करें</button>

    <!-- यह लाइन आपकी दोनों फाइलों को आपस में जोड़ेगी -->
    <script type="module" src="firebase-config.js"></script>

</body>
</html>