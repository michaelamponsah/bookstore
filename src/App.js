import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import BooksPage from './pages/books/BooksPage';
import CategoriesPage from './pages/categories/CategoriesPage';

const BookData = [
  {
    id: '1',
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: '2',
    genre: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BooksPage bookData={BookData} />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
