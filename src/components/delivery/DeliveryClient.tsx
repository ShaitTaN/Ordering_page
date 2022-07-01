import React, { FC } from "react";
import { useMatchMedia } from "../../assets/hooks/useMatchMedia";

const DeliveryClient: FC = () => {
  const { isMobile } = useMatchMedia();

  if (isMobile) {
    return (
      <div className="delivery__client">
        <div className="delivery__client-controlls">
          <div className="delivery__client-name">
            <div className="delivery__client-info">
              <h2 className="title">Получатель</h2>
              <div className="change-btn">Новый получатель</div>
            </div>
            <select name="select-name" id="" className="select">
              <option value="1">
                Вольфганг Вениаминович Константинопольский
              </option>
            </select>
          </div>
          <div className="delivery__client-number">
            <select name="select-number" id="" className="select">
              <option value="1">+7 910 234-56-78</option>
            </select>
            <div className="change-btn">Новый телефон</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="delivery__client">
      <h2 className="title">Получатель</h2>
      <div className="delivery__client-controlls">
        <div className="delivery__client-name">
          <select name="select-name" id="" className="select">
            <option value="1">
              Вольфганг Вениаминович Константинопольский
            </option>
          </select>
          <div className="change-btn">Новый получатель</div>
        </div>
        <div className="delivery__client-number">
          <select name="select-number" id="" className="select">
            <option value="1">+7 910 234-56-78</option>
          </select>
          <div className="change-btn">Новый телефон</div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryClient;
