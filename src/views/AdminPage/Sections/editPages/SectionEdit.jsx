/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./SectionEdit.scss";
import team1 from "assets/img/faces/snow.jpg";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BadgeIcon from "@mui/icons-material/Badge";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PublishIcon from "@mui/icons-material/Publish";

export default function SectionEdit() {
  const [returnedData, setReturnedData] = useState(["hello"]);
  const [isChecked, setIsChecked] = useState(false);
  const [gender, setGender] = useState("Male");

  function onChangeValue(event) {
    setGender(event.target.value);
    console.log(event.target.value);
  }
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const [employee, setEmployee] = useState({
    idUsuario: 1,
    nombre: "",
    nomUsuario: "",
    rol: "",
    estado: "",
  });
  const fetchData = async () => {
    console.log(employee);
    const newData = await fetch("/api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: employee.idUsuario,
        firstName: employee.nombre,
        usuario: employee.nomUsuario,
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
  return (
    <div className="sectionEdit">
      <div className="sectionTitleContainer">
        <h1 className="userTitle">Editar Usuario</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img className="userShowImg" src={team1} alt="" />
            <div className="userShotTopTitle">
              <span className="userShowName">{returnedData.nombre} {returnedData.apellido}</span>
              <span className="userShowUsername">{returnedData.nomUsuario}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalle de cuenta</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{returnedData.nomUsuario}</span>
            </div>
            <div className="userShowInfo">
              <BadgeIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{returnedData.rol}</span>
            </div>
            <span className="userShowTitle">Contacto</span>
            <div className="userShowInfo">
              <CalendarMonthIcon className="userShowIcon" />
              <span className="userShowInfoTitle">15/11/1996</span>
            </div>
            <div className="userShowInfo">
              <SmartphoneIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+505 89928793</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Editar</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Nombre</label>
                <input
                  type="text"
                  placeholder="Jairo"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Apellido</label>
                <input
                  type="text"
                  placeholder="Montiel"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Dirección</label>
                <input
                  type="text"
                  placeholder="Bello Amanecer"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Contraseña</label>
                <input
                  type="password"
                  placeholder="***"
                  className="userUpdateInput"
                ></input>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="UserUpdateImg" src={team1} alt="" />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton" onClick={() => fetchData()} >Actualizar</button>
            </div>
          </form>
          <span className="userUpdateTitle">Roles</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
                <label>Adminstrador</label>
                <input
                  type="radio"
                  value="Administrador"
                  name="rol"
                  className="userUpdateInputBox"
                />
                <label>Veterinario</label>
                <input
                  type="radio"
                  value="Veterinario"
                  name="rol"
                  onChange={handleOnChange}
                  className="userUpdateInputBox"
                />
                <label>Cliente</label>
                <input
                  type="radio"
                  value="Cliente"
                  name="rol"
                  onChange={handleOnChange}
                  className="userUpdateInputBox"
                />
            </div>
          </form>
          <span className="userUpdateTitle">Bloqueado</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
                <label>Si</label>
                <input
                  type="radio"
                  value="Si"
                  name="block"
                  className="userUpdateInputBox"
                />
                <label>No</label>
                <input
                  type="radio"
                  value="No"
                  name="block"
                  className="userUpdateInputBox"
                />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
