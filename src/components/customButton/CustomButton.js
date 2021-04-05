
import React from 'react'
import './styles.scss'

function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
    return (//if isGoogleSignIn is true then google-sign-in toClass name 
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton