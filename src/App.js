import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import BooksPage from './pages/books/BooksPage';
import CategoriesPage from './pages/categories/CategoriesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
