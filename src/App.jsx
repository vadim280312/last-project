import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Address from "./adress.jsx";
import Review from "./review.jsx";
import Category from "./Category.jsx";
import FAQ from "./FAQ.jsx";


function Home() {
  return (
    <>
      <section className="hero">
        <h1>Найди свою идеальную пару 👟</h1>
        <p>Оригинальные кроссовки Nike по выгодным ценам</p>

        <Link to="/category">
          <button>
            Смотреть полный каталог
          </button>
        </Link>
      </section>


      <section className="products">

        <h2>
          Популярные модели
        </h2>


        <div className="grid">

          <div className="card">

            <img
              src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/d/ad22b92Nike-CW2288-111_1.jpg"
              alt="Nike Air Force 1"
            />

            <h3>
              Nike Air Force 1
            </h3>

            <p>
              Классика на каждый день
            </p>

            <span>
              115$
            </span>

          </div>



          <div className="card">

            <img
              src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/89c121fc-3d07-4de0-aef6-bcc9c2764a2c/air-jordan-1.jpg"
              alt="Nike Air Jordan 1"
            />

            <h3>
              Nike Air Jordan 1
            </h3>

            <p>
              Легендарные баскетбольные
            </p>

            <span>
              140$
            </span>

          </div>



          <div className="card">

            <img
              src="https://static.wixstatic.com/media/e13a0d_39df3853bd4f4d1e85d59218629ca750~mv2.webp"
              alt="Nike Air Max 90"
            />

            <h3>
              Nike Air Max 90
            </h3>

            <p>
              Комфорт и стиль
            </p>

            <span>
              130$
            </span>

          </div>



          <div className="card">

            <img
              src="https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw2120e7bd/nk/b21/2/e/5/b/f/b212e5bf_ec2f_4b0d_b759_37e893003043.jpg"
              alt="Nike Dunk Low"
            />

            <h3>
              Nike Dunk Low
            </h3>

            <p>
              Streetwear стиль
            </p>

            <span>
              125$
            </span>

          </div>


        </div>

      </section>



      <section className="advantages">

        <h2>
          Почему выбирают нас?
        </h2>


        <div className="grid">


          <div className="card">

            <h3>
              🚚 Быстрая доставка
            </h3>

            <p>
              Доставка по всей стране за 1–3 дня
            </p>

          </div>



          <div className="card">

            <h3>
              ✅ Оригинальная продукция
            </h3>

            <p>
              Только сертифицированные товары Nike
            </p>

          </div>



          <div className="card">

            <h3>
              💳 Удобная оплата
            </h3>

            <p>
              Оплата картой или наличными
            </p>

          </div>



          <div className="card">

            <h3>
              ⭐ Высокий рейтинг
            </h3>

            <p>
              Нас рекомендуют тысячи покупателей
            </p>

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

          <Link to="/">
            Главная
          </Link>

          <Link to="/address">
            Адрес
          </Link>

          <Link to="/review">
            Отзывы
          </Link>

          <Link to="/faq">
            FAQ
          </Link>

        </nav>


      </header>



      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/category"
          element={<Category />}
        />

        <Route
          path="/address"
          element={<Address />}
        />

        <Route
          path="/review"
          element={<Review />}
        />

        <Route
          path="/faq"
          element={<FAQ />}
        />

      </Routes>



      <footer className="footer">

        <p>
          © 2026 Nike Shop. Все права защищены.
        </p>

      </footer>


    </>
  );
}


export default App;