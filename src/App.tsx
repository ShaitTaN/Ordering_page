import React from "react";
import "./App.scss";
import Delivery from "./components/delivery/Delivery";
import Footer from "./components/footer/Footer";
import Order from "./components/order/Order";

function App() {
  return (
    <>
			<h1 className="main-title">Оформление заказа</h1>
			<Delivery/>
			<Order/>
			<Footer/>
    </>
  );
}

export default App;
