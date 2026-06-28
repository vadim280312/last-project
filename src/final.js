<div className="cart-card" key={item.id}>

  <img
    src="https://via.placeholder.com/120"
    alt={item.name}
  />

  <div>
   <img 
  src="https://via.placeholder.com/150"
  alt={item.name}
   />
    <p>Цена: {item.price} ₽</p>
    <p>Количество: {item.quantity}</p>

    <button onClick={() => changeQuantity(item.id, 1)}>
      +
    </button>

    <button 
      onClick={() => changeQuantity(item.id, -1)}
      className="btn-space"
    >
      -
    </button>

    <button
      onClick={() => removeItem(item.id)}
      className="btn-space"
    >
      Удалить
    </button>

    <p>
      <strong>
        Сумма: {item.price * item.quantity} ₽
      </strong>
    </p>
  </div>

</div>