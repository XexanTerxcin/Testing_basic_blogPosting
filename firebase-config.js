// firebase-config.js
// ============================================================
// 1. REPLACE the values below with YOUR Firebase project config.
// 2. This file is shared between index.html and admin.html.
// 3. Make sure to include it in both HTML files with:
//    <script src="firebase-config.js"></script>
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyB2iA6p1G5Z8q3wQ4rT7yU9iK3jL2mN5oP6Q",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};

// Initialize Firebase (only once)
// If you include this file in both pages, it will run twice,
// but Firebase handles re-initialization gracefully.
firebase.initializeApp(firebaseConfig);

// Optional: export db and auth for use in other scripts
// (but we also initialize them in each HTML file for clarity)
console.log('✅ firebase-config.js loaded');



