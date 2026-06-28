import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Address from './adress.jsx'; 
import Review from './review.jsx';  
import Category from './category.jsx';

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Найди свою идеальную пару 👟</h1>
        <p>Лучшие кроссовки Nike по доступным ценам</p>

        <Link to="/category">
          <button>Смотреть каталог</button>
        </Link>
      </section>

      <section className="products">
        <h2>Популярные модели</h2>

        <div className="grid">
          <div className="card">
            <h3>Nike Air Force 1</h3>
            <p>Классика на каждый день</p>
            <span>115$</span>
          </div>

          <div className="card">
            <h3>Nike Air Jordan 1</h3>
            <p>Легендарные баскетбольные</p>
            <span>140$</span>
          </div>

          <div className="card">
            <h3>Nike Air Max 90</h3>
            <p>Комфорт и стиль</p>
            <span>130$</span>
          </div>

          <div className="card">
            <h3>Nike Dunk Low</h3>
            <p>Streetwear стиль</p>
            <span>125$</span>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            NIKE SHOP
          </Link>
        </div>

        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/address">Адрес</Link>
          <Link to="/review">Отзывы</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/address" element={<Address />} />
        <Route path="/review" element={<Review />} />
      </Routes>

      <footer className="footer">
        <p>© 2026 Nike Shop. Все права защищены.</p>
      </footer>
    </>
  );
}

export default App;