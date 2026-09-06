// firebase-config.js                                      // This is the shared Firebase setup file.
// ============================================================ // This visual line separates the file header from the instructions.
// 1. REPLACE the values below with YOUR Firebase project config. // These values identify your Firebase project.
// 2. This file is shared between index.html and admin.html. // Both pages can load the same configuration.
// 3. Make sure to include it in both HTML files with:      // Each HTML page needs to load this file if it uses it.
//    <script src="firebase-config.js"></script>           // This is the script tag that loads this file.
// ============================================================ // This visual line ends the instructions.

const firebaseConfig = {                                // This object contains the connection details for Firebase.
  apiKey: "AIzaSyCwAA6exYSVleLqhdBnfSuxJ5aq373ywRk",   // This public browser key identifies the web app.
  authDomain: "my-blog-58113.firebaseapp.com",          // This domain handles Firebase sign-in redirects.
  projectId: "my-blog-58113",                           // This selects the Firebase project and its database.
  storageBucket: "my-blog-58113.firebasestorage.app",  // This names the project's file storage bucket.
  messagingSenderId: "1052463297922",                  // This identifies the Firebase messaging project.
  appId: "1:1052463297922:web:d56643a36da7c092708b9b"  // This uniquely identifies this registered web app.
};                                                       // This closes the Firebase configuration object.

// Initialize Firebase (only once)                         // This creates the Firebase application connection.
// If you include this file in both pages, it will run twice, // Each page is a separate browser application.
// but Firebase handles re-initialization gracefully.       // Firebase prevents duplicate setup in the same page.
firebase.initializeApp(firebaseConfig);                   // Firebase reads the configuration and starts up.

// Optional: export db and auth for use in other scripts    // This explains a possible way to share service objects.
// (but we also initialize them in each HTML file for clarity) // The current pages create their own service objects.
console.log('✅ firebase-config.js loaded');               // This confirms in the browser console that loading finished.



