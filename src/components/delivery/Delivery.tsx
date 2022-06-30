import React, { FC, useState } from "react";
import CustomCheckbox from "../checkbox/CustomCheckbox";
import "./delivery.scss";
import DeliveryCard from "./DeliveryCard";
import DeliveryDateItem from "./DeliveryDateItem";

const Delivery: FC = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);

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
      <div className="delivery__client">
        <h2 className="title">Получатель</h2>
        <select
          name="select-name"
          id=""
          className="delivery__client-name"
        >
					<option value="1">Вольфганг Вениаминович Константинопольский</option>
				</select>
        <select
          name="select-number"
          id=""
          className="delivery__client-number"
        >
					<option value="1">+7 910 234-56-78</option>
				</select>
      </div>
    </div>
  );
};

export default Delivery;
