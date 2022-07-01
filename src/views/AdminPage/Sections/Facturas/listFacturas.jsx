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
    { id: 1, cliente: "Ernesto", fecha: "1/7/2022", total: 852 },
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