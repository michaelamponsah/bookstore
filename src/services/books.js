const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appId = 'SMC3oLEqFVUlDrUacFF3';
const bookResourceURL = `${baseURL}/${appId}/books`;

const createNewBook = async (payload) => fetch(`${bookResourceURL}`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(payload),
});

const deleteSingleBook = (payload) => (fetch(`${bookResourceURL}/${payload.item_id}`, {
  method: 'DELETE',
}));

const getAllBooks = () => (fetch(bookResourceURL));

const bookService = {
  createNewBook,
  deleteSingleBook,
  getAllBooks,
};

export default bookService;
