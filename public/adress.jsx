import React from "react";

export default function Contacts() {
  return (
    <div className="contacts">
      <h1>Контакты</h1>
      <p>Мы всегда готовы ответить на ваши вопросы.</p>

      <div className="contact-info">
        <h2>Наши контакты</h2>
        <p><strong> Адрес:</strong> г. Бишкек, проспект Чуй, 150</p>
        <p><strong> Телефон:</strong> +996 (555) 123-456</p>
        <p><strong> Email:</strong> support@nike-store.kg</p>
        <p><strong> Время работы:</strong></p>
        <ul>
          <li>Понедельник – Пятница: 10:00 – 20:00</li>
          <li>Суббота: 10:00 – 19:00</li>
          <li>Воскресенье: 11:00 – 18:00</li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>Форма обратной связи</h2>

        <form>
          <input
            type="text"
            placeholder="Ваше имя"
            required
          />

          <input
            type="email"
            placeholder="Ваш Email"
            required
          />

          <input
            type="text"
            placeholder="Тема обращения"
            required
          />

          <textarea
            placeholder="Ваше сообщение"
            rows="5"
            required
          ></textarea>

          <button type="submit">Отправить</button>
        </form>
      </div>

      <div className="socials">
        <h2>Мы в социальных сетях</h2>
        <p>Instagram: @nike_store_kg</p>
        <p>Facebook: Nike Store KG</p>
        <p>Telegram: @nikestorekg</p>
      </div>

      <div className="map">
        <h2>Как нас найти</h2>
        <iframe
          title="Карта"
          src="https://maps.app.goo.gl/raGUuCe5xAxgFdkT6"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}