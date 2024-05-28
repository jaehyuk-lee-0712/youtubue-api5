import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Video from './pages/Video'
import Channel from './pages/Channel'
import Header from './components/section/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/video' element={<Video />}></Route>
        <Route path='/channel' element={<Channel />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
