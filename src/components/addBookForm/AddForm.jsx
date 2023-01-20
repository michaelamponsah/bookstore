import React from 'react';
import styles from './AddForm.module.css';

const AddForm = () => (
  <div className={`container ${styles['form-wrapper']}`}>
    <h4>Add New Book</h4>
    <form className={`${styles['add-form']}`}>
      <div className={`${styles['form-control']}`}>
        <label htmlFor="book-title">
          <input type="text" id="book-title" name="book-title" placeholder="Book Title" />
        </label>
      </div>

      <div className={`${styles['form-control']}`}>
        <label htmlFor="author-name">
          <input type="text" id="author-name" name="author-name" placeholder="Author" />
        </label>
      </div>

      <div className={`${styles['form-control']}`}>
        <button type="button">Add Book</button>
      </div>
    </form>
  </div>
);

export default AddForm;
