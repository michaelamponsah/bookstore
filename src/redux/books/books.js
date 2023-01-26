import { createAsyncThunk } from '@reduxjs/toolkit';
import bookService from '../../services/books';
import getArrayFromJSON from '../../utils/getArrayFromJSON';

// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const SET = 'bookstore/books/SET';

const initialState = {
  books: [],
  status: 'idle',
};

const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET: {
      return {
        ...state,
        status: 'succeeded',
        books: payload,
      };
    }

    case ADD:
      return {
        ...state,
        status: 'succeeded',
        books: [...state.books, payload],
      };

    case REMOVE: {
      const books = [...state.books];
      const index = books.indexOf(action.payload);
      const updatedBooks = books.filter((book, id) => (id !== index));
      return {
        ...state,
        status: 'succeeded',
        books: updatedBooks,
      };
    }

    default:
      return state;
  }
};

// Action creators

export const addBookAsync = createAsyncThunk(ADD, async (payload, thunkAPI) => {
  let data;
  try {
    const response = await bookService.createNewBook(payload);
    data = response.text();
    thunkAPI.dispatch({
      type: ADD,
      payload,
    });
  } catch (error) {
    return error;
  }
  return data;
});

export const removeBookAsync = createAsyncThunk(REMOVE, async (payload, thunkAPI) => {
  let data;
  try {
    const response = await bookService.deleteSingleBook(payload);
    data = response.text();
    thunkAPI.dispatch({ type: REMOVE, payload });
  } catch (error) {
    return error;
  }
  return data;
});

export const getAllBooksAsync = createAsyncThunk(SET, async (param, thunkAPI) => {
  let payload;
  try {
    const response = await bookService.getAllBooks();
    const data = await response.json();

    if (!data) {
      throw new Error('No data found :(');
    }

    payload = getArrayFromJSON(data);
    thunkAPI.dispatch({ type: SET, payload });
  } catch (error) {
    return error;
  }
  return payload;
});

export default booksReducer;
