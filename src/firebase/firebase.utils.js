import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuy6Ckj49h8mtI_tXuR62a2fyyadmt2Z4",
    authDomain: "canvas-hybrid-226504.firebaseapp.com",
    databaseURL: "https://canvas-hybrid-226504.firebaseio.com",
    projectId: "canvas-hybrid-226504",
    storageBucket: "canvas-hybrid-226504.appspot.com",
    messagingSenderId: "290734018960",
    appId: "1:290734018960:web:259bb058327c83427d2315"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShopt = await userRef.get();
    if (!snapShopt.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error Creating User: ' + error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;