import { initializeApp } from "firebase/app";
import { getAuth ,
         signInWithPopup,
         GoogleAuthProvider,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged,   
        } 
         from "firebase/auth";    

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    }
    );

    await batch.commit();
    console.log('done');
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef); 
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
}

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

export const signINAuthUserWithEmailAndPassword = async (email , password) => {
    if(!email || !password) return;

    return signInWithEmailAndPassword(auth , email , password)
}


export const signOutUser = async () => await signOut(auth);



export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth,callback);