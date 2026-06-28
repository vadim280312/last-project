import React, { useState } from "react";
import "./App.css";

const NIKE_PRODUCTS = [
  { id: 1, name: "Nike Air Force 1 '07", price: 115 },
  { id: 2, name: "Nike Air Jordan 1 High", price: 180 },
  { id: 3, name: "Nike Dunk Low", price: 115 },
  { id: 4, name: "Nike Air Max 270", price: 160 },
  { id: 5, name: "Nike Air Max Plus", price: 185 },
  { id: 6, name: "Nike Blazer Mid '77", price: 105 },
  { id: 7, name: "Nike Revolution 7", price: 70 },
  { id: 8, name: "Nike Air Max 95", price: 185 },
  { id: 9, name: "Nike Air Max 97", price: 185 },
  { id: 10, name: "Nike Cortez", price: 90 },
  { id: 11, name: "Nike P-6000", price: 110 },
  { id: 12, name: "Nike Pegasus 41", price: 140 },
  { id: 13, name: "Nike ZoomX Vaporfly 3", price: 260 },
  { id: 14, name: "Nike Vomero 17", price: 160 },
  { id: 15, name: "Nike Metcon 9", price: 150 },
];

export default function Cart() {
  const [activeTab, setActiveTab] = useState("shop");
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const changeQuantity = (id, amount) => {
    setCart(
      cart
        .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
        .filter((item) => item.quantity > 0)
    );
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const purchasedItems = cart.map((item) => ({
      ...item,
      purchaseId: `${item.id}-${Date.now()}`,
      purchaseDate: new Date().toLocaleDateString(),
    }));
    setHistory([...history, ...purchasedItems]);
    setCart([]); 
    setActiveTab("history");
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-container">
      
      
      <nav className="nav-tabs">
        <button onClick={() => setActiveTab("shop")} className={`nav-btn ${activeTab === "shop" ? "active" : ""}`}>
          👟 Магазин
        </button>
        <button onClick={() => setActiveTab("cart")} className={`nav-btn ${activeTab === "cart" ? "active" : ""}`}>
          🛒 Корзина ({totalCartItems})
        </button>
        <button onClick={() => setActiveTab("history")} className={`nav-btn ${activeTab === "history" ? "active" : ""}`}>
          📜 История ({history.length})
        </button>
      </nav>

     
      {activeTab === "shop" && (
        <div>
          <h2>Витрина кроссовок Nike</h2>
          <div className="cart-container">
            {NIKE_PRODUCTS.map((product) => (
              <div className="cart-card" key={product.id}>
                <div>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </div>
                <button onClick={() => addToCart(product)} className="btn-action">
                  В корзину
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      
      {activeTab === "cart" && (
        <div>
          <h2>Ваша корзина</h2>
          {cart.length === 0 ? (
            <p className="empty-text">В корзине пусто. Загляните в магазин! 🎧</p>
          ) : (
            <div>
              <div className="cart-container">
                {cart.map((item) => (
                  <div className="cart-card" key={item.id}>
                    <div>
                      <h3>{item.name}</h3>
                      <p>Цена: ${item.price}</p>
                      <p>Всего за пару: <strong>${item.price * item.quantity}</strong></p>
                    </div>
                    
                    <div>
                      <div className="quantity-controls">
                        <button onClick={() => changeQuantity(item.id, -1)} className="btn-qty">-</button>
                        <span>{item.quantity} шт.</span>
                        <button onClick={() => changeQuantity(item.id, 1)} className="btn-qty">+</button>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="btn-remove">Удалить</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="price-total">Итого к оплате: ${totalPrice}</div>
              <button className="btn-action" onClick={handleCheckout} style={{ maxWidth: "300px" }}>
                Оформить заказ
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === "history" && (
        <div>
          <h2>История ваших покупок</h2>
          {history.length === 0 ? (
            <p className="empty-text">Вы еще ничего не приобрели.</p>
          ) : (
            <div className="cart-container">
              {history.map((item) => (
                <div className="cart-card history-card" key={item.purchaseId}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>Цена: ${item.price}</p>
                    <p>Количество: {item.quantity} шт.</p>
                    <p>Дата: {item.purchaseDate}</p>
                  </div>
                  <p style={{ margin: "15px 0 0 0" }}>
                    Итого: <strong style={{ color: "#34c759", fontSize: "16px" }}>${item.price * item.quantity}</strong>
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
}