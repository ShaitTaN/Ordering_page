import React, { FC, useState } from "react";
import { useMatchMedia } from "../../assets/hooks/useMatchMedia";
import CustomCheckbox from "../checkbox/CustomCheckbox";
import "./delivery.scss";
import DeliveryCard from "./DeliveryCard";
import DeliveryClient from "./DeliveryClient";
import DeliveryDateItem from "./DeliveryDateItem";

interface DeliveryProps{
	openModal: () => void;
}

const Delivery: FC<DeliveryProps> = ({openModal}) => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);

  const { isMobile } = useMatchMedia();

  const deliveryCards = [
    {
      title: "Почта России, курьер — 24-26 сент.",
      price: "+367",
      address:
        "ул. Академика Королева, 73/3, Петропавловск- Камчатский, 683000",
    },
    {
      title: "Лабиринт, курьер — 25 сент.",
      price: "0",
      address: "Можайское шоссе, д. 21, кв. 50, Москва, 121471",
    },
  ];

  const deliveryDates = !isMobile
    ? [
        { title: "пн, 24 сен — ср, 26 сен", time: "10:00–19:00" },
        { title: "чт, 27 сен — пт, 28 сен", time: "10:00–19:00" },
      ]
    : [
        { title: "вт, 25 сен", time: "10:00–19:00" },
        { title: "ср, 26 сен", time: "10:00–19:00" },
      ];

  return (
    <div className="delivery">
      <div className="delivery__header">
        <h2 className="title">Доставка</h2>
        {!isMobile && (
          <div className="delivery__controlls">
            <button className="delivery__controlls-btn"></button>
            <button className="delivery__controlls-btn"></button>
          </div>
        )}
      </div>
      <div className="delivery__cards">
        <div className="delivery__cards-wrapper">
          {deliveryCards.map((card) => (
            <DeliveryCard
              title={card.title}
              address={card.address}
              price={card.price}
              key={card.title}
            />
          ))}
        </div>
      </div>
      <div className="change-btn">Выбрать новое место и способ</div>
      <div className="delivery__dates">
        <div className="delivery__dates-items">
          {deliveryDates.map((date, i) => (
            <DeliveryDateItem title={date.title} time={date.time} key={i} />
          ))}
        </div>
        <div className="change-btn">Другие дата и время</div>
      </div>
      <div className="delivery__checkboxes">
        <CustomCheckbox
          onChange={() => setChecked1(!checked1)}
          title="Viber/СМС уведомления о статусе заказа"
          checked={checked1}
        />
        <CustomCheckbox
          onChange={() => setChecked2(!checked2)}
          title="Оставить у двери (бесконтактная доставка)"
          checked={checked2}
        />
      </div>
      <DeliveryClient />
    </div>
  );
};

export default Delivery;
