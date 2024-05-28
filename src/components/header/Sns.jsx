import React from 'react'
import { snsLinks } from '../../data/menu'
import { Link } from 'react-router-dom'

const sns = () => {
  return (
    <div className='header__sns'>
          <ul>
                  {snsLinks.map((sns , key) => (
                      <li key={key}>
                          <Link to={sns.url} >
                              {sns.icon}
                          </Link>
                      </li>
                  ))}
              </ul>
       </div>
  )
}

export default sns
