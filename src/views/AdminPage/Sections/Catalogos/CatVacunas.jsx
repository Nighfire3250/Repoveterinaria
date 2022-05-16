import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./CatVacunas.scss";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "vacuna", headerName: "Vacuna", width: 160 },
  {
    field: "estado",
    headerName: "Disponibilidad",
    width: 160,
  },
];

const rows = [
  { id: 1, vacuna: "Parvovirus", estado: "Si" },
  { id: 2, vacuna: "Moquillo", estado: "No" },
  { id: 3, vacuna: "Polivalente", estado: "Si" },
  { id: 4, vacuna: "Rabia", estado: "Si" },
  { id: 5, vacuna: "Rabia(Refuerzo)", estado: "Si" },
  { id: 6, vacuna: "Polovalente(Refuerzo)", estado: "Si" },
  { id: 7, vacuna: "Leptospirosis", estado: "No" },
  { id: 8, vacuna: "Leishmaniosis", estado: "Si" },
  { id: 9, vacuna: "Parainfluenza", estado: "Si" },
];

export default function CatVacunas() {
  return (
    <div className="vacunas">
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
