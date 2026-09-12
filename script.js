const firebaseConfig = {
  apiKey: "AIzaSyCwAA6exYSVleLqhdBnfSuxJ5aq373ywRk",
  authDomain: "my-blog-58113.firebaseapp.com",
  projectId: "my-blog-58113",
  storageBucket: "my-blog-58113.firebasestorage.app",
  messagingSenderId: "1052463297922",
  appId: "1:1052463297922:web:d56643a36da7c092708b9b"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const blogListEl = document.getElementById('blogList');
const authStatus = document.getElementById('authStatus');
const readmeSection = document.getElementById('readmeSection');

const readmeText = `# 📘 Basic Blog + Admin (Firebase)

## 🚀 Deploy on GitHub Pages
1. Create a new public repo on GitHub.
2. Upload ALL files: index.html, admin.html, firebase-config.js, README.md.
3. Go to Settings > Pages, select "main" branch, save.
4. Your site will be live at: https://YOUR-USERNAME.github.io/REPO-NAME

## 🔥 Firebase setup (no prior knowledge needed)
1. Go to https://console.firebase.google.com/
2. Click "Add project" → name it → disable Google Analytics.
3. In the left menu, click "Firestore Database" → "Create database" → start in test mode (yes, allow all).
4. In the left menu, click "Authentication" → "Get started" → "Email/Password" → enable it.
5. In the left menu, click "Project settings" (gear icon) → "Your apps" → add a web app (</> icon).
6. Register app (nickname: "blog") → copy the firebaseConfig object.
7. PASTE that config into the firebaseConfig variable in:
   - index.html (around line 70)
   - admin.html (around line 70)
   - firebase-config.js (optional, but used in both pages)
8. Go to Firestore Database → "Rules" tab → set rules to:
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true;
       }
     }
   }
   (this allows full access for demo; you can restrict later)

## 🔐 Create admin user
1. In Firebase Console → Authentication → "Add user" (email/password).
2. Use this email & password to login on the admin page.

## ✨ How to use
- Open index.html → public blog feed.
- Go to admin.html → login with admin credentials.
- Publish new posts, delete all posts.
- All changes appear instantly on index.html.

## 📁 Files
- index.html       → public blog view
- admin.html       → admin dashboard (login required)
- firebase-config.js → shared config (optional, but recommended)
- README.md        → this file

Made with ❤️ + Firebase.`;

function renderBlogs(snapshot) {
  const docs = snapshot.docs;
  if (docs.length === 0) {
    blogListEl.innerHTML = `<p style="color: #64748b;">✨ no posts yet. be the first!</p>`;
    return;
  }

  let html = '';
  docs.forEach(doc => {
    const data = doc.data();
    const date = data.createdAt?.toDate?.()?.toLocaleString() || 'just now';
    html += `
      <div class="blog-item">
        <h3>${escapeHtml(data.title) || 'untitled'}</h3>
        <div class="meta">📅 ${date}</div>
        <p>${escapeHtml(data.content) || ''}</p>
      </div>
    `;
  });
  blogListEl.innerHTML = html;
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

let unsubscribePosts = null;

function subscribePosts() {
  if (unsubscribePosts) unsubscribePosts();
  unsubscribePosts = db.collection('posts')
    .orderBy('createdAt', 'desc')
    .onSnapshot(snapshot => {
      renderBlogs(snapshot);
    }, error => {
      console.error('Firestore error:', error);
      blogListEl.innerHTML = `<p style="color: #b91c1c;">⚠️ error loading posts: ${error.message}</p>`;
    });
}

auth.onAuthStateChanged(user => {
  if (user) {
    authStatus.textContent = `✅ logged in as ${user.email}`;
  } else {
    authStatus.innerHTML = `🔒 not logged in · <a href="admin.html" style="color:#3b82f6;text-decoration:none;">login</a>`;
  }
});

readmeSection.textContent = readmeText;
subscribePosts();
console.log('📘 index.html ready.');