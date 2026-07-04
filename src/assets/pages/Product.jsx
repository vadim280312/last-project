import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Products() {

  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "Nike Air Force 1",
      price: 8000
    },
    {
      id: 2,
      name: "Nike Air Jordan 1",
      price: 15000
    }
  ];

  return (
    <div>
      <h2>Товары</h2>

      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price} ₽</p>

          <button onClick={() => addToCart(item)}>
            Добавить в корзину
          </button>
        </div>
      ))}

    </div>
  );
}