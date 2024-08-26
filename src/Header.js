import React from 'react';
import './Styles CSS/App.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Contact from './Contact';

function Header(props) {

  return (
    <div class="bl">
      <nav>
       {/*<div className="user">
          <p>Hello <span>{props.username}</span></p>
  </div>*/}
        <div style={{fontSize:'30px',color:'#5A0',fontWeight:'800'}}>Smart Cart</div>
        <div className="search">
          <form onSubmit={props.SearchHandler} action=""><input onChange={(e) => props.setSearchVal(e.target.value)} type="search" /><input type="submit" value="Search" /></form>
        </div>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='About'>About</NavLink></li>
          {/*<li><NavLink to='Contact' >Contact</NavLink></li>*/}
          <li><NavLink to='login' >Login</NavLink></li>
          <li><NavLink to='Carts'><FontAwesomeIcon icon={faCartShopping} /><sup>{props.count}</sup></NavLink></li>
        </ul>
        <div className="user" style={{fontWeight:'600'}}>Hello, <span>{props.username}</span></div>
      </nav>

    </div>
  )
}

export default Header;