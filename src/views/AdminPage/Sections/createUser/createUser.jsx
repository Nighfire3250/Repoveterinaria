/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import swal from "sweetalert";
import validator from "validator";
import "./createUser.scss";

export default function createUser () {
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [returnedData, setReturnedData] = useState(["hello"]);
  const [employee, setEmployee] = useState({
    nombre: "",
    apellido:"",
    usuario: "",
    rol: "",
    contrasena: "",
    direccion:"",
  });

  const setInput = (e) => {
    const {name,value} = e.target;
    console.log(value);
    setEmployee(prevState => ({
      ...prevState,
      [name]:value
    }));
  }
  const createData = async () => {
    if (errorMessage === "La contraseña es segura") {
      console.log(employee);
      const newData = await fetch("/hello", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...employee
        }),
      }).then((res) => res.json());
      // eslint-disable-next-line no-undef
      console.log(newData[0]);
      setReturnedData(newData[0]);
      swal("Éxito","Usuario creado","success");
    }else{
      swal("Error","Contraseña muy debil","error");
    };
  };
  const handleChange = event => {
    const result = event.target.value.replace(/[^a-z]/gi, '');
    const {name,value} = event.target;
    console.log(value);
    setMessage(result);
  };

  const validate = (e) => {
    if (validator.isStrongPassword(e, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('La contraseña es segura')
    } else {
      setErrorMessage('La contraseña no es segura')
    }
    console.log(e);
  }

    return(
        <div className="newUser">
            <h1 className="newUserTitle">Nuevo Usuario</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Nombre Usuario</label>
                    <input type="text" name="usuario" placeholder="Usuario" onChange={setInput}></input>
                </div>
                <div className="newUserItem">
                    <label>Nombre</label>
                    <input type="text" name="nombre" placeholder="Nombre" onChange={setInput}></input>
                </div>
                <div className="newUserItem">
                    <label>Apellido</label>
                    <input type="text" name="apellido" placeholder="Apellido" onChange={setInput}></input>
                </div>
                <div className="newUserItem">
                    <label>Contraseña</label>
                    <input type="text" name="contrasena" placeholder="Contraseña" onChange={(e) => validate(e.target.value)}></input>
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{errorMessage}</span>
                </div>
                <div className="newUserItem">
                    <label>Dirección</label>
                    <input type="text" name="direccion" placeholder="Dirección" onChange={setInput}></input>
                </div>
            </form>
            <div className="userRolBox">
                    <label>Rol</label>
                    <div className="userUpdateBox">
                        <label>Adminstrador</label>
                        <input 
                          type="radio"
                          value="Administrador"
                          className="userUpdateInputBox"
                          name="rol"
                          onChange={setInput}
                        />
                    </div>
                    <div className="userUpdateBox">
                        <label>Veterinario</label>
                        <input
                          type="radio"
                          value="Veterinario"
                          className="userUpdateInputBox"
                          name="rol"
                          onChange={setInput}
                    />
                    </div>
                    <div className="userUpdateBox">
                        <label>Cliente</label>
                        <input
                          type="radio"
                          value="Cliente"
                          className="userUpdateInputBox"
                          name="rol"
                          onChange={setInput}
                        />
                    </div>
                </div>
            <div className="buttonUser">
                    <button className="newUserButton" onClick={() => createData()}>Crear</button>
            </div>
        </div>
    );
}