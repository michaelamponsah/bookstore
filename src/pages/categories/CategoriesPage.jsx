import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';
import styles from './CategoriesPage.module.css';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const statusData = useSelector((state) => state.categories);

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="container">
      <p className={styles.message}>{statusData}</p>
      <br />
      <button type="button" className="btn-filled" onClick={handleCheckStatus}>Check Status</button>
    </div>
  );
};

export default CategoriesPage;
