import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Address from './adress.jsx';
import Review from './review.jsx';
import Category from './Category.jsx';
import FAQ from './FAQ.jsx';

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Найди свою идеальную пару 👟</h1>
        <p>Оригинальные кроссовки Nike по выгодным ценам</p>

        <Link to="/category">
          <button>Смотреть полный каталог</button>
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

      <section className="advantages">
        <h2>Почему выбирают нас?</h2>

        <div className="grid">
          <div className="card">
            <h3>🚚 Быстрая доставка</h3>
            <p>Доставка по всей стране за 1–3 дня</p>
          </div>

          <div className="card">
            <h3>✅ Оригинальная продукция</h3>
            <p>Только сертифицированные товары Nike</p>
          </div>

          <div className="card">
            <h3>💳 Удобная оплата</h3>
            <p>Оплата картой или наличными при получении</p>
          </div>

          <div className="card">
            <h3>⭐ Высокий рейтинг</h3>
            <p>Нас рекомендуют тысячи покупателей</p>
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
          NIKE SHOP
        </div>

        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/address">Адрес</Link>
          <Link to="/review">Отзывы</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/address" element={<Address />} />
        <Route path="/review" element={<Review />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      <footer className="footer">
        <p>© 2026 Nike Shop. Все права защищены.</p>
      </footer>
    </>
  );
}

export default App;