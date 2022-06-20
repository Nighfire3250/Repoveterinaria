/* eslint-disable prettier/prettier */
import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3 className="h3class">{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button className="buttonCar" onClick={() => onAdd(product)}>Añadir</button>
      </div>
    </div>
  );
}
