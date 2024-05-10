import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navBar.css';

const NavBar = () => {
  return (
    <header className='navbar'>
        <h1 className='navbar__title'><Link to='/'>e-commerce
        </Link></h1>
        <ul className='navbar__list'>
            <li className='navbar__item'><Link to='/login'><ion-icon name="person-outline"></ion-icon></Link></li>
            <li className='navbar__item'><Link to='/purchases'><ion-icon name="briefcase-outline"></ion-icon></Link></li>
            <li className='navbar__item'><Link to='/cart'><ion-icon name="cart-outline"></ion-icon></Link></li>
        </ul>
    </header>
   
  )
}

export default NavBar;