import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
  const [isActive, setIsActive] = useState(false)
  function handleClick () {
    setIsActive((t) => !t)
  }
  return (
    <nav>
        <div>
            <h2 className='logo'>BAIHATA TECH</h2>
        </div>
        <div className='link-cont'>
            <Link to={'/'} className={`navlink`} onClick={handleClick} >Home</Link>
            <Link  to={'/about'} className='navlink' onClick={handleClick}  >About</Link>
            <Link to={'/contact'} className='navlink' 
             onClick={handleClick} >Contact</Link>
            <Link to={'/careers'} className='navlink'  onClick={handleClick} >Careers</Link>
        </div>
    </nav>
  )
}

export default NavigationBar