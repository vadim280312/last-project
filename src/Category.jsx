import { useEffect, useState } from "react";
import "./category.css";

const CART_STORAGE_KEY = "nike-cart";

function getStoredCart() {
  if (typeof localStorage === "undefined") return [];

  const savedCart = localStorage.getItem(CART_STORAGE_KEY);
  return savedCart ? JSON.parse(savedCart) : [];
}

function saveCart(cartItems) {
  if (typeof localStorage === "undefined") return;

  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
}

function Category() {
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState(() => getStoredCart());

  useEffect(() => {
    saveCart(cartItems);
  }, [cartItems]);

  const products = [
    {
      id: 1,
      name: "Nike Air Force 1",
      price: 115,
      category: "Повседневные",
      description: "Классическая модель на каждый день",
      image:
        "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/d/ad22b92Nike-CW2288-111_1.jpg?rnd=20200526195200&tr=w-1536",
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
    ,
{
id:9,
name:"Nike Air Max 270",
price:170,
category:"Повседневные",
description:"Большая воздушная подушка в пятке",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90WTVHLmBsVfxb2AXHfnXG1iHP_wkBqLr4rWjnj3oJA&s"
},

{
id:10,
name:"Nike Air Max Plus",
price:175,
category:"Повседневные",
description:"Узнаваемый дизайн и комфорт",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-iKi3PbY1AMe5nb8o3sdRSaeKGogTcqY2msqxFOasJmDqUAOvXx4VhcQ&s=10"
},

{
id:11,
name:"Nike Blazer Mid '77",
price:120,
category:"Streetwear",
description:"Винтажный стиль",
image:"https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw0a169fd3/nk/a75/1/4/9/5/d/a751495d_1cb9_4976_ab4f_9a2189464e8f.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
},

{
id:12,
name:"Nike Revolution",
price:90,
category:"Бег",
description:"Для бега и повседневной носки",
image:"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/97f3c140-c5a8-4658-80d7-03f09de5dd68/W+NIKE+REVOLUTION+8.png"
},

{
id:13,
name:"Nike Air Max 95",
price:165,
category:"Повседневные",
description:"Классическая модель Air Max",
image:"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/113a91a1-975a-4cf8-b232-8a7283a03bd2/AIR+MAX+95+BB+S+%28GS%29.png"
},

{
id:14,
name:"Nike Cortez",
price:110,
category:"Повседневные",
description:"Легендарная классика Nike",
image:"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0c2ecdfd-df75-4d38-b6de-76a3bfa117e4/NIKE+CORTEZ.png"
},

{
id:15,
name:"Nike P-6000",
price:145,
category:"Streetwear",
description:"Ретро беговой стиль",
image:"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fb1addb3-4a0e-42b3-ba15-70ba134f2bd3/NIKE+P-6000.png"
},

{
id:16,
name:"Nike React Infinity Run",
price:180,
category:"Бег",
description:"Мягкая амортизация",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0IhK7LmbauxoR2mYIzW0CKoxfMxZ_bSvk8h5hnCzi2p6yAyPyrLznz4&s=10"
},

{
id:17,
name:"Nike ZoomX Vaporfly",
price:250,
category:"Бег",
description:"Максимальная скорость",
image:"https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/3b4dedd5-fa80-4253-8cb1-4041c81e26dd/nike-zoomx-vaporfly-next-4-and-nike-zoomx-streakfly-2-a-look-at-the-innovation-behind-the-brand-s-latest-racing-shoes.jpg"
},

{
id:18,
name:"Nike Metcon 10",
price:150,
category:"Тренировки",
description:"Для зала и спорта",
image:"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5709c27f-742f-4236-93c5-fd398cde51f9/M+NIKE+METCON+10.png"
},

{
id:19,
name:"Nike Free Run",
price:125,
category:"Бег",
description:"Лёгкие и гибкие",
image:"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3b27eb2b-da90-4a12-bb43-a093ca26b4a3/NIKE+FREE+RN+5.0+NEXT+NATURE.png"
},

{
id:20,
name:"Nike Zoom Fly",
price:210,
category:"Бег",
description:"Для быстрых тренировок",
image:"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1fd217ed-772d-4491-a54e-63026e6abcc9/ZOOM+FLY+6.png"
},

{
id:21,
name:"Nike Structure 25",
price:155,
category:"Бег",
description:"Стабильность и поддержка",
image:"https://prod.aaw.com/media/catalog/product/D/J/DJ7883-006-a_6.jpg"
},

{
id:22,
name:"Nike Invincible 3",
price:190,
category:"Бег",
description:"Максимальная мягкость",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG9O-UVGcDlXAEoCXA3FwDOOEdrU0kDlkfQgwyQ5HLudJYZyZ1ndtIi1XH&s=10"
},

{
id:23,
name:"Nike Downshifter",
price:95,
category:"Бег",
description:"Универсальная модель",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCW2KBFGxFSshsHiqJTbays2AQZidSCRlU_CkDGVE1kw&s=10"
},

{
id:24,
name:"Nike Air Huarache",
price:150,
category:"Streetwear",
description:"Необычный силуэт",
image:"https://cdn-images.farfetch-contents.com/14/56/89/88/14568988_22341416_600.jpg"
},

{
id:25,
name:"Nike Zoom Rival",
price:130,
category:"Спорт",
description:"Лёгкая спортивная модель",
image:"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/da997fad-c4c2-4ec8-b597-9d32e4c7e75a/ZOOM+RIVAL+SPRINT.png"
}
,
{
id:26,
name:"Nike Zoom Freak 5",
price:180,
category:"Баскетбол",
description:"Скорость и контроль",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlKa4RrvAGOCWq3iXB2NdI9MNZ94PUOLp7WWuLRDqieGvO4sokB5Mq_h9&s=10"
},

{
id:27,
name:"Nike LeBron 22",
price:220,
category:"Баскетбол",
description:"Мощная амортизация",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfXyMyV971AN3s6tkckOt2mgiSjftL1AqWbcY2DOhlWDs1q8ba_Yi8uAm&s=10"
},

{
id:28,
name:"Nike KD 17",
price:190,
category:"Баскетбол",
description:"Лёгкость и устойчивость",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmDEGVSTCAmVFhyZIZ_EcXBloFjBKwzmFDP2KXi84Xxn6G3mXm4JA8z8&s=10"
},

{
id:29,
name:"Nike Giannis Immortality-4",
price:135,
category:"Баскетбол",
description:"Комфорт и поддержка",
image:"https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0212082_nike-giannis-immortality-4-fq3680-004.jpeg"
},

{
id:30,
name:"Nike Bella-7",
price:140,
category:"Тренировки",
description:"Для фитнеса и тренировок",
image:"https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f4d65a27-b6a0-4fce-8537-c2f2fbb5bd3e/W+NIKE+AIR+ZOOM+BELLA+7.png"
}
  ];

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };
  
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const clearCart = () => setCartItems([]);
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((it) => it.id !== id));
  };
  const handleBuy = () => {
    if (cartItems.length === 0) {
      window.alert("Корзина пуста");
      return;
    }
    const ok = window.confirm(
      "Вы уверены, что хотите совершить покупку? Корзина будет очищена."
    );
    if (ok) {
      clearCart();
      window.alert("Покупка совершена. Спасибо!");
    }
  };

  const filteredProducts = products.filter((item) => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return true;

    return (
      item.name.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term)
    );
  });

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
              className="buy"
              onClick={() => addToCart(selected)}
            >
              В корзину
            </button>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="container">

      <h1>👟 Nike Store</h1>

      <div className="top-row">
        <div className="search-row">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Поиск по названию, категории или описанию"
          />
          {searchTerm && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearchTerm("")}
            >
              Очистить
            </button>
          )}
        </div>

        <div className="cart-bin">
          <div className="cart-header">
            <span>Корзина</span>
            <span className="cart-badge">{cartCount}</span>
          </div>
          {cartItems.length === 0 ? (
            <p className="cart-empty">Корзина пуста</p>
          ) : (
            <>
              <ul className="cart-list">
                {cartItems.map((item) => (
                  <li key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <strong>{item.name}</strong>
                      <div className="cart-item-category">{item.category}</div>
                    </div>
                    <div className="cart-item-actions">
                      <span>x{item.quantity}</span>
                      <span>${(item.price * item.quantity)}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-summary">
                <span>Итого</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
                <button
                  type="button"
                  className="cart-buy"
                  onClick={handleBuy}
                >
                  Купить
                </button>
                <button
                  type="button"
                  className="cart-clear"
                  onClick={clearCart}
                >
                  Очистить корзину
                </button>
            </>
          )}
        </div>
      </div>

      <div className="grid">

        {filteredProducts.map((item) => (
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
                onClick={() => addToCart(item)}
              >
                В корзину
              </button>

            </div>

          </div>
        ))}

      </div>

      <p className="results-amount">
        Найдено товаров: {filteredProducts.length}
      </p>

      {filteredProducts.length === 0 && (
        <p className="no-results">Ничего не найдено по запросу.</p>
      )}

    </div>
  );
}

export default Category;