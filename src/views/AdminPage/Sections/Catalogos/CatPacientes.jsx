import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./CatPacientes.scss";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nombre", headerName: "Nombre", width: 160 },
  { field: "especie", headerName: "Especie", width: 160 },
  { field: "raza", headerName: "Raza", width: 160 },
  {
    field: "edad",
    headerName: "Edad",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, nombre: "Canela", edad: 2, especie: "Perro", raza: "Pastor Aleman" },
  {
    id: 2,
    nombre: "Chele",
    edad: 4,
    especie: "Gato",
    raza: "Americano Pelo Corto",
  },
  {
    id: 3,
    nombre: "Luna",
    edad: 2,
    especie: "Gato",
    raza: "Americano Pelo Corto",
  },
  { id: 4, nombre: "Chanel", edad: 3, especie: "Perro", raza: "Chihuahua" },
];

export default function CatPacientes() {
  return (
    <div className="pacientes">
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
