import React, { FC } from "react";

const DeliveryDateItem: FC = () => {
  return (
    <div className="delivery__date">
      <div className="title">пн, 24 сен — ср, 26 сен</div>
      <div className="delivery__date-time">10:00–19:00</div>
    </div>
  );
};

export default DeliveryDateItem;
