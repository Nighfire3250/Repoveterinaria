import React from "react";
import "./Sidebar.scss";
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
              <a href="http://localhost:3000/admin-page/">
                <GroupIcon className="sidebarIcons" />
                Administración de usuarios
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Catálogos</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <a href="http://localhost:3000/admin-page/catPac">
                <PetsIcon className="sidebarIcons" />
                Pacientes
              </a>
            </li>
            <li className="sidebarListItem">
              <a href="http://localhost:3000/admin-page/catVac">
                <VaccinesIcon className="sidebarIcons" />
                Vacunas
              </a>
            </li>
            <li className="sidebarListItem">
              <InventoryIcon className="sidebarIcons" />
              Productos
            </li>
            <li className="sidebarListItem">
              <LocalShippingIcon className="sidebarIcons" />
              Proveedores
            </li>
            <li className="sidebarListItem">
              <ManIcon className="sidebarIcons" />
              Roles
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Archivo</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <InsertDriveFileIcon className="sidebarIcons" />
              Expedientes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
