
/////////////////////////
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBz9P1Y1U9EdfUyZoL6aZUvRVWHstS_YwY",
        authDomain: "react-crud-operations-cbe85.firebaseapp.com",
        projectId: "react-crud-operations-cbe85",
        storageBucket: "react-crud-operations-cbe85.appspot.com",
        messagingSenderId: "985679971410",
        appId: "1:985679971410:web:ffbf64f4b222bbe3ff8b8b"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);