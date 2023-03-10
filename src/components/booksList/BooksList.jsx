import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../book/Book';
import styles from './BooksList.module.css';

const BooksList = () => {
  const bookData = useSelector((state) => state.books.books);

  return (
    <ul className={styles.wrapper}>
      {
        bookData.map((book) => (
          <li key={book.item_id} className={styles.item}>
            <Book book={book} />
          </li>
        ))
      }
    </ul>
  );
};

export default BooksList;
