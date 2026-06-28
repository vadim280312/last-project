import React, { useState } from "react";
import "./reviews.css";

export default function Reviews() {
  const [selectedReview, setSelectedReview] = useState(null);

  const reviews = [
    {
      name: "Алексей",
      stars: "⭐⭐⭐⭐⭐",
      text: "Очень доволен покупкой. Хорошее качество и быстрая доставка!"
    },
    {
      name: "Екатерина",
      stars: "⭐⭐⭐⭐",
      text: "Помогли подобрать размер, всё пришло быстро."
    },
    {
      name: "Марина",
      stars: "⭐⭐⭐⭐⭐",
      text: "Отличный магазин, хорошие цены и поддержка."
    },
    {
      name: "Дмитрий",
      stars: "⭐⭐⭐⭐",
      text: "Большой выбор, но доставка могла быть быстрее."
    },
    {
      name: "Иван",
      stars: "⭐⭐⭐⭐⭐",
      text: "Кроссовки оригинальные, сели идеально. Буду заказывать ещё!"
    },
    {
      name: "Ольга",
      stars: "⭐⭐⭐⭐⭐",
      text: "Супер удобный сайт, менеджер ответил на все вопросы по поводу стельки."
    },
    {
      name: "Сергей",
      stars: "⭐⭐⭐⭐",
      text: "Коробка немного помялась при транспортировке, но сама обувь в идеале."
    },
    {
      name: "Анна",
      stars: "⭐⭐⭐⭐⭐",
      text: "Амортизация на высоте, для бега подошли просто отлично."
    },
    {
      name: "Виталий",
      stars: "⭐⭐⭐",
      text: "Кроссовки классные, но прислали не тот цвет. Пришлось оформлять возврат."
    },
    {
      name: "Елена",
      stars: "⭐⭐⭐⭐⭐",
      text: "Уже третий раз заказываю тут обувь для всей семьи. Всегда отличный сервис."
    },
    {
      name: "Артем",
      stars: "⭐⭐⭐⭐",
      text: "Цены приятные, выбор моделей радует. Единственное — не сразу прислали трек-номер."
    },
    {
      name: "Наталья",
      stars: "⭐⭐⭐⭐⭐",
      text: "Очень быстро перезвонили для подтверждения заказа."
    },
    {
      name: "Павел",
      stars: "⭐⭐⭐⭐⭐",
      text: "Идеально подошли под спортивный костюм. Ходить в них одно удовольствие."
    },
    {
      name: "Юлия",
      stars: "⭐⭐⭐⭐",
      text: "Классный дизайн сайта, всё понятно. Курьер немного опоздал."
    }
  ];

  return (
    <div className="container">
      <h1>Отзывы о магазине Nike</h1>
      <p>мнения наших покупателей</p>

      <div className="grid">
        {reviews.map((r, index) => (
          <div
            key={index}
            className="card clickable"
            onClick={() => setSelectedReview(r)}
          >
            <h3>{r.name}</h3>
            <div>{r.stars}</div>
            <p>{r.text.slice(0, 60)}...</p>
          </div>
        ))}
      </div>

      {selectedReview && (
        <div className="modalOverlay" onClick={() => setSelectedReview(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedReview.name}</h2>
            <div>{selectedReview.stars}</div>
            <p>{selectedReview.text}</p>
            <button onClick={() => setSelectedReview(null)}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}