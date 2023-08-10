// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCyUm5mR1pjDFpNwF-uluWvETzcJzHvlWs',
  authDomain: 'metablvk-4a331.firebaseapp.com',
  projectId: 'metablvk-4a331',
  storageBucket: 'metablvk-4a331.appspot.com',
  messagingSenderId: '556378266649',
  appId: '1:556378266649:web:8e57a08fb6ad9932a21e88',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const createMessage = async (subject: string, message: string) => {
  const docRef = await addDoc(collection(db, 'messages'), {
    subject: subject,
    message: message,
  });
  return docRef.id;
};
