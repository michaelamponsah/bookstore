import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const statusData = useSelector((state) => state.categories);

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="container">
      <p>{statusData}</p>
      <br />
      <button type="button" onClick={handleCheckStatus}>Check Status</button>
    </div>
  );
};

export default CategoriesPage;
