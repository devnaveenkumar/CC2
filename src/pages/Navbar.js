import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to = "/" style={{textDecoration: "none", color: 'black', fontSize: "20px"}}>Home</Link>
        <Link to = "/singers" style={{textDecoration: "none", color: 'black', fontSize: "20px"}}>Singers</Link>
        <Link to = "/albums" style={{textDecoration: "none", color: 'black', fontSize: "20px"}}>Albums</Link>
    </div>
  )
}

export default Navbar