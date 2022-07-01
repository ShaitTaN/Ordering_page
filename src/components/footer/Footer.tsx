import React, { FC } from "react";
import { useMatchMedia } from "../../assets/hooks/useMatchMedia";
import "./footer.scss";

const Footer: FC = () => {
  const { isMobile } = useMatchMedia();

  if (isMobile) {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__summ title">
            К оплате: 21 072 ₽<div className="change-btn">Подробнее</div>
          </div>
          <button className="footer__btn">Оформить и оплатить</button>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="container">
        <button className="footer__btn title">Оформить и оплатить</button>
        <div className="footer__summ">
          Итого к оплате на сайте: <span className="title">21 072 ₽</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
