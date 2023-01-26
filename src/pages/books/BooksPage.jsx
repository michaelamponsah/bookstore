import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddForm from '../../components/addBookForm/AddForm';
import BooksList from '../../components/booksList/BooksList';
import { getAllBooksAsync } from '../../redux/books/books';

const BooksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooksAsync());
  }, [dispatch]);

  return (
    <>
      <BooksList />
      <AddForm />
    </>
  );
};

export default BooksPage;
