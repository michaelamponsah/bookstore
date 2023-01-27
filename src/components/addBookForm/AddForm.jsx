import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../../redux/books/books';
import styles from './AddForm.module.css';

const AddForm = () => {
  const [bookDetails, setbookDetails] = useState({
    item_id: null,
    title: '',
    author: '',
    category: '--Select Category--',
  });

  const categories = ['Crime', 'Adventure', 'Action'];
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setbookDetails({
      ...bookDetails,
      [fieldName]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBookDetails = { ...bookDetails, item_id: uuidv4() };
    dispatch(addBookAsync(updatedBookDetails));

    setbookDetails({
      title: '',
      author: '',
      category: '--Select Category--',
    });
  };

  return (
    <div className={`container ${styles['form-wrapper']}`}>
      <h4>Add New Book</h4>
      <form className={`${styles['add-form']}`} onSubmit={handleSubmit}>
        <div className={`${styles['form-control']}`}>
          <label htmlFor="book-title">
            <input
              type="text"
              id="book-title"
              name="title"
              value={bookDetails.title}
              placeholder="Book Title"
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className={`${styles['form-control']}`}>
          <label htmlFor="author-name">
            <input
              type="text"
              id="author-name"
              name="author"
              value={bookDetails.author}
              placeholder="Author"
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className={`${styles['form-control']}`}>
          <label htmlFor="category-name">
            <select name="category" id="category" onChange={handleChange} required value={bookDetails.category}>
              <option value="">{bookDetails.category}</option>
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <button type="submit" className="btn-filled">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
