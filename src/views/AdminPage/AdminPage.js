import React from "react";
// @material-ui/core components
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import TopBar from "components/Topbar/Topbar.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import "./AdminPage.scss";
import Section from "./Sections/Section.jsx";
import Vacunas from "./Sections/Catalogos/CatVacunas.jsx";
import Pacientes from "./Sections/Catalogos/CatPacientes.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function AdminPage(props) {
  const { ...rest } = props;
  return (
    <Router>
      <Header
        absolute
        brand="Administración"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <TopBar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/admin-page/">
            <Section />
          </Route>
          <Route exact path="/admin-page/catPac">
            <Pacientes />
          </Route>
          <Route exact path="/admin-page/catVac">
            <Vacunas />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
