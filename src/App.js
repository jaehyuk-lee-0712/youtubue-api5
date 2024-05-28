import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Video from './pages/Video'
import Channel from './pages/Channel'
import Header from './components/section/Header'
import Footer from './components/section/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/search/:searchID' element={<Search />}></Route>
          <Route path='/video/:videoID' element={<Video />}></Route>
          <Route path='/channel/:channelID' element={<Channel />}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
