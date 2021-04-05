import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import SignIn from '../components/signIn/SignIn'
import SignUp from '../components/signUp/SignUp'
import './SignInSignUp.scss'

//destructure props. history allows to redirect to other routes
function SignInSignUp({history}) {
    //useSelector is function to get store global state, & we can pullout user state from it
    const user = useSelector((state) => state.user)
    const {currentUser} = user;

    useEffect(()=>{
        if(currentUser){//if user is logged in redirect to home page
            history.push('/')
        }
    })

    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>

    )
}

export default SignInSignUp
