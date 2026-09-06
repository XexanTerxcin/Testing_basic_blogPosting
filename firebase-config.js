// firebase-config.js
// ============================================================
// 1. REPLACE the values below with YOUR Firebase project config.
// 2. This file is shared between index.html and admin.html.
// 3. Make sure to include it in both HTML files with:
//    <script src="firebase-config.js"></script>
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyCwAA6exYSVleLqhdBnfSuxJ5aq373ywRk",
  authDomain: "my-blog-58113.firebaseapp.com",
  projectId: "my-blog-58113",
  storageBucket: "my-blog-58113.firebasestorage.app",
  messagingSenderId: "1052463297922",
  appId: "1:1052463297922:web:d56643a36da7c092708b9b"
};

// Initialize Firebase (only once)
// If you include this file in both pages, it will run twice,
// but Firebase handles re-initialization gracefully.
firebase.initializeApp(firebaseConfig);

// Optional: export db and auth for use in other scripts
// (but we also initialize them in each HTML file for clarity)
console.log('✅ firebase-config.js loaded');



