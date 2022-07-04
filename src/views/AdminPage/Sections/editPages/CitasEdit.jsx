/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./CitasEdit.scss";
import cat1 from "assets/img/faces/chele.jpg";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BadgeIcon from "@mui/icons-material/Badge";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PublishIcon from "@mui/icons-material/Publish";

export default function CitasEdit() {
    const [employee, setEmployee] = useState({
        nombre: "",
        observaciones:"",
        vacunas: "",
        enfermedades: "",
    });

    const setInput = (e) => {
        const {name,value} = e.target;
        console.log(value);
        setEmployee(prevState => ({
          ...prevState,
          [name]:value
        }));
    }

    const updateCita = async () => {
        console.log(employee);
        fetch("/citaUpdate", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
        },
          body: JSON.stringify({
            ...employee
          }),
        })
        // eslint-disable-next-line no-undef
        swal("Éxito","Cita Actualizada","success");
    };

    return(
    <div className="sectionEdit">
      <div className="sectionTitleContainer">
        <h1 className="userTitle">Cita</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img className="userShowImg" src={cat1} alt="" />
            <div className="userShotTopTitle">
              <span className="userShowName">Chele</span>
              <span className="userShowUsername">Jairo</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalle</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Chele</span>
            </div>
            <div className="userShowInfo">
              <BadgeIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Americano Pelo Corto</span>
            </div>
            <span className="userShowTitle">Cita</span>
            <div className="userShowInfo">
              <CalendarMonthIcon className="userShowIcon" />
              <span className="userShowInfoTitle">4/7/2022</span>
            </div>
            <div className="userShowInfo">
              <SmartphoneIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+505 89928793</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Observaciones</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Generales</label>
                <input
                  type="text"
                  placeholder="Generales"
                  onChange={setInput}
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Vacunas</label>
                <input
                  type="text"
                  placeholder="Vacunas"
                  onChange={setInput}
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Enfermedades</label>
                <input
                  type="text"
                  placeholder="Enfermedades"
                  onChange={setInput}
                  className="userUpdateInput"
                ></input>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="UserUpdateImg" src={cat1} alt="" />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton" onClick={() => updateCita()} >Actualizar</button>
            </div>
          </form>
          <span className="userUpdateTitle">Dar de alta</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
                <label>Si</label>
                <input
                  type="radio"
                  value="Si"
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
