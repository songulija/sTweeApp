import React from 'react'
import SidebarOption from './SidebarOption';
import { BookmarkBorder, Home, ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Search, Twitter } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import './sidebar.css'
//import all declared icons from @material-ui/icons 


function Sidebar() {
    return (

            <div className='sidebar'>
                {/* Twitter icon */}
                <Twitter className='sidebar__twitterIcon' />
                {/* SidebarOptions ( SidebarOption component), by default active will be Home page */}
                <SidebarOption active Icon={Home} text='Home' />
                <SidebarOption Icon={Search} text='Explore' />
                <SidebarOption Icon={NotificationsNone} text='Notifications' />
                <SidebarOption Icon={MailOutline} text='Messages' />
                <SidebarOption Icon={BookmarkBorder} text='Bookmarks' />
                <SidebarOption Icon={ListAlt} text='Lists' />
                <SidebarOption Icon={PermIdentity} text='Profile' />
                <SidebarOption Icon={MoreHoriz} text='More' />


                {/* Button  -> Tweet */}
                <Button variant='outlined' className='sidebar__tweet'>Tweet</Button>
            </div>

    )
}

export default Sidebar
