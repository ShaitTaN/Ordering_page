import React, { FC, useEffect, useRef, useState } from "react";
import { useMatchMedia } from "../../assets/hooks/useMatchMedia";
import CustomCheckbox from "../checkbox/CustomCheckbox";
import "./delivery.scss";
import DeliveryCard from "./DeliveryCard";
import DeliveryClient from "./DeliveryClient";
import DeliveryDateItem from "./DeliveryDateItem";

interface DeliveryProps {
  openModal: () => void;
}

const Delivery: FC<DeliveryProps> = ({ openModal }) => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [activeData, setActiveData] = useState(0);
	const [isLeftDisabled, setIsLeftDisabled] = useState(true)
	const [isRightDisabled, setIsRightDisabled] = useState(false)
  const { isMobile } = useMatchMedia();

  const changeCard = (index: number) => {
    setActiveCard(index);
  };

  const changeDataItem = (index: number) => {
    setActiveData(index);
  };

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
            <button disabled={isLeftDisabled} className="delivery__controlls-btn">
              <svg
                width="14"
                height="22"
                viewBox="0 0 14 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.04634 11L13.2963 19.25L10.9397 21.6066L0.333008 11L10.9397 0.393311L13.2963 2.74998L5.04634 11Z"
                  fill={!isLeftDisabled ? `#333333` : '#D6D6D6'}
                />
              </svg>
            </button>
            <button disabled={isRightDisabled} className="delivery__controlls-btn">
              <svg
                width="14"
                height="22"
                viewBox="0 0 14 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.58354 11L0.333544 19.25L2.69021 21.6066L13.2969 11L2.69021 0.393311L0.333544 2.74998L8.58354 11Z"
                  fill={!isRightDisabled ? `#333333` : '#D6D6D6'}
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="delivery__cards">
        <div className="delivery__cards-wrapper">
          {deliveryCards.map((card, i) => (
            <DeliveryCard
              changeCard={() => changeCard(i)}
              isActive={i === activeCard}
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
            <DeliveryDateItem
              title={date.title}
              time={date.time}
              key={i}
              isActive={i === activeData}
              changeDataItem={() => changeDataItem(i)}
            />
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
