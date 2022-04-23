import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "nerflix-33b72.firebaseapp.com",
  projectId: "nerflix-33b72",
  storageBucket: "nerflix-33b72.appspot.com",
  messagingSenderId: "260789961664",
  appId: "1:260789961664:web:0683d2f471b227bcfefe25",
  measurementId: "G-L0ZFR1KXBG",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
