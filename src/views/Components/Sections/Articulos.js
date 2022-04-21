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
const Articulos = () => {
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
            <p>Comida</p>
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
      <div className="articulos-container">
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida1} />
          </div>
          <div className="title-section">precio</div>
          <div className="description-section">descripcion</div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida2} />
          </div>
          <div className="title-section">precio</div>
          <div className="description-section">descripcion</div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida3} />
          </div>
          <div className="title-section">precio</div>
          <div className="description-section">descripcion</div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida4} />
          </div>
          <div className="title-section">precio</div>
          <div className="description-section">descripcion</div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida5} />
          </div>
          <div className="title-section">precio</div>
          <div className="description-section">descripcion</div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida6} />
          </div>
          <div className="title-section">precio</div>
          <div className="description-section">descripcion</div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida7} />
          </div>
          <div className="title-section">precio</div>
          <div className="description-section">descripcion</div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida8} />
          </div>
          <div className="title-section">precio</div>
          <div className="description-section">descripcion</div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida9} />
          </div>
          <div className="title-section">precio</div>
          <div className="description-section">descripcion</div>
        </div>
        <div className="articulo-container">
          <div className="img-section">
            <img className="img-articulo" src={Comida10} />
          </div>
          <div className="title-section">precio</div>
          <div className="description-section">descripcion</div>
        </div>
      </div>
    </>
  );
};

export default Articulos;
