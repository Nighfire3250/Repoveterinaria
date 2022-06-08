/*eslint-disable*/
import React from "react";
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
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// core components
//import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
let rol = "Administrador"

export default function HeaderLinks() {
  const classes = useStyles();
  if (rol == "Administrador") {
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
              color="transparent"
              className={classes.navLink}
            >
              <ShoppingCartIcon className={classes.icons} /> Carrito
            </Button>
          </Tooltip>
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
  if (rol == "Veterinario") {
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
  if (rol == "Cliente") {
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
              color="transparent"
              className={classes.navLink}
            >
              <ShoppingCartIcon className={classes.icons} /> Carrito
            </Button>
          </Tooltip>
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
  if (rol == "") {
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
}
