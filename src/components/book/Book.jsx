import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import Card from '../card/Card';
import styles from './Book.module.css';
import { removeBook } from '../../redux/books/books';

const Book = ({ book }) => {
  const {
    id, genre, title, author,
  } = book;

  const dispatch = useDispatch();

  const handleDelete = (bookData) => {
    dispatch(removeBook(bookData));
  };

  return (
    <Card id={id}>
      <div className={`${styles['stats-details-wrapper']}`}>
        <div className={`${styles['book-details']}`}>
          <div className={`${styles['book-details']}`}>
            <span className={styles.genre}>{genre}</span>
            <h3 className={`${styles['book-title']}`}>{title}</h3>
            <p className={`${styles['author-name']}`}>{author}</p>
          </div>
          <div className={styles.comments}>
            <button type="button" onClick={() => handleDelete(book)}>Remove</button>
          </div>
        </div>
        <div>Stats 80%</div>
      </div>
      <div className={`${styles['progress-section']}`}>
        Current Chapter
        <span>Chapter 17</span>
        <button type="button">update progress</button>
      </div>
    </Card>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    genre: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
