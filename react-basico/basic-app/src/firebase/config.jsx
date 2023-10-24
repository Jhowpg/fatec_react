import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFireStore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC717Jl3WlAhYaLWvfWDd4wjScaz-wMkGs",
  authDomain: "react-basic-jhonatasantos.firebaseapp.com",
  projectId: "react-basic-jhonatasantos",
  storageBucket: "react-basic-jhonatasantos.appspot.com",
  messagingSenderId: "1083324242179",
  appId: "1:1083324242179:web:c6c9d1735a6ba58c42f136",
  measurementId: "G-0KE9GP281L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFireStore(app);

export {db};