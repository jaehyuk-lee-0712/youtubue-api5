import React from 'react'
import { PiLinuxLogo } from 'react-icons/pi'
import {headerMenu , searchKeyword , snsLinks} from "../../data/menu";
import { Link } from 'react-router-dom';
import Logo from '../header/Logo'
import Menu from '../header/Menu'
import Sns from '../header/Sns'



const Header = () => {
  return (
    <header id='header' role='banner'>
       {/* <h1 className='header__logo'>
            <a href="/">
                <em><PiLinuxLogo/></em>
                <span>Trip<i> tube</i></span>
            </a>
        </h1> */}
        <Logo></Logo>
        {/* <nav className='header__menu'>
          <ul className='menu'>
              {headerMenu.map((menu, key) => (
                <li key={key}>
                  <Link to={menu.src}>
                    <em>{menu.icon}</em>
                    <span>{menu.title}</span>
                  </Link>
                </li>
              ))}
          </ul>
          <ul className='keyword'>          
              {searchKeyword.map((keyword , key) => (
                <li key={key}>
                  <Link to={keyword.src}>{keyword.title}</Link>
                </li>
              ))}
          </ul>
        </nav> */}

        <Menu></Menu>

        {/* <div className='header__sns'>
          <ul>
                  {snsLinks.map((sns , key) => (
                      <li key={key}>
                          <Link to={sns.url} >
                              {sns.icon}
                          </Link>
                      </li>
                  ))}
              </ul>
       </div> */}
       <Sns></Sns>
    </header>
  )
}

export default Header
