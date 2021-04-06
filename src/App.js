
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Link, Switch } from 'react-router'
import './App.css';
import HomeScreen from './screens/HomeScreen'
import SignInSignUp from './screens/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase'
import firebase from './firebase'
import { setCurrentImage } from './components/redux/actions/userActions'
import { setCurrentUser } from './components/redux/actions/userActions'

function App() {

  //useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
  const unsubscribeFromAuth = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    //on our firebase project. its like subscribing & always listening to auth
    //if any changes occur on firebase related to this application, it will sends message that auth state changed
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      //setCurrentUser will update initial value(currentUser) to that user object
      if (userAuth) {//we'll get data if we signing in
        const userRef = await createUserProfileDocument(userAuth);

        //subscribe, listen to this userRef for any changes to that data, and with first parameter we get first state of that data
        userRef.onSnapshot(snapShot => {//we get back snapshot object
          //dispatch action setCurrentUser, and pass snapshot id and snapshot data to it
          dispatch(setCurrentUser({//setting currentUser object
            id: snapShot.id,
            ...snapShot.data()
          }))//add snapshot(document id), and whatever data is inside snapshot(document) to currentUser)

        });

        firebase.storage().ref('users/' + userAuth.uid + '/profile.jpg').getDownloadURL().then(imgUrl => {
          dispatch(setCurrentImage(imgUrl))
        })




      }

      //if user logs out dispatch setCurrentUser action. reducer will catch it and update state of user
      dispatch(setCurrentUser(userAuth))//if we signed out userAuth will become null, we are subscribed so we'll get changes


    })//if auth function is called or changed, useEffect function will be called


    //this return function it is triggered when a component unmounts from the DOM
    return () => {
      unsubscribeFromAuth();//it will close subscription
    }
  }, []);
  return (
    //BEM
    <div className='app'>
      {/* Using switch so when it finds route it will go straight to it. not looking at others */}
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
