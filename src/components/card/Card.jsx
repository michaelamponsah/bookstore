import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ children }) => (
  <div className={`container ${styles['card-wrapper']}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
