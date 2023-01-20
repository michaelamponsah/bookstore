import React from 'react';
// import { PropTypes } from 'prop-types';
import Book from '../book/Book';

const BookData = [
  {
    id: '1',
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: '2',
    genre: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },
];

const BooksList = () => (
  <ul>
    {
      BookData.map((book) => (
        <li key={book.id}>
          <Book book={book} />
        </li>
      ))
    }
  </ul>
);

export default BooksList;
