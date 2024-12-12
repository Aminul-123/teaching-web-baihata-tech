import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import NavigationBar from './pages/Navigation'

function App() {

  return (
    <>
    <BrowserRouter>
       <NavigationBar />
        <Routes>
          <Route path='/'  element={<Home />}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/careers' element={<Careers />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App