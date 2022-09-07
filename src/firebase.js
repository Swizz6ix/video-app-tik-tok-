import { getFirestore} from 'firebase/firestore'
import {initializeApp} from "firebase/app"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0vQItEyXOQRgfr_YRTFpgnFpUe-aUDtk",
  authDomain: "video-app-ff718.firebaseapp.com",
  projectId: "video-app-ff718",
  storageBucket: "video-app-ff718.appspot.com",
  messagingSenderId: "291379239552",
  appId: "1:291379239552:web:2aaade54d7ddac06306465",
  measurementId: "G-TB8BF8MTLX"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;