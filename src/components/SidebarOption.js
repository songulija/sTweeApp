import React from 'react'
import './SidebarOption.css'

//you can pass properties to SidebarOption. & access them with props
function SidebarOption({ active, text, Icon, handleClick }) {//and Icon will be component so its capital letter
    return (//if active add one modifier to class. --active, modifying state of sidebarOption
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`} onClick={handleClick}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
