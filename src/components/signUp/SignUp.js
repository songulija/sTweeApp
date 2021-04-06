import React, { useState } from 'react'
import CustomButton from '../customButton/CustomButton';
import FormInput from '../formInput/FormInput'
import { auth, createUserProfileDocument } from '../../firebase'
import firebase from '../../firebase'
import './styles.scss'

function SignUp() {

    //useState initial value & funcction to update initial value
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [file, setFile] = useState(null);




    const handleChange = (e) => {
        if (e.target.files[0]) {//if user selects file then
            setFile(e.target.files[0]);//set image useState value to that file
        }
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
            const { user } = await auth.createUserWithEmailAndPassword(email, password).then(auth => {
                //once we get that back we want to run createUserProfileDocument to create new document in users collection

                //reference(location path) where we want to store file. put method to upload file(provide actual file)
                firebase.storage().ref('users/' + auth.user.uid + '/profile.jpg').put(file).then(function () {
                    console.log('succesfully uploaded')
                }).catch(error => {
                    console.log(error.message)
                })

            })
            await createUserProfileDocument(user, { displayName });//also pass additionData object. in it displayName(user name)
            emptifyingStates();
        } catch (error) {
            console.log(error)
        }

    }


    const emptifyingStates = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
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
                <input type='file' onChange={handleChange} />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>

        </div>
    )
}

export default SignUp
