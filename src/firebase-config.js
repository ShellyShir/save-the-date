import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestor";

const firebaseConfig = {
    apiKey: "AIzaSyAv5XRic-wcWfRn_jEB6g6ghdA1cAa_8MY",
    authDomain: "save-the-date-app.firebaseapp.com",
    databaseURL: "https://save-the-date-app-default-rtdb.firebaseio.com",
    projectId: "save-the-date-app",
    storageBucket: "save-the-date-app.appspot.com",
    messagingSenderId: "824189352621",
    appId: "1:824189352621:web:c14581ff18912985342424"
  };

  const app = initializeApp(firebaseConfig);

   export const db = getFirestore(app);