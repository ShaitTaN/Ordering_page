import React, { FC } from "react";
import { useMatchMedia } from "../../assets/hooks/useMatchMedia";
import "./order.scss";

interface OrderProps{
	closeModal: () => void;
}

const Order: FC<OrderProps> = ({closeModal}) => {
  const { isMobile } = useMatchMedia();

  if (isMobile) {
    return (
      <div className="order">
        <div className="order__info">
          <h2>
            <span className="title">В заказе 4 товара</span> (2кг)
          </h2>
          <div className="order__item">
            Цена товаров <span className="title">29 456 ₽</span>
          </div>
          <div className="order__item">
            Все скидки <span className="title">–7 732 ₽</span>
          </div>
          <div className="order__item">
            Скидка за предоплату <span className="title">–3%</span>
          </div>
        </div>
				<div className="order__btn" onClick={closeModal}>Закрыть подробности</div>
      </div>
    );
  }

  return (
    <div className="order">
      <h2>
        <span className="title">В заказе 4 товара</span> (2кг)
      </h2>
      <div className="order__item">
        Цена товаров <span className="title">29 456 ₽</span>
      </div>
      <div className="order__item">
        Все скидки <span className="title">–7 732 ₽</span>
      </div>
      <div className="order__item">
        Скидка за предоплату <span className="title">–3%</span>
      </div>
    </div>
  );
};

export default Order;
