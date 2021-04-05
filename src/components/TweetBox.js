import { Button, Avatar } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase.js'
import './Tweetbox.css'

function TweetBox() {

    //useState initial state & function to update initial state
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    // when clicking button t dispatches event(e)
    const sendTweet = (e) => {
        e.preventDefault();//to prevent page from refreshing. we dont want that in react

        // post to database. go to posts collection. and add new document(as object) into that collection
        db.collection('posts').add({
            displayName: 'Lukas Song',
            username: 'lsong',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg'
        });

        // set tweetMessage and tweetImage values to ''
        setTweetMessage('')
        setTweetImage('')

    }


    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg' />
                    <input placeholder="What's happening?" type='text' value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)} />
                </div>
                {/* onChange triggers function, it get event(e), and i set imageUrl value to what we typed */}
                <input className='tweetBox__imageInput' placeholder="Enter image URL?" type='text' value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} />
                <Button className='tweetBox__tweetButton' onClick={sendTweet}>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
