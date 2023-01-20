import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <header>
    <div className={`container ${styles['header--wrapper']}`}>
      <div className={`${styles['header--left']}`}>
        <span>Bookstore CMS</span>
        <nav>
          <ul>
            <li><NavLink to="/">Books</NavLink></li>
            <li><NavLink to="/categories">Categories</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className={`${styles['header--right']}`}>
        user-icon
      </div>
    </div>
  </header>
);

export default Navbar;
