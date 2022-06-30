import React, { FC } from "react";
import "./delivery.scss";
import DeliveryCard from "./DeliveryCard";
import DeliveryDateItem from "./DeliveryDateItem";

const Delivery: FC = () => {
  return (
    <div className="delivery">
      <div className="delivery__header">
        <h2 className="title">Доставка</h2>
        <div className="delivery__controlls">
          <button className="delivery__controlls-btn"></button>
          <button className="delivery__controlls-btn"></button>
        </div>
      </div>
      <div className="delivery__cards">
        <DeliveryCard />
        <DeliveryCard />
      </div>
      <div className="change-btn">Выбрать новое место и способ</div>
      <div className="delivery__dates">
        <DeliveryDateItem />
        <DeliveryDateItem />
        <div className="change-btn">Другие дата и время</div>
      </div>
    </div>
  );
};

export default Delivery;
