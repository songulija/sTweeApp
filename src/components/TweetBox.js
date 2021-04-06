import { Button, Avatar } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { db, storage } from '../firebase.js'
import './Tweetbox.css'

function TweetBox() {

    //useState initial state & function to update initial state
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    const [image, setImage] = useState(null)

    const user = useSelector((state) => state.user)
    const { currentUser } = user;

    const picture = useSelector((state) => state.picture)
    const { profilePhoto } = picture;

    // when clicking button t dispatches event(e)
    const sendTweet = (e) => {
        e.preventDefault();//to prevent page from refreshing. we dont want that in react

        // post to database. go to posts collection. and add new document(as object) into that collection
        db.collection('posts').add({
            displayName: currentUser.displayName,
            username: currentUser.email,
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: profilePhoto
        });

        // set tweetMessage and tweetImage values to ''
        setTweetMessage('')
        setTweetImage('')

    }


    const handleChange = (e) => {
        if (e.target.files[0]) {//if user selects file then
            setImage(e.target.files[0]);//set image useState value to that file
        }
    }

    const handleUpload = (e) => {
        e.preventDefault()
        //reference to new folder in storage 'images', create if doenst exist
        //put allows to upload file(document) to firebase. upload image itselt(actual file)
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        // to indicate progress of upload. snapshot allows to do it
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error)
            },
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url)
                });//
            }
        )
    }


    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src={profilePhoto} />
                    <input placeholder="What's happening?" type='text' value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)} />
                </div>
                {/* onChange triggers function, it get event(e), and i set imageUrl value to what we typed */}
                <input className='tweetBox__imageInput' placeholder="Enter image URL?" type='text' value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} />
                {/* <input type='file' onChange={handleChange} /> */}
                {/* <button onClick={handleUpload}>Upload Image</button> */}
                <Button className='tweetBox__tweetButton' onClick={sendTweet}>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
