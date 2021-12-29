import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCqP7MmLqHjJGwcpCfkV5GegpEEJMOg2hE",
  authDomain: "cooking-ninja-site-90601.firebaseapp.com",
  projectId: "cooking-ninja-site-90601",
  storageBucket: "cooking-ninja-site-90601.appspot.com",
  messagingSenderId: "804050971091",
  appId: "1:804050971091:web:3296062d376f4829686726"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }