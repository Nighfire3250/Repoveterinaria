/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import DatePicker from "react-date-picker";
import swal from "sweetalert";
import "./WorkSection.scss";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  const [returnedData, setReturnedData] = useState(["hello"]);
  const [value, onChange] = useState(new Date());
  const [message, setMessage] = useState('');
  const [paciente, setPaciente] = useState({
    id: 1,
    nombre: "",
    especie: "",
    raza: "",
    observaciones: "",
  });

  const setInput = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setPaciente(prevState => ({
      ...prevState,
      [name]:value
    }));
  }

  const fetchData = async () => {
    console.log(paciente);
    const newData = await fetch("/pacientes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: paciente.id,
        firstName: paciente.nombre,
      }),
    }).then((res) => res.json());
    console.log(newData);
    console.log(message);
    // eslint-disable-next-line no-undef
    console.log(newData[0]);
    setReturnedData(newData[0]);
    setMessage(returnedData.observaciones);
    console.log(message);
  };

  function alert() {
    swal("Éxito","Agendado","success");
  };

  function setMess() {
    setMessage('Peso 40kg');
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Buscador</h2>
          <h4 className={classes.description}>
            ¿Como puedo usar el Consultorio virtual?. Introduzca
            su nombre, el nombre de su mascota tal y como aparece en la
            hoja de consulta, luego precione el botón Buscar. Si desea Agendar
            una cita presiona el botón Agendar
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                {/*<CustomInput
                  labelText="Nombre del Cliente"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />*/}
                <input className="inputPersonal" name="usuario" placeholder="Nombre del Cliente" type="text" onChange={setInput}></input>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                {/*<CustomInput
                  labelText="Nombre de la Mascota"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />*/}
                <input className="inputPersonal" name="paciente" placeholder="Nombre de la mascota" type="text" onChange={setInput}></input>
              </GridItem>
              {/*<CustomInput
                labelText="Datos"
                id="message"
                value="30"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />*/}
              <input className="inputDatos" type="text" value={message}></input>
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary" onClick={() => fetchData()}>Buscar</Button>
                <Button color="primary" onClick={alert}>Agendar</Button>
              </GridItem>
              <DatePicker onChange={onChange} value={value} minDate={new Date()} />
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
