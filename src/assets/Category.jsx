import { useState } from "react";
import "./App.css";

function App() {
  const [selected, setSelected] = useState(null);

  const products = [
    {
      id: 1,
      name: "Nike Air Force 1",
      price: 115,
      category: "Повседневные",
      description: "Классическая модель на каждый день",
      image:
        "https://t4.ftcdn.net/jpg/04/79/11/23/360_F_479112366_dku6Ufwd9OVnRB3AZxonMgRzuZYeTTYY.jpg",
    },

    {
      id: 2,
      name: "Nike Air Jordan 1",
      price: 140,
      category: "Баскетбол",
      description: "Легендарные баскетбольные кроссовки",
      image:
        "https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/89c121fc-3d07-4de0-aef6-bcc9c2764a2c/air-jordan-1-2022-lost-and-found-chicago-the-inspiration-behind-the-design.jpg",
    },

    {
      id: 3,
      name: "Nike Air Max 90",
      price: 130,
      category: "Бег",
      description: "Комфорт и узнаваемый дизайн",
      image:
        "https://static.wixstatic.com/media/e13a0d_39df3853bd4f4d1e85d59218629ca750~mv2.webp",
    },

    {
      id: 4,
      name: "Nike Air Max 97",
      price: 160,
      category: "Бег",
      description: "Амортизация и современный стиль",
      image:
        "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw2120e7bd/nk/b21/2/e/5/b/f/b212e5bf_ec2f_4b0d_b759_37e893003043.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
    },

    {
      id: 5,
      name: "Nike Dunk Low",
      price: 125,
      category: "Streetwear",
      description: "Популярная модель для города",
      image:
        "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/af53d53d-561f-450a-a483-70a7ceee380f/W+NIKE+DUNK+LOW.png",
    },

    {
      id: 6,
      name: "Nike Pegasus 41",
      price: 145,
      category: "Бег",
      description: "Для ежедневных тренировок",
      image:
        "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwf3c0ec92/nk/f61/0/5/3/1/8/f6105318_3c83_4836_ab5b_96f2cd95de00.jpg",
    },

    {
      id: 7,
      name: "Nike Vomero 18",
      price: 170,
      category: "Бег",
      description: "Максимальный комфорт",
      image:
        "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/12e55b3f-8263-4bbd-9e8d-00b3ef25ebbb/NIKE+VOMERO+18+GTX.png",
    },

    {
      id: 8,
      name: "Nike Metcon 9",
      price: 150,
      category: "Тренировки",
      description: "Для зала и спорта",
      image:
        "https://static.wixstatic.com/media/e13a0d_2b0353846e9247809ecab5139e4cb8eb~mv2.webp",
    },
  ];

  const buyProduct = (product) => {
    alert(`Покупка: ${product.name}`);
  };

  if (selected) {
    return (
      <div className="product">

        <button
          className="back"
          onClick={() => setSelected(null)}
        >
          ← Назад
        </button>

        <div className="card opened">

          <img
            src={selected.image}
            alt={selected.name}
          />

          <h3>
            {selected.name}
          </h3>

          <div className="price">
            ${selected.price}
          </div>

          <p>
            {selected.category}
          </p>

          <p>
            {selected.description}
          </p>

          <div className="actions">

            <button
              className="open"
              onClick={() =>
                setSelected(null)
              }
            >
              Закрыть
            </button>

            <button
              className="buy"
              onClick={() =>
                buyProduct(selected)
              }
            >
              Купить
            </button>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="container">

      <h1>👟 Nike Store</h1>

      <div className="grid">

        {products.map((item) => (
          <div
            key={item.id}
            className="card"
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <h3>
              {item.name}
            </h3>

            <div className="price">
              ${item.price}
            </div>

            <p>
              {item.category}
            </p>

            <p>
              {item.description}
            </p>

            <div className="actions">

              <button
                className="open"
                onClick={() =>
                  setSelected(item)
                }
              >
                Открыть
              </button>

              <button
                className="buy"
                onClick={() =>
                  buyProduct(item)
                }
              >
                Купить
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;