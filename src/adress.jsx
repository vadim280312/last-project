import React from "react";
import { Link } from "react-router-dom";
import "./adress.css";

export default function Contacts() {
  return (
    <div className="contacts-page">


      <h1>Контакты</h1>
      <p>Мы всегда готовы ответить на ваши вопросы.</p>

      <div className="block">
        <h2>Наши контакты</h2>
        <p><strong>Адрес:</strong> г. Бишкек, проспект Чуй, 150</p>
        <p><strong>Телефон:</strong> +996 (555) 123-456</p>
        <p><strong>Email:</strong> support@nike-store.kg</p>

        <p><strong>Время работы:</strong></p>
        <ul>
          <li>Понедельник – Пятница: 10:00 – 20:00</li>
          <li>Суббота: 10:00 – 19:00</li>
          <li>Воскресенье: 11:00 – 18:00</li>
        </ul>
      </div>

      <div className="block">
        <h2>Форма обратной связи</h2>

        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Ваше имя" required />
          <input type="email" placeholder="Ваш Email" required />
          <input type="text" placeholder="Тема обращения" required />
          <textarea placeholder="Ваше сообщение" rows="5" required />
          <button type="submit">Отправить</button>
        </form>
      </div>

      <div className="block">
        <h2>Социальные сети</h2>
        <p>Instagram: @nike_store_kg</p>
        <p>Facebook: Nike Store KG</p>
        <p>Telegram: @nikestorekg</p>
      </div>

      <div className="block">
        <h2>Как нас найти?</h2>
        <h3>В «Дордой Плаза» заходите через главный вход, поднимаетесь на 2 этаж и идёте в сторону магазинов одежды и спортивных брендов. После чего увидите магазин nike</h3>
<iframe
  title="Nike Store Bishkek"  
  src="https://www.google.com/maps?q=Dordoi+Plaza+Bishkek&output=embed"
  width="100%"
  height="350"
  style={{ border: 0 }}
  loading="lazy"
/>
      </div>
    </div>
  );
}