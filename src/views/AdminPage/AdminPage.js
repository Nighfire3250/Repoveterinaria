import React from "react";
// @material-ui/core components
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import TopBar from "components/Topbar/Topbar.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import "./AdminPage.css";
import Section from "./Sections/Section.jsx";

export default function AdminPage(props) {
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        brand="Administración"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <TopBar />
      <div className="container">
        <Sidebar />
        <Section />
      </div>
    </div>
  );
}