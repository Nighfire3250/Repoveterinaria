import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./CatProveedores.scss";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Proveedor", headerName: "Proveedor", width: 160 },
  { field: "Fecha", headerName: "Fecha", width: 160 },
  { field: "Producto", headerName: "Producto", width: 160 },
  {
    field: "Cantidad",
    headerName: "Cantidad",
    type: "number",
    width: 90,
  },
];
const rows = [
  {
    id: 1,
    Proveedor: "Divetsa",
    Cantidad: 150,
    Producto: "Whiskas",
    Fecha: "12/04/2022",
  },
  {
    id: 2,
    Proveedor: "EXIMSA",
    Cantidad: 150,
    Producto: "Whiskas",
    Fecha: "12/04/2022",
  },
  {
    id: 3,
    Proveedor: "CENVAR",
    Cantidad: 150,
    Producto: "Whiskas",
    Fecha: "12/04/2022",
  },
  {
    id: 4,
    Proveedor: "FOMDILAC",
    Cantidad: 150,
    Producto: "Whiskas",
    Fecha: "12/04/2022",
  },
];

export default function CatProveedores() {
  return (
    <div className="proveedores">
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
