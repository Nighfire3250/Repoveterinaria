import React from "react";
import "./Sidebar.css";
import GroupIcon from "@mui/icons-material/Group";
import PetsIcon from "@mui/icons-material/Pets";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ManIcon from "@mui/icons-material/Man";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <h3 className="dashboardTitle">Dashboard</h3>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Usuarios</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <GroupIcon />
              Administración de usuarios
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Catálogos</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PetsIcon />
              Pacientes
            </li>
            <li className="sidebarListItem">
              <VaccinesIcon />
              Vacunas
            </li>
            <li className="sidebarListItem">
              <InventoryIcon />
              Productos
            </li>
            <li className="sidebarListItem">
              <LocalShippingIcon />
              Proveedores
            </li>
            <li className="sidebarListItem">
              <ManIcon />
              Roles
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Archivo</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <InsertDriveFileIcon />
              Expedientes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
