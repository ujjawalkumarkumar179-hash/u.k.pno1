// ===============================
// U.K.P NO1 Education
// Result Save System - Part 1
// ===============================

import { app } from "./firebase.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const db = getFirestore(app);

// Result Save Function
export async function saveResult(studentName, score, totalQuestions) {

  try {

    await addDoc(collection(db, "results"), {

      name: studentName,
      score: score,
      total: totalQuestions,
      percentage: Math.round((score / totalQuestions) * 100),

      createdAt: serverTimestamp()

    });

    alert("✅ Result Successfully Saved");

  } catch (error) {

    console.error(error);
    alert("❌ Result Save Failed");

  }

}
