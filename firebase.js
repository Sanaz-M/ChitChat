import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBUuFZ8lHm1J1RZ46omsh8jrNMD6b5cmk8",
  authDomain: "chichat-app-a9a8e.firebaseapp.com",
  databaseURL: "https://chichat-app-a9a8e-default-rtdb.firebaseio.com",
  projectId: "chichat-app-a9a8e",
  storageBucket: "chichat-app-a9a8e.appspot.com",
  messagingSenderId: "281233578815",
  appId: "1:281233578815:web:3acec1990758f46c25918a"
};


let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
};



export const db = getFirestore(app);
export const auth = getAuth(app);
