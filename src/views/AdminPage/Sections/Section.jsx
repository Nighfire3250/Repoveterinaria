/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Section.scss";
import { userRows } from "../../../dummyData.js";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Nombre", width: 160 },
  { field: "usuario", headerName: "Usuario", width: 130 },
  { field: "rol", headerName: "Rol", width: 130 },
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
  const [returnedData, setReturnedData] = useState(["hello"]);
  const [employee, setEmployee] = useState({
    idUsuario: 0,
    nombre: "",
    nomUsuario: "",
    rol: "",
    estado: "",
  });

  const fetchData = async () => {
    console.log(employee);
    const newData = await fetch("/api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: employee.idUsuario,
        firstName: employee.nombre,
        usuario: employee.nomUsuario,
        rol: employee.rol,
        estado: employee.estado,
      }),
    }).then((res) => res.json());
    console.log(newData);
    // eslint-disable-next-line no-undef
    setReturnedData(newData[0]);
    console.log(newData);
  };

  const rowData = [
    {
      id: returnedData.idUsuario,
    },
  ];

  return (
    <div className="home">
      <button className="addUserButton" onClick={() => fetchData("/api")}>
        <AddBoxIcon className="addIcon" />
        Agregar Usuario
      </button>
      <DataGrid
        rows={rowData}
        disableSelectionOnClick
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
