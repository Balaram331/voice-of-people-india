const firebaseConfig = {
   apiKey: "AIzaSyATv5FETFolVbuaMEn7vNJkRq11zLe6RTA",
   authDomain: "game-ee4d3.firebaseapp.com",
   projectId: "game-ee4d3",
   storageBucket: "game-ee4d3.firebasestorage.app",
   messagingSenderId: "916006094283",
   appId: "1:916006094283:web:84291a737be763c980a24e",
   measurementId: "G-BPKQ0F46H4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

auth.signInAnonymously()
.then(()=>{
  console.log("User logged in 🔥");
})
.catch(err=>console.log(err));