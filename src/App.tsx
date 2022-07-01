import React, { createContext, useState } from "react";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Ordering from "./components/odering/Ordering";
import { Context } from "./context";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = () => {
    setIsVisible(false);
  };
  const openModal = () => {
    setIsVisible(true);
  };
  return (
    <Context.Provider
      value={{ isVisible, setIsVisible, closeModal, openModal }}
    >
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <h1 className="main-title title">Оформление заказа</h1>
            <Ordering />
          </div>
        </div>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;