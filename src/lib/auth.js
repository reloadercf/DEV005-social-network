/* eslint-disable prefer-promise-reject-errors */
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig.js';

export const addUserToSocialNetwork = (email, password) => new Promise((resolve, reject) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      resolve({ message: 'success', email: user.email });
    // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      reject({ message: 'error', email, errorMessage });
    });
});
