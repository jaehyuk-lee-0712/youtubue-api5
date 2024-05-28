import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Search from './Search'

import ScrollTo from '../../utils/scrollTo'

const Main = (props) => {
  return (
    <HelmetProvider>
    <ScrollTo/>
    <Helmet
      titleTemplate="%s | Trip Youtube" 
      defaultTitle="Webs Youtube" 
      defer={false}
    >
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
        <Search />
        <section id='main' role='main'>
          {props.children}
        </section>
      
   </HelmetProvider>
  )
}

export default Main
