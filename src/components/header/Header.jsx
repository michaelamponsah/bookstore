import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header>
    <div className={`container ${styles['header--wrapper']}`}>
      <div className={`${styles['header--left']}`}>
        <span>Bookstore CMS</span>
        <nav>
          <ul>
            <li>Books</li>
            <li>Categories</li>
          </ul>
        </nav>
      </div>
      <div className={`${styles['header--right']}`}>
        user-icon
      </div>
    </div>
  </header>
);

export default Header;
