/*eslint-disable*/
import React, { useState } from "react";
//import DeleteIcon from "@material-ui/icons/Delete";
//import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
//import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { AccountBox, MenuBook, Home, AdminPanelSettings } from "@material-ui/icons";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { rol } from "../../views/LoginPage/LoginPage";

// core components
//import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import { rolPrincipio, asignarRol, quitarRol } from "../../loginData";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
const rolActual=""
export default function HeaderLinks() {
  const classes = useStyles();
  const [returnedData, setReturnedData] = useState(["hello"]);
  const [employee, setEmployee] = useState({
    idUsuario: 1,
    nombre: "",
    usuario: "",
    rol: "",
    estado: "",
  });
  const fetchData = async () => {
    console.log(employee);
    const newData = await fetch("/logApi", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: employee.idUsuario,
        firstName: employee.nombre,
        usuario: employee.usuario,
        rol: employee.rol,
        estado: employee.estado,
      }),
    }).then((res) => res.json());
    console.log(newData);
    // eslint-disable-next-line no-undef
    console.log(newData[0]);
    setReturnedData(newData[0]);
  };
  window.onload = fetchData;
  const logoutFunction = async () => {
    console.log(employee);
    const newData = await fetch("/logOut", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName: employee.nombre,
        usuario: employee.usuario,
        rol: employee.rol,
        estado: employee.estado,
      }),
    }).then((res) => res.json());
    console.log(newData);
    // eslint-disable-next-line no-undef
    console.log(newData[0]);
  };
  if (returnedData === undefined){
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            href="http://localhost:3000"
            color="transparent"
            className={classes.navLink}
          > <Home className={classes.icons} /> Inicio
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="http://localhost:3000/login-page"
            color="transparent"
            className={classes.navLink}
          >
            <AccountBox className={classes.icons} /> Iniciar Sesion
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Síguenos en twitter"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/CreativeTim?ref=creativetim"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-twitter"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Síguenos en facebook"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/CreativeTim?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-facebook"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Síguenos en instagram"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    );
  }
  else if (returnedData.rol == "Administrador") {
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            href="http://localhost:3000/admin-page"
            color="transparent"
            className={classes.navLink}
          > <ManageAccountsIcon className={classes.icons}/> Administración
          </Button>
          <Button
            href="http://localhost:3000"
            color="transparent"
            className={classes.navLink}
          > <Home className={classes.icons} /> Inicio
          </Button>
          <Button
            href="http://localhost:3000/landing-page"
            color="transparent"
            className={classes.navLink}
          > <MenuBook className={classes.icons} /> Historial de Pacientes
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
          id="shoppingCar"
          title="Carrito de Compras"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="http://localhost:3000/shoppingCar"
              color="transparent"
              className={classes.navLink}
            >
              <ShoppingCartIcon className={classes.icons} /> Carrito
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="http://localhost:3000"
            color="transparent"
            className={classes.navLink}
            onClick={() => logoutFunction()}
          >
            <LogoutIcon className={classes.icons} /> Cerrar Sesión
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Síguenos en twitter"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/CreativeTim?ref=creativetim"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-twitter"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Síguenos en facebook"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/CreativeTim?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-facebook"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Síguenos en instagram"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    );
  }
  else if (returnedData.rol == "Veterinario") {
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            href="http://localhost:3000"
            color="transparent"
            className={classes.navLink}
          > <Home className={classes.icons} /> Inicio
          </Button>
          <Button
            href="http://localhost:3000/landing-page"
            color="transparent"
            className={classes.navLink}
          > <MenuBook className={classes.icons} /> Historial de Pacientes
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="http://localhost:3000"
            color="transparent"
            className={classes.navLink}
            onClick={() => logoutFunction()}
          >
            <LogoutIcon className={classes.icons} /> Cerrar Sesión
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Síguenos en twitter"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/CreativeTim?ref=creativetim"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-twitter"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Síguenos en facebook"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/CreativeTim?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-facebook"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Síguenos en instagram"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    );
  }
  else if (returnedData.rol == "Cliente") {
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            href="http://localhost:3000"
            color="transparent"
            className={classes.navLink}
          > <Home className={classes.icons} /> Inicio
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
          id="shoppingCar"
          title="Carrito de Compras"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="http://localhost:3000/shoppingCar"
              color="transparent"
              className={classes.navLink}
            >
              <ShoppingCartIcon className={classes.icons} /> Carrito
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="http://localhost:3000"
            color="transparent"
            className={classes.navLink}
            onClick={() => logoutFunction()}
          >
            <LogoutIcon className={classes.icons} /> Cerrar Sesión
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Síguenos en twitter"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/CreativeTim?ref=creativetim"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-twitter"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Síguenos en facebook"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/CreativeTim?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-facebook"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Síguenos en instagram"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    );
  }
  else if (returnedData.rol == "") {
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            href="http://localhost:3000"
            color="transparent"
            className={classes.navLink}
          > <Home className={classes.icons} /> Inicio
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="http://localhost:3000/login-page"
            color="transparent"
            className={classes.navLink}
          >
            <AccountBox className={classes.icons} /> Iniciar Sesion
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Síguenos en twitter"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/CreativeTim?ref=creativetim"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-twitter"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Síguenos en facebook"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/CreativeTim?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-facebook"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Síguenos en instagram"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    );
  }else{
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            href="http://localhost:3000"
            color="transparent"
            className={classes.navLink}
          > <Home className={classes.icons} /> Inici
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="http://localhost:3000/login-page"
            color="transparent"
            className={classes.navLink}
          >
            <AccountBox className={classes.icons} /> Iniciar Sesion
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Síguenos en twitter"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/CreativeTim?ref=creativetim"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-twitter"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Síguenos en facebook"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/CreativeTim?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-facebook"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Síguenos en instagram"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    );
  }
}
