import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SignIn from '../components/signIn/SignIn'
import SignUp from '../components/signUp/SignUp'
import './SignInSignUp.scss'

function SignInSignUp({ history }) {


    //useSelector is function to get store(global state) & we can pullout user state from it
    const user = useSelector((state) => state.user)
    const { currentUser } = user;
    //triggers when component loads up
    useEffect(() => {
        if (currentUser) {//if there is user Signed in. redirect him back to '/' route
            history.push('/')
        }
    })
    return (
        <div className='sign-in-and-sign-up'>
            <h1>helo</h1>
        </div>

    )
}

export default SignInSignUp