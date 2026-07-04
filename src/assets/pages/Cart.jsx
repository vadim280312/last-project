<div className="cart-container">

{cart.map((item) => (
  <div className="cart-card" key={item.id}>

    <img 
      src={item.image}
      alt={item.name}
    />

    <div className="cart-info">

      <h3>{item.name}</h3>

      <p>Цена: {item.price} ₽</p>

      <div>
        <button onClick={() => changeQuantity(item.id, 1)}>
          +
        </button>

        <span className="quantity">
          {item.quantity}
        </span>

        <button onClick={() => changeQuantity(item.id, -1)}>
          -
        </button>
      </div>

      <p>
        <b>
          {item.price * item.quantity} ₽
        </b>
      </p>

      <button onClick={() => removeItem(item.id)}>
        Удалить
      </button>

    </div>

  </div>
))}

</div>