import { useState } from "react";
import "./FAQ.css";

const faq = [
  { id: 1, question: "Есть ли гарантия на товары?", answer: "Да, на все оригинальные товары распространяется гарантия производителя." },
  { id: 2, question: "Можно ли отменить заказ?", answer: "Да, пока заказ не передан в службу доставки." },
  { id: 3, question: "Как отследить заказ?", answer: "После отправки заказа вы получите номер для отслеживания." },
  { id: 4, question: "Есть ли бесплатная доставка?", answer: "Да, при заказе от 5000 ₽." },
  { id: 5, question: "Можно ли вернуть товар?", answer: "Да, в течение 30 дней при сохранении товарного вида." },
  { id: 6, question: "Какие способы оплаты доступны?", answer: "Банковские карты, Apple Pay, Google Pay и другие способы оплаты." },
  { id: 7, question: "Сколько длится доставка?", answer: "Обычно 2–7 рабочих дней." },
  { id: 8, question: "Продаете ли вы оригинальную продукцию?", answer: "Да, только оригинальная продукция Nike." },
  { id: 9, question: "Можно ли обменять товар?", answer: "Да, если товар не использовался и сохранена упаковка." },
  { id: 10, question: "Как узнать статус заказа?", answer: "В личном кабинете или по трек-номеру." }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Часто задаваемые вопросы</h1>

      {faq.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="faq-item"
            onClick={() => toggle(item.id)}
          >
            <div className="faq-question">
              <span>❓ {item.question}</span>
              <span className={`faq-icon ${isOpen ? "open" : ""}`}>▼</span>
            </div>

            <div className={`faq-answer ${isOpen ? "open" : ""}`}>
              <div className="faq-answer-inner">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}