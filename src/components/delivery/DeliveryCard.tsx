import React, { FC } from "react";

const DeliveryCard: FC = () => {
  return (
    <div className="delivery__card">
      <div className="delivery__card-info">
        <div className="title">
          Почта России, курьер — 24-26 сент.
        </div>
        <div className="delivery__card-address">
          ул. Академика Королева, 73/3, Петропавловск- Камчатский, 683000
        </div>
      </div>
      <div className="delivery__card-price">+367 ₽</div>
    </div>
  );
};

export default DeliveryCard;
