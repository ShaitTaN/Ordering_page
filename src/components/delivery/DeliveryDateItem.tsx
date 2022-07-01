import React, { FC } from "react";

interface DeliveryDateItemProps{
	title: string;
	time: string;
	isActive: boolean;
	changeDataItem: () => void;
}

const DeliveryDateItem: FC<DeliveryDateItemProps> = ({time,title,changeDataItem,isActive}) => {
  return (
    <div onClick={changeDataItem} className={isActive ? "delivery__date active" : 'delivery__date'}>
      <div className="title">{title}</div>
      <div className="delivery__date-time">{time}</div>
    </div>
  );
};

export default DeliveryDateItem;
