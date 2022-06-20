/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// @material-ui/core components
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import "./ShoppingCar.scss";
import Headerr from "./Components/Home/Headerr";
import Main from "./Components/Home/Main";
import Basket from "./Components/Home/Basket";
import data from "./data";

export default function ShoppingCar(props) {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
    return(
        <div>
            <Header
             absolute
             brand="Carrito"
             rightLinks={<HeaderLinks />}
            />
            <div className="container">Carrito</div>
            <Headerr countCartItems={cartItems.length}></Headerr>
            <div className="row">
             <Main products={products} onAdd={onAdd}></Main>
             <Basket
               cartItems={cartItems}
               onAdd={onAdd}
               onRemove={onRemove}
             ></Basket>
      </div>
    </div>
    );
}