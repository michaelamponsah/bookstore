import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducers: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
