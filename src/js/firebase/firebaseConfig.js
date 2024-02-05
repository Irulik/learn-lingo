const VITE_SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

export const firebaseConfig = {
  apiKey: VITE_SECRET_KEY,
  authDomain: "base-lingo.firebaseapp.com",
  datafaseURL: 'https://base-lingo-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: "base-lingo",
  storageBucket: "base-lingo.appspot.com",
  messagingSenderId: "501362930586",
  appId: "1:501362930586:web:387ce46ec4671a8d3f4023"
};