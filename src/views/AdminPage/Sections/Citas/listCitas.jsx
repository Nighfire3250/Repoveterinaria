/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./listCitas.scss";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "dueno", headerName: "Dueño", width: 160 },
    { field: "mascota", headerName: "Mascota", width: 160 },
    { field: "veterinario", headerName: "Veterinario", width: 160 },
    { field: "fecha", headerName: "Fecha", width: 160 },
    { field: "estado", headerName: "Estado", width: 160 },
];

const rows = [
    { id: 1, dueno: "Jairo", mascota: "Chele", veterinario: "Claudia", fecha: "3/7/2022", estado: "Pendiente" },
];

export default function ListCitas() {
    return(
        <div className="listCita">
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