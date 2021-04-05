import React from 'react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import './styles.css'

function HomeScreen() {
    return (
        <div className='homescreen'>
            {/* Sidebar(left side) */}
            <Sidebar />
            {/* Feed (Where all content is)*/}
            <Feed />

            {/* Widgets(widgets on right side) */}
            <Widgets/>
        </div>
    )
}

export default HomeScreen
