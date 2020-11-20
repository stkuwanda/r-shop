// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';

console.log(process.env);

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

console.log(config);
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, moreData) => {
	if (!userAuth) return;
	
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const userSnapShot = userRef.get();
	console.log(userSnapShot);

	if (!(await userSnapShot).exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({displayName, email, createdAt, ...moreData});
		} catch (err) {
			console.log('Error creating the user:', err.message);
		}
	}
	 
	return userRef;
};

export default firebase;
