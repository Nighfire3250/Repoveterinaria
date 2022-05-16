import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Section.scss";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Nombre", width: 160 },
  { field: "usuario", headerName: "Usuario", width: 130 },
  { field: "rol", headerName: "Rol", width: 130 },
  {
    field: "edad",
    headerName: "Edad",
    type: "number",
    width: 90,
  },
  {
    field: "estado",
    headerName: "Bloqueado",
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    rol: "Administrador",
    usuario: "user1",
    firstName: "Jon",
    edad: 35,
    estado: "No",
  },
  {
    id: 2,
    rol: "Veterinario",
    usuario: "user2",
    firstName: "Cersei",
    edad: 42,
    estado: "No",
  },
  {
    id: 3,
    rol: "Veterinario",
    usuario: "user3",
    firstName: "Jaime",
    edad: 35,
    estado: "No",
  },
  {
    id: 4,
    rol: "Veterinario",
    usuario: "user4",
    firstName: "Arya",
    edad: 25,
    estado: "No",
  },
  {
    id: 5,
    rol: "Cliente",
    usuario: "user5",
    firstName: "Daenerys",
    edad: 22,
    estado: "No",
  },
  {
    id: 6,
    rol: "Cliente",
    usuario: "user6",
    firstName: "Robert",
    edad: 28,
    estado: "No",
  },
  {
    id: 7,
    rol: "Cliente",
    usuario: "user7",
    firstName: "Ferrara",
    edad: 44,
    estado: "No",
  },
  {
    id: 8,
    rol: "Cliente",
    usuario: "user8",
    firstName: "Rossini",
    edad: 36,
    estado: "Si",
  },
  {
    id: 9,
    rol: "Cliente",
    usuario: "user9",
    firstName: "Harvey",
    edad: 65,
    estado: "No",
  },
];

export default function Section() {
  return (
    <div className="home">
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
