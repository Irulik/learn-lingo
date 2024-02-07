import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const registrationUser = (email, password) => {
	console.log(email, password);
	createUserWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			// Signed up
			const user = userCredential.user;
			console.log(user);
			// ...
		})
		.catch(error => {
			console.log(error);
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
};
