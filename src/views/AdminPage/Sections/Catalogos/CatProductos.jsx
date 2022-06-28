import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./CatProductos.scss";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "marca", headerName: "Marca", width: 160 },
  { field: "descripcion", headerName: "Descripción", width: 300 },
  { field: "especie", headerName: "Especie", width: 160 },
  { field: "unidades", headerName: "Unidades", type: "number", width: 160 },
  {
    field: "precio",
    headerName: "Precio C$",
    type: "number",
    width: 90,
  },
];
const rows = [
  {
    id: 1,
    marca: "Goldy",
    descripcion: "Nutrición Óptima 4kg Cachorro",
    especie: "Perro",
    unidades: 5,
    precio: 430,
  },
  {
    id: 2,
    marca: "Kirkland",
    descripcion: "Signature Perro Adulto 18kg",
    especie: "Perro",
    unidades: 3,
    precio: 880,
  },
  {
    id: 3,
    marca: "Pedigree",
    descripcion: "Pedigree Comida humeda 4lb",
    especie: "Perro",
    unidades: 5,
    precio: 320,
  },
  {
    id: 4,
    marca: "Pedigree",
    descripcion: "Pedigree Perros Adultos 55 lb",
    especie: "Perro",
    unidades: 3,
    precio: 950,
  },
  {
    id: 5,
    marca: "Members Selection",
    descripcion: "Galletas para perro 10lb",
    especie: "Perro",
    unidades: 5,
    precio: 220,
  },
  {
    id: 6,
    marca: " Crupis",
    descripcion: "bocadillos sabor bacon 1kg",
    especie: "Perro",
    unidades: 10,
    precio: 80,
  },
  {
    id: 7,
    marca: "Purina",
    descripcion: "Beneful Original Cachorros 10Kg",
    especie: "Perro",
    unidades: 7,
    precio: 450,
  },
  {
    id: 8,
    marca: "Pet Master",
    descripcion: "Pet Master Cachorro 20lb",
    especie: "Perro",
    unidades: 6,
    precio: 420,
  },
  {
    id: 9,
    marca: "Don Gato",
    descripcion: "Don Gato Alimento Cachorro y Adulto 8kg",
    especie: "Gato",
    unidades: 15,
    precio: 240,
  },
  {
    id: 10,
    marca: "Gati",
    descripcion: "Gati Mar y Tierra Cachorro y Adulto 1kg",
    especie: "Gato",
    unidades: 15,
    precio: 45,
  },
];

export default function CatProductos() {
  return (
    <div className="productos">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
