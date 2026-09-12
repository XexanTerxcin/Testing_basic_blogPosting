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

const authStatus = document.getElementById('authStatus');
const loginCard = document.getElementById('loginCard');
const adminPanel = document.getElementById('adminPanel');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');
const logoutBtn = document.getElementById('logoutBtn');
const postTitle = document.getElementById('postTitle');
const postContent = document.getElementById('postContent');
const publishBtn = document.getElementById('publishBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const publishStatus = document.getElementById('publishStatus');

auth.onAuthStateChanged(user => {
  if (user) {
    authStatus.textContent = `✅ logged in as ${user.email}`;
    loginCard.classList.add('hidden');
    adminPanel.classList.remove('hidden');
    loginError.textContent = '';
  } else {
    authStatus.textContent = '🔒 not logged in';
    loginCard.classList.remove('hidden');
    adminPanel.classList.add('hidden');
    publishStatus.textContent = '';
  }
});

loginBtn.addEventListener('click', async () => {
  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();
  if (!email || !password) {
    loginError.textContent = '⚠️ please enter email and password.';
    return;
  }
  loginError.textContent = '⏳ logging in ...';
  loginBtn.disabled = true;
  try {
    await auth.signInWithEmailAndPassword(email, password);
    loginError.textContent = '✅ success!';
    loginEmail.value = '';
    loginPassword.value = '';
  } catch (err) {
    loginError.textContent = '❌ ' + err.message;
  }
  loginBtn.disabled = false;
});

logoutBtn.addEventListener('click', () => {
  auth.signOut();
  publishStatus.textContent = '';
});

publishBtn.addEventListener('click', async () => {
  const title = postTitle.value.trim();
  const content = postContent.value.trim();
  if (!title || !content) {
    publishStatus.textContent = '⚠️ please fill in both title and content.';
    return;
  }
  publishStatus.textContent = '⏳ publishing ...';
  publishBtn.disabled = true;
  try {
    await db.collection('posts').add({
      title: title,
      content: content,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    postTitle.value = '';
    postContent.value = '';
    publishStatus.textContent = '✅ published!';
  } catch (err) {
    publishStatus.textContent = '❌ error: ' + err.message;
  }
  publishBtn.disabled = false;
});

deleteAllBtn.addEventListener('click', async () => {
  if (!confirm('⚠️ delete ALL blog posts? this cannot be undone.')) return;
  deleteAllBtn.disabled = true;
  try {
    const snapshot = await db.collection('posts').get();
    const batch = db.batch();
    snapshot.docs.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
    publishStatus.textContent = '🗑️ all posts deleted.';
  } catch (err) {
    publishStatus.textContent = '❌ delete error: ' + err.message;
  }
  deleteAllBtn.disabled = false;
});

console.log('🔐 admin.html ready.');