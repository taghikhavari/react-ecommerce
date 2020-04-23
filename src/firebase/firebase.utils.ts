import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyAWVGRu7LF2c5ASlBWz14PPgm2QWi22LGk",
	authDomain: "react-ecommerce-7453d.firebaseapp.com",
	databaseURL: "https://react-ecommerce-7453d.firebaseio.com",
	projectId: "react-ecommerce-7453d",
	storageBucket: "react-ecommerce-7453d.appspot.com",
	messagingSenderId: "962997080303",
	appId: "1:962997080303:web:5d58b01abf2e82e1fecb1a",
	measurementId: "G-E2MR5B31ZN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;