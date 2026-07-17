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
// ===============================
// Leaderboard - Part 2
// ===============================

import {
  getDocs,
  query,
  collection,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

export async function loadLeaderboard() {

  const leaderboardBody =
    document.getElementById("leaderboardBody");

  leaderboardBody.innerHTML = "";

  const q = query(
    collection(db, "results"),
    orderBy("score", "desc")
  );

  const snapshot = await getDocs(q);

  let rank = 1;

  snapshot.forEach((doc) => {

    const data = doc.data();

    leaderboardBody.innerHTML += `
      <tr>
        <td>#${rank}</td>
        <td>${data.name}</td>
        <td>${data.score}/${data.total}</td>
        <td>${data.percentage}%</td>
      </tr>
    `;

    rank++;

  });

}

// Page Load होते ही Leaderboard दिखाओ
loadLeaderboard();
