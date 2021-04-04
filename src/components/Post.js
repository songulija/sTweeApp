import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons'
import React from 'react'
import './Post.css'

// destructuring props that can be passed to this component.
//displayName, actual username of user, verified(big star), ....
function Post({displayName, username, verified, text, image,avatar}) {
    return (
        <div className='post'>
            <div className='post-avatar'>
                <Avatar className='post__avatar' src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png' />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                            Rafeh Qazi <span className='post__headerSpecial'><VerifiedUser className='post__badge'/>@cleverQuazi</span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>I Challenge you to build Twitter Clone with React</p>
                    </div>
                </div>
                <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt='' />

                <div className='post__footer'>
                    <ChatBubbleOutline fontSize='small'/>
                    <Repeat fontSize='small'/>
                    <FavoriteBorder fontSize='small'/>
                    <Publish fontSize='small'/>
                </div>
            </div>
        </div>
    )
}

export default Post
