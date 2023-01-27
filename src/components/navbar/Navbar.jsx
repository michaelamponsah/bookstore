import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';
import styles from './Navbar.module.css';

const Navbar = () => (
  <header className={`${styles.header}`}>
    <div className={`container ${styles['header--wrapper']}`}>
      <div className={`${styles['header--left']}`}>
        <span>Bookstore CMS</span>
        <nav>
          <ul>
            <li>
              <NavLink 
                className={({isActive}) => (isActive ? styles.active : styles.link)} 
                to="/"
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({isActive}) => (isActive ? styles.active : styles.link)}
                to="/categories"
              >
                Categories
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`${styles['header--right']}`}>
        <BsPersonFill color="#0290ff" size={60}/>
      </div>
    </div>
  </header>
);

export default Navbar;
