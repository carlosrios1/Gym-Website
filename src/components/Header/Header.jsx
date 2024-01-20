import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="header">

        <img className='logo' src={logo} alt="logo" />

        <ul className='header-menu'>
            <li>Inicio</li>
            <li>Programas</li>
            <li>Nosotros</li>
            <li>Planes</li>
            <li>Testimonios</li>
        </ul>
    </div>    
)
}

export default Header