import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddForm from '../../components/addBookForm/AddForm';
import BooksList from '../../components/booksList/BooksList';
import Loader from '../../components/loadingIndicator/Spinner';
import { getAllBooksAsync } from '../../redux/books/books';

const BooksPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.books.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getAllBooksAsync());
    }
  }, [dispatch, status]);

  return (
    <>
      { status === 'idle' ? <Loader /> : <BooksList /> }
      <AddForm />
    </>
  );
};

export default BooksPage;
