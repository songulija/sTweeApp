import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF7guPXvo90QVih7lO8V27sWQBVRTG-S8",
  authDomain: "twitter-clone-ff392.firebaseapp.com",
  projectId: "twitter-clone-ff392",
  storageBucket: "twitter-clone-ff392.appspot.com",
  messagingSenderId: "887197915319",
  appId: "1:887197915319:web:3f9a926e4d3fbe5aec9532",
  measurementId: "G-YK91YE8N93"
};




// Creates and initializes a Firebase  instance. and we pass config for app
const firebaseApp = firebase.initializeApp(firebaseConfig)

// Cloud Firestore. there we'll save our data
export const db = firebaseApp.firestore();

export const auth = firebase.auth();

export const storage = firebase.storage();

//set google authentication. gives access to GoogleAuthProvider
const provider = new firebase.auth.GoogleAuthProvider();
//it takes couple custom parameters. this will always open google popup when we use GoogleAuthProvider
provider.setCustomParameters({ prompt: 'select_account' })
//we only want google popup. so i add provider that we created
export const signInWithGoogle = () => auth.signInWithPopup(provider);



//take user object what we got from authentication library and store in db
//when calling this async function provide userAuth object, and any additional data we could need(object)
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;//if userAuth object doesnt exist

  //check if user document in users collection already exist 
  const userRef = db.doc(`users/${userAuth.uid}`)

  //using snapshot we will know if there is data there. if we stored that user user object
  const snapShot = await userRef.get();//check if document with that id exists

  //if data doesnt exist we actually want to create peace of data there
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;//destructuring userAuth object
    const createdAt = new Date();

    try {
      //.set is create method. create document in users collection from userAuth object
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })//store displayName email and whatever is in ...aditionalDAta
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  //return userRef object. we might want userRef code for something
  return userRef;
}




export default firebase;

