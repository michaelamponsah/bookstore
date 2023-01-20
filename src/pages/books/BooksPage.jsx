import React from 'react';
import AddForm from '../../components/addBookForm/AddForm';
import BooksList from '../../components/booksList/BooksList';

const BooksPage = () => (
  <>
    <BooksList />
    <AddForm />
  </>
);

export default BooksPage;
