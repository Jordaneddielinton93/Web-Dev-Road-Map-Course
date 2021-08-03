import firebase from "firebase";
import "firebase/auth"




  var firebaseConfig = {
    apiKey: "AIzaSyCZS8SFk2qPoXsLdxTv37DVraKPI65Y1JU",
    authDomain: "web-dev-course-dd783.firebaseapp.com",
    projectId: "web-dev-course-dd783",
    storageBucket:"web-dev-course-dd783.appspot.com",
    messagingSenderId: "915456601499",
    appId: "1:915456601499:web:843b620dc14c164ca9453e",
    measurementId: "G-F7JESYXQQW"
  };
  // Initialize Firebase
   const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
// get database from firebase store
  const database = firebase.firestore()

  const auth = firebase.auth()

  export {auth}

 
export default database;