import { Widgets } from '@material-ui/icons'
import React from 'react'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

function HomeScreen() {
    return (
        <div>
            {/* Sidebar(left side) */}
            <Sidebar />
            {/* Feed (Where all content is)*/}
            <Feed />

            {/* Widgets(widgets on right side) */}
            <Widgets />
        </div>
    )
}

export default HomeScreen
