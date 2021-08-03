import firebase from "firebase";
import "firebase/auth"
const FireBase = () => {



  var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };
  // Initialize Firebase
   const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
// get database from firebase store
  const database = firebase.firestore()

  const auth = firebase.auth()


  return [];
}
 
export default FireBase;