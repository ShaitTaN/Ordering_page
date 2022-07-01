import React, { FC } from "react";
import { useMatchMedia } from "../../assets/hooks/useMatchMedia";

interface DeliveryCardProps{
	title: string;
	price: string;
	address: string;
}

const DeliveryCard: FC<DeliveryCardProps> = ({address,price,title}) => {
  const { isMobile } = useMatchMedia();

  if (isMobile) {
    return (
      <div className="delivery__card">
        <div className="title">{title}</div>
        <div className="delivery__card-price">{price} ₽</div>
        <div className="delivery__card-address">
          {address}
        </div>
      </div>
    );
  }

  return (
    <div className="delivery__card">
      <div className="delivery__card-info">
        <div className="title">{title}</div>
        <div className="delivery__card-address">
          {address}
        </div>
      </div>
      <div className="delivery__card-price">{price} ₽</div>
    </div>
  );
};

export default DeliveryCard;
