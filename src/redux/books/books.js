import bookService from '../../services/books';

// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const SET = 'bookstore/books/SET';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET: {
      const keys = Object.keys(payload);

      const updatedState = keys.map((key) => ({
        item_id: key,
        title: payload[key][0].title,
        author: payload[key][0].author,
        category: payload[key][0].category,
      }));
      return updatedState;
    }

    case ADD:
      return [...state, action.payload];

    case REMOVE: {
      const books = [...state];
      const index = books.indexOf(action.payload);
      const updatedBooks = books.filter((book, id) => (id !== index));
      return updatedBooks;
    }

    default:
      return state;
  }
};

// Action creators

export const addBookAsync = (payload) => async (dispatch) => {
  let data;
  try {
    const response = await bookService.createNewBook(payload);
    data = response.text();
    dispatch({
      type: ADD,
      payload,
    });
  } catch (error) {
    return error;
  }
  return data;
};

export const removeBookAsync = (payload) => async (dispatch) => {
  let data;
  try {
    const response = await bookService.deleteSingleBook(payload);
    data = response.text();

    dispatch({
      type: REMOVE,
      payload,
    });
  } catch (error) {
    return error;
  }
  return data;
};

export const getAllBooksAsync = () => async (dispatch) => {
  let payload;
  try {
    const response = await bookService.getAllBooks();
    payload = await response.json();
    dispatch({
      type: SET,
      payload,
    });
  } catch (error) {
    return error;
  }
  return payload;
};

export default booksReducer;
