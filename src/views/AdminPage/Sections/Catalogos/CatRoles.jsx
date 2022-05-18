import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./CatRol.scss";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Rol", headerName: "Rol", width: 160 },
];
const rows = [
  {
    id: 1,
    Rol: "Administrador",
  },
  {
    id: 2,
    Rol: "Veterinario",
  },
  {
    id: 3,
    Rol: "Cliente",
  },
  {
    id: 4,
    Rol: "chichi",
  },
];

export default function CatRoles() {
  return (
    <div className="roles">
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
