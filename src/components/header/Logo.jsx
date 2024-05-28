import React from 'react'
import { PiLinuxLogo } from 'react-icons/pi'

const logo = () => {
  return (
    <h1 className='header__logo'>
            <a href="/">
                <em><PiLinuxLogo/></em>
                <span>Trip<i> tube</i></span>
            </a>
        </h1>
  )
}

export default logo
