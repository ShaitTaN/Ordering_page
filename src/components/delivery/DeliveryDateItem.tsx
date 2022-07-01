import React, { FC } from "react";

interface DeliveryDateItemProps{
	title: string;
	time: string;
}

const DeliveryDateItem: FC<DeliveryDateItemProps> = ({time,title}) => {
  return (
    <div className="delivery__date">
      <div className="title">{title}</div>
      <div className="delivery__date-time">{time}</div>
    </div>
  );
};

export default DeliveryDateItem;
