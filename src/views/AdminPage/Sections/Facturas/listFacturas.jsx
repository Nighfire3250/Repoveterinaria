/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import Pdf from "assets/img/articulos/Factura.pdf";
import "./listFacturas.scss";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "cliente", headerName: "Cliente", width: 160 },
    { field: "fecha", headerName: "Fecha", width: 160 },
    { field: "total", headerName: "Total C$", type: "number", width: 160 },
    { field: "abrir",
      headerName: "Abrir",
      width: 160,
      renderCell: (params) => {
        return(
            <a className="facturaButton" href={Pdf} target="_blank" rel="noreferrer"><FileOpenIcon /></a>
        );
      },
    },
];

const rows = [
<<<<<<< HEAD
    { id: 1, cliente: "Jairo", fecha: "1/7/2022", total: 45 },
=======
    { id: 1, cliente: "Ernesto", fecha: "1/7/2022", total: 852 },
>>>>>>> 1af7973c972d7af6a4ce5e04b1af3615f86d30dd
];


export default function ListFacturas() {
    return(
        <div className="listFactura">
            <DataGrid
                rows={rows}
                columns={columns}
                disableSelectionOnClick
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
}