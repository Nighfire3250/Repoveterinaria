import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AccountBox from "@material-ui/icons/AccountBox";
import AssignmentLate from "@material-ui/icons/AssignmentLate";
import AssignmentTurnedIn from "@material-ui/icons/AssignmentTurnedIn";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";
/*
import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";
*/
import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  //const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        href="http://localhost:3000/landing-page"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Rolando Suazo</h3>
                    <h6>Veterinario</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Graduado de la Universidad Central de Nicaragua, es profesional
                en las ciencias médicas veterinarias.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Información personal",
                      tabIcon: AccountBox,
                      tabContent: (
                        <ul>
                          <li>Nombre: Rolando Suazo</li>
                          <li>Edad: 28</li>
                          <li>Estudios: Universidad Central de Nicaragua</li>
                        </ul>
                      ),
                    },
                    {
                      tabButton: "Citas Reservadas",
                      tabIcon: AssignmentLate,
                      tabContent: (
                        <ul>
                          <li>
                            <p>
                              <strong>15/11/2021</strong> Vacunacion
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>22/11/2021</strong> Vacunacion
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>23/11/2021</strong> Vacunacion
                            </p>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      tabButton: "Citas realizadas",
                      tabIcon: AssignmentTurnedIn,
                      tabContent: (
                        <ul>
                          <li>
                            <p>
                              <strong>22/10/2021</strong> Vacunacion
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>26/10/2021</strong> Vacunacion
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>27/10/2021</strong> Vacunacion
                            </p>
                          </li>
                        </ul>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
