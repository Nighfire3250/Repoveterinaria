import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Consultorio Virtual</h2>
          <h5 className={classes.description}>
            Bienvenido al consultorio virtual de la veterinaria mundo mascota en
            esta seccion podras ver los reultados obtenidos te tu mascota.Se
            recomienta tener a mano el numero de la consulta, por favor leer las
            sugerencias mostradas acontinuacion agracias por preferirnos.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="Estamos para servile en todo momento del dia cualquier duda o pregunta sobre algun medicamento o consultas puede hacer al numero de Whast app."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Seguridad"
              description="La informacion aqui presentada es basica y solamente el presonal de nuestra veterinaria tiene acceso a la documentacion completa, guardamos su seguridad"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Compromiso"
              description="Cada uno de los elementos de nuestro personal esta altamente calificado para responder y sugerir medicamentos, consultas, preguntas etc. Aqui su bienestar es primero"
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
