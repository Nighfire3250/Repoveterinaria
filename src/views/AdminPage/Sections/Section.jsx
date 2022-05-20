/* eslint-disable react/display-name */
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Section.scss";
import { userRows } from "../../../dummyData.js";
import { Link } from "react-router-dom";

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
  {
    field: "action",
    headerName: "Acción",
    width: 160,
    renderCell: (params) => {
      return (
        <Link to={"/admin-page/" + params.row.id}>
          <button className="usersListEdit">Editar</button>
        </Link>
      );
    },
  },
];

export default function Section() {
  return (
    <div className="home">
      <DataGrid
        rows={userRows}
        disableSelectionOnClick
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
