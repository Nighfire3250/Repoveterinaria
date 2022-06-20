/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from "react";
// @material-ui/core components
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import "./ShoppingCar.scss";

export default function ShoppingCar(props) {
    return(
        <div>
            <Header
             absolute
             brand="Carrito"
             rightLinks={<HeaderLinks />}
            />
            <div className="containerCar">Carrito</div>
        </div>
    );
}