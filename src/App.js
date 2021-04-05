
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import HomeScreen from './screens/HomeScreen';
import SignInSignUp from './screens/SignInSignUp';

function App() {
  return (
    //BEM
    <div className='app'>
      <Switch>
        <Route path='/' component={HomeScreen} />
        {/* <Route path='/signin' component={SignInSignUp} /> */}
      </Switch>


    </div>
  );
}

export default App;
