import React, { useState, useEffect } from 'react'
import { auth, createUserProfileDocument } from '../../firebase.js'
import CustomButton from '../customButton/CustomButton.js';
import FormInput from '../formInput/FormInput.js';


function SignUp() {
    //useState initial value & funcction to update initial value
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const emptifyingStates = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    //getting event data from submit button that trigered event
    const submitHandler = async (e) => {
        e.preventDefault();//prevent screen to refresh
        if (password !== confirmPassword) {
            alert('Passwords dont match')
            return;//if passwords dont match show alert and return(break)
        }

        try {
            //use new auth method. it creates new user acount associated with specified email and password(in Authentication)
            //on succesful creating, user will also be signed to our app. it returns back user object
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            //once we get that back we want to run createUserProfileDocument to create new document in users collection
            await createUserProfileDocument(user, { displayName });//also pass additionData object. in it displayName(user name)
            emptifyingStates();
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a acount</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={submitHandler}>
                <FormInput type='text' name='displayName' value={displayName} onChange={(e) => setDisplayName(e.target.value)} label='Display Name' required />
                <FormInput type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} label='Email' required />
                <FormInput type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} label='Password' required />
                <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} label='Confirm Password' required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>

        </div>
    )
}

export default SignUp