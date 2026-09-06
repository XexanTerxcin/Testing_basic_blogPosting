# 📘 Basic Blog + Admin (Firebase)

A minimal, two‑page blog system with an admin panel.  
Built with **HTML + CSS + vanilla JS** and **Firebase** (Firestore + Auth).  
Perfect for learning how to combine Firebase with a static site.

---

## 📁 Files in this repository

| File | Description |
|------|-------------|
| `index.html` | Public blog feed – shows all posts (read‑only) |
| `admin.html` | Admin dashboard – login required to publish / delete posts |
| `firebase-config.js` | Shared Firebase configuration (optional but recommended) |
| `README.md` | This file |

---

## 🚀 Deploy on GitHub Pages

1. Create a new **public** repository on GitHub.
2. Upload all four files (`index.html`, `admin.html`, `firebase-config.js`, `README.md`).
3. Go to your repository **Settings** → **Pages**.
4. Under "Branch", select `main` (or `master`) and save.
5. Your site will be live at:  
   `https://YOUR-USERNAME.github.io/REPO-NAME/`

> 💡 **Tip:** You can also test locally by opening the HTML files in your browser.

---

## 🔥 Firebase Setup (step‑by‑step)

> **No prior Firebase knowledge needed** – just follow these instructions.

### 1. Create a Firebase project
- Go to [Firebase Console](https://console.firebase.google.com/)
- Click **Add project** → give it a name (e.g., "my-blog") → **disable** Google Analytics (optional) → create.

### 2. Set up Firestore Database
- In the left menu, click **Firestore Database** → **Create database**.
- Choose **Start in test mode** (this allows read/write access for development – you can secure it later).
- Select a location (any) and enable.

### 3. Enable Email/Password Authentication
- In the left menu, click **Authentication** → **Get started**.
- Under **Sign-in providers**, enable **Email/Password** and save.

### 4. Register your web app
- In the left menu, click the **gear icon** (Project settings) → **Your apps** → click the **</>** (web) icon.
- Give your app a nickname (e.g., "blog") → click **Register app**.
- You will see a `firebaseConfig` object – **copy it** (you'll need it in the next step).

### 5. Update the configuration
- Open `firebase-config.js` (or `index.html` and `admin.html` if you prefer to keep config inline).
- Replace the placeholder values with the ones you copied from Firebase.

**Example (firebase-config.js):**
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyB2iA6p1G5Z8q3wQ4rT7yU9iK3jL2mN5oP6Q",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};