import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import { db } from '../firebase.js'
import FlipMove from 'react-flip-move'

function Feed() {

    //useState initial value & function to update initial value. by default empty array
    const [posts, setPosts] = useState([])

    //useSelector is function to get store(global state) & we can pullout user state from it
    const user = useSelector((state) => state.user)
    const {currentUser} = user;//destructure

    //triggers when Feed component loads up
    useEffect(() => {
        //go to firestore 'posts' collection. onSpanshot is basically listens to database
        //for any changes(data deletes inserts, updates ..). it basically grabs that snapshot and gives it 
        //to you. and code bellow runs
        db.collection('posts').onSnapshot(snapshot => {
            //setting posts. use snapshot (actual database documents ). get all docs that came back in that snapshot
            //map through every doc(document) and get doc.data(all those fields of document)
            setPosts(snapshot.docs.map(doc => doc.data()))//so this 'll give you array of all post documents in db
        })
    }, [])
    //if one of these vars is changed it will trigger useEffect method

    return (
        <div className='feed'>
            <div className='feed__header'>
                <h2>Home</h2>
            </div>

            {/* If user is Logged in show TweetBox */}

            {currentUser && (
                <TweetBox />
            )}
            

            {/* POSTS. loop through posts array and get every single post. And for each build Post component
            pass post properties values
            FlipMove will animate each of posts*/}
            <FlipMove>
                {posts.map((post) => (
                    <Post key={post.text} displayName={post.displayName} username={post.username}
                        verified={post.verified} text={post.text} avatar={post.avatar}
                        image={post.image} />
                ))}
            </FlipMove>

        </div>

    )
}

export default Feed
