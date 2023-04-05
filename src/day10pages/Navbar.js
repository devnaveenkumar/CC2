import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'
function Navbar() {
  return (
    <div className='day10'>
        <Link to = "/" style={{textDecoration: "none", color: 'black', fontSize: "20px"}}>Home</Link>
        <Link to = "/destination" style={{textDecoration: "none", color: 'black', fontSize: "20px"}}>Destination</Link>
        <Link to = "/about" style={{textDecoration: "none", color: 'black', fontSize: "20px"}}>About</Link>
        <Link to = "/contact" style={{textDecoration: "none", color: 'black', fontSize: "20px"}}>Contact</Link>
        <Link to = "/registration" style={{textDecoration: "none", color: 'black', fontSize: "20px"}}>RegistrationForm</Link>
        {/*        <Link to = "/submitted" style={{textDecoration: "none", color: 'black', fontSize: "20px"}}>SubmittedForm</Link>
*/}
    </div>
  )
}

export default Navbar