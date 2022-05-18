import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./CatProductos.scss";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Producto", headerName: "Producto", width: 160 },
  { field: "Fecha", headerName: "Fecha", width: 160 },
  { field: "Descripción", headerName: "Descripción", width: 160 },
  {
    field: "Precio",
    headerName: "Precio",
    type: "number",
    width: 90,
  },
];
const rows = [
  {
    id: 1,
    Producto: "Canela",
    Precio: 1500,
    Descripción: "Perro",
    Fecha: "12/04/2022",
  },
  {
    id: 2,
    Producto: "Whiskas",
    Precio: 4,
    Descripción: "Gato",
    Fecha: "12/04/2022",
  },
  {
    id: 3,
    Producto: "Whiskas premium",
    Precio: 2,
    Descripción: "Gato",
    Fecha: "12/04/2022",
  },
  {
    id: 4,
    Producto: "Pedigree",
    Precio: 1500,
    Descripción: "Perro",
    Fecha: "12/04/2022",
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
