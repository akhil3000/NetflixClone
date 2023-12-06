import React from 'react'
import logo from '../images/logo.png'
const Header= () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <img
        className="w-44"
        src={logo} width="100" height="50"
        alt="logo"
        />
    </div>
  )
}

export default Header