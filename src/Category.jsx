import { useState } from "react";
import styles from "./category.module.css";

function App() {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState("shop");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Все");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
  const [sort, setSort] = useState("Без сортировки");

  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((i) => i.id === product.id);

    if (existing) {
      setCart(
        cart.map((i) =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  const changeQuantity = (id, amount) => {
    setCart(
      cart
        .map((i) =>
          i.id === id
            ? { ...i, quantity: i.quantity + amount }
            : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const purchased = cart.map((i) => ({
      ...i,
      purchaseId: Date.now() + i.id,
      purchaseDate: new Date().toLocaleDateString(),
    }));

    setHistory([...history, ...purchased]);
    setCart([]);
    setActiveTab("history");
  };

  const totalPrice = cart.reduce(
    (s, i) => s + i.price * i.quantity,
    0
  );

  const totalItems = cart.reduce(
    (s, i) => s + i.quantity,
    0
  );
  
  const products = [
    {
      id: 1,
      name: "Nike Air Force 1",
      price: 115,
      category: "Повседневные",
      description: "Классическая модель на каждый день",
      image:
        "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/d/ad22b92Nike-CW2288-111_1.jpg",
    },
    {
      id: 2,
      name: "Nike Air Jordan 1",
      price: 140,
      category: "Баскетбол",
      description: "Легендарные баскетбольные кроссовки",
      image:
        "https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/89c121fc-3d07-4de0-aef6-bcc9c2764a2c/air-jordan-1.jpg",
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
      description: "Амортизация и стиль",
      image:
        "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw2120e7bd/nk/b21/2/e/5/b/f/b212e5bf_ec2f_4b0d_b759_37e893003043.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
    },
    {
      id: 5,
      name: "Nike Dunk Low",
      price: 125,
      category: "Streetwear",
      description: "Популярная городская модель",
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

let filteredProducts = products.filter((item) => {
  const matchSearch = item.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchCategory =
    category === "Все" || item.category === category;

const matchPrice =
  item.price >= minPrice &&
  item.price <= maxPrice;

  return matchSearch && matchCategory && matchPrice;
});

if (sort === "По названию") {
  filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
}

if (sort === "По цене") {
  filteredProducts.sort((a, b) => a.price - b.price);
}

  return (
    <div className="container">
      <h1>👟 Nike Store</h1>

      <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    padding: "20px",
    margin: "25px auto",
    background: "#fff",
    borderRadius: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,.08)",
    maxWidth: "1200px",
  }}
>
<input
  type="text"
  placeholder="🔍 Поиск кроссовок..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    width: "260px",
    height: "45px",
    borderRadius: "12px",
    border: "2px solid #ddd",
    padding: "0 15px",
    fontSize: "15px",
    outline: "none",
    background: "#fafafa",
  }}
/>
<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  style={{
    height: "45px",
    borderRadius: "12px",
    border: "2px solid #ddd",
    padding: "0 15px",
    background: "#fafafa",
    cursor: "pointer",
    fontSize: "15px",
  }}
>
    <option value="Все">Все</option>
    <option value="Повседневные">Повседневные</option>
    <option value="Бег">Бег</option>
    <option value="Streetwear">Streetwear</option>
    <option value="Баскетбол">Баскетбол</option>
    <option value="Тренировки">Тренировки</option>
    <option value="Спорт">Спорт</option>
  </select>

  <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }}
>
  <input
    type="number"
    placeholder="От"
    value={minPrice}
    onChange={(e) => setMinPrice(Number(e.target.value) || 0)}
  />

  <span>-</span>

<input
  type="number"
  placeholder="До"
  value={maxPrice}
  onChange={(e) => setMaxPrice(Number(e.target.value) || 250)}
  style={{
    width: "90px",
    height: "45px",
    borderRadius: "12px",
    border: "2px solid #ddd",
    textAlign: "center",
    fontSize: "15px",
    background: "#fafafa",
  }}
/> </div>

 <select
  value={sort}
  onChange={(e) => setSort(e.target.value)}
  style={{
    height: "45px",
    borderRadius: "12px",
    border: "2px solid #ddd",
    padding: "0 15px",
    background: "#fafafa",
    cursor: "pointer",
    fontSize: "15px",
  }}
>
    <option value="Без сортировки">Без сортировки</option>
    <option value="По названию">По названию</option>
    <option value="По цене">По цене</option>
  </select>
</div>



      <div className="nav">
        <button onClick={() => setActiveTab("shop")}>
          магазин
        </button>

        <button onClick={() => setActiveTab("cart")}>
          Корзина ({totalItems})
        </button>

        <button onClick={() => setActiveTab("history")}>
          История ({history.length})
        </button>
      </div>

      {activeTab === "shop" && !selected && (

        <div className="grid">
        {filteredProducts.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <p>{item.description}</p>

              <div className="price">${item.price}</div>

              <div className="actions">
                <button onClick={() => setSelected(item)}>
                  Открыть
                </button>

                <button onClick={() => addToCart(item)}>
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      

{selected && (
  <div 
    className="modalOverlay"
    style={{
      position:"fixed",
      top:0,
      left:0,
      width:"100vw",
      height:"100vh",
      background:"rgba(0,0,0,.6)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      zIndex:9999
    }}
    onClick={() => setSelected(null)}
  >
    <div 
      className="modal" 
      onClick={(e)=>e.stopPropagation()}
    >

      <img 
  src={selected.image}
  alt={selected.name}
  style={{
    width:"180px",
    height:"150px",
    objectFit:"contain"
  }}
/>

      <h2>{selected.name}</h2>

      <p>{selected.category}</p>

      <p>{selected.description}</p>

      <h3>${selected.price}</h3>

      <button onClick={() => addToCart(selected)}>
        В корзину
      </button>

      <button onClick={() => setSelected(null)}>
        Закрыть
      </button>

    </div>
  </div>
)}

     {selected && activeTab === "shop" && (
  <div
    className="modalOverlay"
    onClick={() => setSelected(null)}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    }}
  >
    <div
      className="modal"
      onClick={(e) => e.stopPropagation()}
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "12px",
        width: "380px",
        textAlign: "center",
      }}
    >
      <img
        src={selected.image}
        alt={selected.name}
        style={{
          width: "220px",
          height: "180px",
          objectFit: "contain",
        }}
      />

      <h2>{selected.name}</h2>

      <p>{selected.category}</p>

      <p>{selected.description}</p>

      <h3>${selected.price}</h3>

      <button onClick={() => addToCart(selected)}>
        В корзину
      </button>

      <button
        onClick={() => setSelected(null)}
        style={{ marginLeft: "10px" }}
      >
        Закрыть
      </button>
    </div>
  </div>
)}


   
      {activeTab === "cart" && (
        <div>
          <h2>Корзина</h2>

          {cart.length === 0 ? (
            <p>Корзина пустая</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>

                  <p>
                    Итого: ${item.price * item.quantity}
                  </p>

                  <div>
                    <button
                      onClick={() =>
                        changeQuantity(item.id, -1)
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        changeQuantity(item.id, 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button onClick={() => removeItem(item.id)}>
                    Удалить
                  </button>
                </div>
              ))}

              <h3>Общая сумма: ${totalPrice}</h3>

              <button onClick={handleCheckout}>
                Оформить заказ
              </button>
            </>
          )}
        </div>
      )}

     
      {activeTab === "history" && (
        <div>
          <h2>История покупок</h2>

          {history.length === 0 ? (
            <p>Покупок пока нет</p>
          ) : (
            history.map((item) => (
              <div key={item.purchaseId} className="cart-item">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>Количество: {item.quantity}</p>
                <p>Дата: {item.purchaseDate}</p>

                <b>
                  Итого: ${item.price * item.quantity}
                </b>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;