import React from 'react'
import { headerMenu, searchKeyword } from '../../data/menu'
import { Link } from 'react-router-dom'

const menu = () => {
  return (
    <nav className='header__menu'>
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
  </nav>
  )
}

export default menu
