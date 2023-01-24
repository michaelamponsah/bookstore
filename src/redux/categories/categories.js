// Actions
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const categoriesReducer = (state = '', action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

// Action creators
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default categoriesReducer;
