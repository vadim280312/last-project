import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./adress.css";

  export default function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    alert("Сообщение успешно отправлено!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contacts-page">
      <h1>Контакты</h1>
      <p>Мы всегда готовы ответить на ваши вопросы.</p>

      <div className="block">
        <h2>Наши контакты</h2>
        <p><strong>Адрес:</strong> г. Бишкек, проспект Чуй, 150</p>
        <p><strong>Телефон:</strong> +996 (555) 123-456</p>
        <p><strong>Email:</strong> support@nike-store.kg</p>
      </div>

      <div className="block">
        <h2>Форма обратной связи</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Ваш Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Тема обращения"
            value={form.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Ваше сообщение"
            rows="5"
            value={form.message}
            onChange={handleChange}
          />

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
        <h3>
          В «Дордой Плаза» заходите через главный вход, поднимаетесь на 2 этаж и идёте в сторону магазинов одежды и спортивных брендов.
        </h3>

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