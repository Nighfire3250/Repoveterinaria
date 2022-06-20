import React from "react";

export default function Headerr(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Carrito de compras</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Carrito{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
      </div>
    </header>
  );
}
