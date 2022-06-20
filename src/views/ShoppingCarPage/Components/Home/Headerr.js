import React from "react";

export default function Headerr(props) {
  return (
    <header className="block row center">
      <div>
        <a className="aClass" href="#/">
          <h1 className="h1Class">Carrito de compras</h1>
        </a>
      </div>
      <div>
        <a className="aClass" href="#/cart">
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
