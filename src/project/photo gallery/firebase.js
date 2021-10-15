import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const app= firebase.initializeApp (  {
    apiKey: "AIzaSyAbhZ3R4_A5AtHY1cgr5qccs20n3wsxgXk",
    authDomain: "linkedin-5a283.firebaseapp.com",
    projectId: "linkedin-5a283",
    storageBucket: "linkedin-5a283.appspot.com",
    messagingSenderId: "165286189167",
    appId: "1:165286189167:web:aab22d106d23edd73b559a"
  })

  console.log(app);


  export const auth=app.auth()
  export const storage=app.storage()
  export const db=firebase.firestore()
  // export const serverTimestamp=app.firestore.FieldValue.serverTimestamp()
  export default app