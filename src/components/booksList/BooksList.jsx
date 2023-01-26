import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../book/Book';

const BooksList = () => {
  const bookData = useSelector((state) => state.books);

  return (
    <ul>
      {
        bookData.map((book) => (
          <li key={book.item_id}>
            <Book book={book} />
          </li>
        ))
      }
    </ul>
  );
};

export default BooksList;
