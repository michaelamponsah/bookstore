import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Card from '../card/Card';
import styles from './Book.module.css';
import { removeBookAsync } from '../../redux/books/books';

const Book = ({ book }) => {
  const {
    item_id: id,
    category,
    title,
    author,
  } = book;

  const dispatch = useDispatch();

  const handleDelete = (bookData) => {
    dispatch(removeBookAsync(bookData));
  };

  return (
    <Card id={id}>
      <div className={`${styles['stats-details-wrapper']}`}>
        <div className={`${styles['book-details']}`}>
          <div className={`${styles['book-details']}`}>
            <span className={styles.genre}>{category}</span>
            <h3 className={`${styles['book-title']}`}>{title}</h3>
            <p className={`${styles['author-name']}`}>{author}</p>
          </div>
          <div className={styles.comments}>
            <button type="button" onClick={() => handleDelete(book)}>Remove</button>
          </div>
        </div>
        <div className={`${styles['progress-wrapper']}`}>
          <CircularProgressbar value={17} text={`${17}%`} className={styles.progress} />
          <div>
            17%
            <br />
            Completed
          </div>
          <span className={styles.divider} />
        </div>
      </div>
      <div className={`${styles['progress-section']}`}>
        <span>Current Chapter</span>
        <span>Chapter 17</span>
        <button type="button" className="btn-filled">update progress</button>
      </div>
    </Card>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
