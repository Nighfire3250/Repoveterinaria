/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import "assets/myComponents/Articulos.scss";
import fondoComida from "assets/img/fondo_comida.png";
import fondoJuguete from "assets/img/fondo_juguete.jpg";
import fondoMedicamento from "assets/img/fondo_medicamento.jpg";
import Comida1 from "assets/img/articulos/1_goldy_cachorro_alimento_canino.jpg";
import Comida2 from "assets/img/articulos/2-Kirkland_super_premium_comidaparaparro.jpg";
import Comida3 from "assets/img/articulos/3-Pedigree_comidaparaperro.jpg";
import Comida4 from "assets/img/articulos/4.Members galleta sabor a pollo para perro.jpg";
import Comida5 from "assets/img/articulos/5- crupis bocadillos para perros.jpg";
import Comida6 from "assets/img/articulos/6-Beneful Alimento Cachorro.jpg";
import Comida7 from "assets/img/articulos/7-Pedigree comida para perro surtida.jpg";
import Comida8 from "assets/img/articulos/8-Pet master alimento para cahorro.jpg";
import Comida9 from "assets/img/articulos/9-Don gato alimento.jpg";
import Comida10 from "assets/img/articulos/10-gati alimento.jpg";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Select from "react-select"
import InputNumber from "rc-input-number";
import "./Articulos.scss";
const Articulos = () => {
  const optionsProductos = [
    { value: 'cachorro', label: 'Cachorro' },
    { value: 'adulto', label: 'Adulto' },
  ]
  const optionsEspecie = [
    { value: 'perro', label: 'Perro' },
    { value: 'gato', label: 'Gato' },
  ]
  return (
    <>
      <div className="categorias-container">
        <div
          className="categoria-item"
          style={{
            backgroundImage: `url(${fondoComida})`,
            backgroundSize: "cover",
          }}
        >
          <div className="text-container">
            <a>
              <p>Comida</p>
            </a>
          </div>
        </div>
        <div
          className="categoria-item"
          style={{
            backgroundImage: `url(${fondoJuguete})`,
            backgroundSize: "cover",
          }}
        >
          <div className="text-container">
            <p>Juguetes</p>
          </div>
        </div>
        <div
          className="categoria-item"
          style={{
            backgroundImage: `url(${fondoMedicamento})`,
            backgroundSize: "cover",
          }}
        >
          <div className="text-container">
            <p>Medicamentos</p>
          </div>
        </div>
      </div>
      <div className="divspanSelect">
        <span className="spanSelect">Seleccione...</span>
      </div>
      <div className="divSelectProductos">
        <span className="spanSelect">Especie</span>
        <Select className="selectProductos" options={optionsEspecie} />
        <span className="spanSelect">Tamaño</span>
        <Select className="selectRaza" options={optionsProductos} />
      </div>
      <div className="articulos-container">
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida1} />
          </div>
          <div className="title-section">
            <span className="fontArticulos">Precio: 430 C$</span><br></br>
            <span className="fontArticulos">Descripción: Goldy Nutrición Óptima 4kg</span>
          </div>
          <div className="description-section">
            <button className="addCart" href="http://localhost:3000/shoppingCar" > 
              <AddShoppingCartIcon className="iconCart" /> +
            </button>
            <input className="inNumber" type="number" defaultValue={0} max={5} min={0}></input>
          </div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida2} />
          </div>
          <div className="title-section">
            <span className="fontArticulos">Precio: 880 C$</span><br></br>
            <span className="fontArticulos">Descripción: Kirkland Signature Perro Adulto 18kg</span>
          </div>
          <div className="description-section">
            <button className="addCart" href="http://localhost:3000/shoppingCar" > 
              <AddShoppingCartIcon className="iconCart" /> +
            </button>
          </div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida3} />
          </div>
          <div className="title-section">
            <span className="fontArticulos">Precio: 950 C$</span><br></br>
            <span className="fontArticulos">Descripción: Pedigree Perros Adultos 55 lb</span>
          </div>
          <div className="description-section">
            <button className="addCart" href="http://localhost:3000/shoppingCar" > 
              <AddShoppingCartIcon className="iconCart" /> +
            </button>
          </div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida4} />
          </div>
          <div className="title-section">
            <span className="fontArticulos">Precio: 220 C$</span><br></br>
            <span className="fontArticulos">Descripción: Members Selection Galletas para perro 10lb</span>
          </div>
          <div className="description-section">
            <button className="addCart" href="http://localhost:3000/shoppingCar" > 
              <AddShoppingCartIcon className="iconCart" /> +
            </button>
          </div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida5} />
          </div>
          <div className="title-section">
            <span className="fontArticulos">Precio: 80 C$</span><br></br>
            <span className="fontArticulos">Descripción: Crupis bocadillos sabor bacon 1kg</span>
          </div>
          <div className="description-section">
            <button className="addCart" href="http://localhost:3000/shoppingCar" > 
              <AddShoppingCartIcon className="iconCart" /> +
            </button>
          </div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida6} />
          </div>
          <div className="title-section">
            <span className="fontArticulos">Precio: 450 C$</span><br></br>
            <span className="fontArticulos">Descripción: Purina Beneful Original Cachorros 10Kg</span>
          </div>
          <div className="description-section">
            <button className="addCart" href="http://localhost:3000/shoppingCar" > 
              <AddShoppingCartIcon className="iconCart" /> +
            </button>
          </div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida7} />
          </div>
          <div className="title-section">
            <span className="fontArticulos">Precio: 320 C$</span><br></br>
            <span className="fontArticulos">Descripción: Pedigree Comida humeda</span>
          </div>
          <div className="description-section">
            <button className="addCart" href="http://localhost:3000/shoppingCar" > 
              <AddShoppingCartIcon className="iconCart" /> +
            </button>
          </div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida8} />
          </div>
          <div className="title-section">
            <span className="fontArticulos">Precio: 420 C$</span><br></br>
            <span className="fontArticulos">Descripción: Pet Master Cachorro 20lb</span>
          </div>
          <div className="description-section">
            <button className="addCart" href="http://localhost:3000/shoppingCar" > 
              <AddShoppingCartIcon className="iconCart" /> +
            </button>
          </div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida9} />
          </div>
          <div className="title-section">
            <span className="fontArticulos">Precio: 240 C$</span><br></br>
            <span className="fontArticulos">Descripción: Don Gato Alimento 8kg</span>
          </div>
          <div className="description-section">
            <button className="addCart" href="http://localhost:3000/shoppingCar" > 
              <AddShoppingCartIcon className="iconCart" /> +
            </button>
          </div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida10} />
          </div>
          <div className="title-section">
            <span className="fontArticulos">Precio: 45 C$</span><br></br>
            <span className="fontArticulos">Descripción: Gati Mar y Tierra 1kg</span>
          </div>
          <div className="description-section">
            <button className="addCart" href="http://localhost:3000/shoppingCar" > 
              <AddShoppingCartIcon className="iconCart" /> +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articulos;
