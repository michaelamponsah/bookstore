import React from 'react';
import Spinner from 'react-spinkit';
import styles from './Spinner.module.css';

const Loader = () => (
  <div className={styles.wrapper}>
    <Spinner className={styles.loader} name="circle" color="#0290ff" fadeIn="none" />
    <p>Fetching</p>
  </div>
);

export default Loader;
