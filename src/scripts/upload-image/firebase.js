// NPM Packages
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAtFt138P_XTsvPduV1lCM2SDJyex5HWq4",
  authDomain: "shopping-list-app-eika.firebaseapp.com",
  projectId: "shopping-list-app-eika",
  storageBucket: "shopping-list-app-eika.appspot.com",
  messagingSenderId: "415217440362",
  appId: "1:415217440362:web:72553d06a1c4b9ab949c13",
};

// Methods
firebase.initializeApp(firebaseConfig);

// Export to make it visible to React
export default firebase;
