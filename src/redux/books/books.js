// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE: {
      const books = [...state];
      const index = books.indexOf(action.payload);
      const updatedBooks = books.filter((book, id) => (id !== index ? book : null));
      return updatedBooks;
    }
    default:
      return state;
  }
};

// Action creators
export const addBook = (payload) => ({
  type: ADD,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE,
  payload,
});

export default booksReducer;
