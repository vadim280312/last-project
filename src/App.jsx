import './App.css'


function App() {
  return (
    <>
      
      <header className="header">
        <div className="logo">NIKE SHOP</div>

        <nav className="nav">
          <a href='/adress.jsx'>адрес</a>
          <a href="/review.html">Отзывы</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Найди свою идеальную пару 👟</h1>
        <p>Лучшие кроссовки Nike по доступным ценам</p>
        <button>Смотреть каталог</button>
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


      <footer className="footer">
        <p>© 2026 Nike Shop. Все права защищены.</p>
      </footer>
    </>
  )
}

export default App