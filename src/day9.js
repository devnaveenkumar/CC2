import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Singers from './pages/Singers'
import Albums from './pages/Albums'
import Navbar from './pages/Navbar'

function Day9() {
  return (
    <div>
    <h1>Day 9: </h1>
    <Navbar/>
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/singers' element = {<Singers />} />
            <Route path = '/albums' element = {<Albums />} />
        </Routes>
    </div>
  )
}

export default Day9