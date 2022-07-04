/* eslint-disable no-undef */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReplayIcon from "@mui/icons-material/Replay";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import "./listCitas.scss";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "dueno", headerName: "Dueño", width: 160 },
    { field: "mascota", headerName: "Mascota", width: 160 },
    { field: "veterinario", headerName: "Veterinario", width: 160 },
    { field: "fecha", headerName: "Fecha", width: 160 },
    { field: "estado", headerName: "Estado", width: 160 },
    {
        field: "action",
        headerName: "Acción",
        width: 160,
        renderCell: (params) => {
          return (
            <Link to={"/admin-page/listCitas/" + params.row.id}>
              <button className="usersListEdit">
                <EditIcon />
              </button>
            </Link>
          );
        },
      },
];

const rows = [
    { id: 1, dueno: "Jairo", mascota: "Chele", veterinario: "Claudia", fecha: "3/7/2022", estado: "Pendiente" },
];

export default function ListCitas() {
    return(
        <div className="listCita">
            <button className="createUserButton" onClick={() => fetchData()}>
                <ReplayIcon className="addIcon" />
            </button>
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