import "./App.css";
import { useState } from "react";

function App() {
  const products = [
    {
      id: 1,
      name: "Nike Air Force 1",
      price: 115,
      category: "Повседневные",
      description: "Классика на каждый день",
    },
    {
      id: 2,
      name: "Nike Air Jordan 1",
      price: 140,
      category: "Баскетбол",
      description: "Легендарные баскетбольные",
    },
    {
      id: 3,
      name: "Nike Air Max 90",
      price: 130,
      category: "Бег",
      description: "Комфорт и стиль",
    },
    {
      id: 4,
      name: "Nike Dunk Low",
      price: 125,
      category: "Streetwear",
      description: "Streetwear стиль",
    },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Все");
  const [maxPrice, setMaxPrice] = useState(200);
  const [sort, setSort] = useState("");

  let filtered = products.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "Все" || item.category === category) &&
      item.price <= maxPrice
    );
  });

  if (sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  }

  return (
    <>
      <header className="header">
        <div className="logo">NIKE SHOP</div>

        <nav className="nav">
          <a href="#">Главная</a>
          <a href="#">Каталог</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Найди свою идеальную пару 👟</h1>
        <p>Лучшие кроссовки Nike по доступным ценам</p>
      </section>

      <section className="filters">
        <input
          type="text"
          placeholder="Поиск по названию..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Все</option>
          <option>Повседневные</option>
          <option>Баскетбол</option>
          <option>Бег</option>
          <option>Streetwear</option>
        </select>

        <input
          type="range"
          min="100"
          max="150"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <span>До {maxPrice}$</span>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Без сортировки</option>
          <option value="name">По названию</option>
          <option value="price">По цене</option>
        </select>
      </section>

      <section className="products">
        <h2>Популярные модели</h2>

        <div className="grid">
          {filtered.map((item) => (
            <div className="card" key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.category}</p>
              <span>{item.price}$</span>
            </div>
          ))}
        </div>

        {filtered.length === 0 && <h3>Товаров не найдено</h3>}
      </section>

      <footer className="footer">
        <p>© 2026 Nike Shop. Все права защищены.</p>
      </footer>
    </>
  );
}

export default App;