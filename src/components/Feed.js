import React from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'

function Feed() {
    return (
        <div className='feed'>
            <div className='feed__header'>
                <h2>Home</h2>
            </div>

        {/* TweetBox */}
        <TweetBox />

        {/* POSTS */}
        <Post displayName='Sunny Sangha' username='sssanga' verified={true} text='Yooo its working' avatar='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png' image='https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif'/>
        
        </div>   

    )
}

export default Feed
