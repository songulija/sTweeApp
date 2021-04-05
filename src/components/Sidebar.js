import React from 'react'
import SidebarOption from './SidebarOption';
import { Link } from 'react-router-dom'
import {auth} from '../firebase'
import {useSelector} from 'react-redux'
import { BookmarkBorder, ExitToApp, Home, ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Search, Twitter, VpnKey } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import './sidebar.css'

//import all declared icons from @material-ui/icons 


function Sidebar({history}) {

    //useSelector is function to get store(global state) & we can pullout user state from it
    const user = useSelector((state)=> state.user)
    const {currentUser} = user;

    return (

            <div className='sidebar'>
                {/* Twitter icon */}
                <Twitter className='sidebar__twitterIcon' />
                {/* SidebarOptions ( SidebarOption component), by default active will be Home page */}
                <SidebarOption active Icon={Home} text='Home' />
                <SidebarOption Icon={Search} text='Explore' />
                {currentUser ? (
                    <div>
                    <SidebarOption Icon={NotificationsNone} text='Notifications' />
                    <SidebarOption Icon={MailOutline} text='Messages' />
                    <SidebarOption Icon={BookmarkBorder} text='Bookmarks' />
                    <SidebarOption Icon={ListAlt} text='Lists' />
                    <SidebarOption Icon={PermIdentity} text='Profile' />
                    <SidebarOption Icon={MoreHoriz} text='More' />
                    {/* passing function to SidebarOption, onClick it will call signOut function, which is method of auth */}
                    <div className='option' onClick={() => auth.signOut()}>
                        <ExitToApp/>
                        <h2>SIGN OUT</h2>
                    </div>
                    <Button variant='outlined' className='sidebar__tweet'>Tweet</Button>
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                        <VpnKey/>
                        <h2>SIGN IN</h2>
                    </Link>
                )}
                
                    

                    
                
            </div>

    )
}

export default Sidebar
