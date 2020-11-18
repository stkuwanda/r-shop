// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyD9Kyracmpj1tYYV4nn0TEKiVe4BZBlxwo',
	authDomain: 'r-shop-db.firebaseapp.com',
	databaseURL: 'https://r-shop-db.firebaseio.com',
	projectId: 'r-shop-db',
	storageBucket: 'r-shop-db.appspot.com',
	messagingSenderId: '680810823332',
	appId: '1:680810823332:web:40c450d3d3d6f43d187031',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;