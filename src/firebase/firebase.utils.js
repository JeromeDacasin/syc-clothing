import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const config = {
    apiKey: "AIzaSyBb1P_Z4v7seel9Fb_3I0g4KLW2EsdAmK8",
    authDomain: "syc-clothing-db.firebaseapp.com",
    projectId: "syc-clothing-db",
    storageBucket: "syc-clothing-db.appspot.com",
    messagingSenderId: "421848992395",
    appId: "1:421848992395:web:af4089885c97ba2a05628e",
    measurementId: "G-LBF3DR048Y"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  
    if(!userAuth) return; 

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        
        const {displayName, email} = userAuth;
        const createdAt = new Date();

     
     
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.messsage)
        }
    }

    return userRef;
}


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
