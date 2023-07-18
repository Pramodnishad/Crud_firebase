import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCaLhQGWVfi1B-ff2sxVDHCRZL-6gAOTWY",
  authDomain: "todo-app-2b807.firebaseapp.com",
  projectId: "todo-app-2b807",
  storageBucket: "todo-app-2b807.appspot.com",
  messagingSenderId: "39623773249",
  appId: "1:39623773249:web:86741e9598f76315494ac0"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
