import React from 'react';
import { PropTypes } from 'prop-types';
import AddForm from '../../components/addBookForm/AddForm';
import BooksList from '../../components/booksList/BooksList';

const BooksPage = ({ bookData }) => (
  <>
    <BooksList bookData={bookData} />
    <AddForm />
  </>
);

BooksPage.propTypes = {
  bookData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    genre: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  })).isRequired,
};
export default BooksPage;
