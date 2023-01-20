import React from 'react';
import { PropTypes } from 'prop-types';
import Book from '../book/Book';

const BooksList = ({ bookData }) => (
  <ul>
    {
      bookData.map((book) => (
        <li key={book.id}>
          <Book book={book} />
        </li>
      ))
    }
  </ul>
);

BooksList.propTypes = {
  bookData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    genre: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  })).isRequired,
};
export default BooksList;
