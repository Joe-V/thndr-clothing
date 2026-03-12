import { initializeApp } from "firebase/app";
import { getAuth ,
         signInWithPopup,
         GoogleAuthProvider,
         createUserWithEmailAndPassword} 
         from "firebase/auth";    

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAG6kXFedA2d0AHr3tRWAgCAyVAvA5VWu8",
  authDomain: "thndr-clothing-db.firebaseapp.com",
  projectId: "thndr-clothing-db",
  storageBucket: "thndr-clothing-db.firebasestorage.app",
  messagingSenderId: "1031162980656",
  appId: "1:1031162980656:web:48c96f7b6f83d7a44ac0f5"
};


const firebaseapp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth , extraInfo) => {
            
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...extraInfo
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
        return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email , password) => {
    if(!email || !password) return;

    return createUserWithEmailAndPassword(auth , email , password)
}