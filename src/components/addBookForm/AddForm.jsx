import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import styles from './AddForm.module.css';

const AddForm = () => {
  const [userInput, setUserInput] = useState({
    id: '',
    genre: 'Action',
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setUserInput({
      ...userInput,
      id: `${Math.floor(Math.random()*1000)}`,
      [fieldName]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(userInput));
    setUserInput({
      title: '',
      author: '',
    });
  };

  return (
    <div className={`container ${styles['form-wrapper']}`}>
      <h4>Add New Book</h4>
      <form className={`${styles['add-form']}`} onSubmit={handleSubmit}>
        <div className={`${styles['form-control']}`}>
          <label htmlFor="book-title">
            <input type="text" id="book-title" name="title" value={userInput.title} placeholder="Book Title" onChange={handleChange} />
          </label>
        </div>

        <div className={`${styles['form-control']}`}>
          <label htmlFor="author-name">
            <input type="text" id="author-name" name="author" value={userInput.author} placeholder="Author" onChange={handleChange} />
          </label>
        </div>

        <div className={`${styles['form-control']}`}>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
