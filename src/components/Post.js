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
                <Avatar className='post__avatar' src={avatar} />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                            {displayName} <span className='post__headerSpecial'>{verified && <VerifiedUser className='post__badge'/>}@{username}</span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt='' />

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
