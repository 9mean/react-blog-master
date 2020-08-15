import React from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <div className='nav'>
        <div className='logo'>
          <Link exact to='/'>
            <span className='logo__name'>GumHouseClass</span>
          </Link>
        </div>

        <div className='nav__list'>
          <div>
            <NavLink exact to='/'>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to='/intro'>Introduction</NavLink>
          </div>
          <div>
            <NavLink to='/search'>Found</NavLink>
          </div>
          <div>
            <NavLink to='/contact'>Contact</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
