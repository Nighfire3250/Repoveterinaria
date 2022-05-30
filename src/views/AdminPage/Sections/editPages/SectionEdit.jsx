import React from "react";
import "./SectionEdit.scss";
import team1 from "assets/img/faces/snow.jpg";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BadgeIcon from "@mui/icons-material/Badge";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PublishIcon from "@mui/icons-material/Publish";

export default function SectionEdit() {
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
              <span className="userShowName">Jon Snow</span>
              <span className="userShowUsername">user1</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalle de cuenta</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">UsuarioJon</span>
            </div>
            <div className="userShowInfo">
              <BadgeIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Administrador</span>
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
                  placeholder="Jon"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Apellido</label>
                <input
                  type="text"
                  placeholder="Snow"
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
              <button className="userUpdateButton">Actualizar</button>
            </div>
          </form>
          <span className="userUpdateTitle">Roles</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateBox">
                <label>Adminstrador</label>
                <input
                  type="checkbox"
                  value="administrador"
                  className="userUpdateInputBox"
                />
              </div>
              <div className="userUpdateBox">
                <label>Veterinario</label>
                <input
                  type="checkbox"
                  value="veterinario"
                  className="userUpdateInputBox"
                />
              </div>
              <div className="userUpdateBox">
                <label>Cliente</label>
                <input
                  type="checkbox"
                  value="veterinario"
                  className="userUpdateInputBox"
                />
              </div>
            </div>
          </form>
          <span className="userUpdateTitle">Bloqueado</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateBox">
                <label>Si</label>
                <input
                  type="checkbox"
                  value="administrador"
                  className="userUpdateInputBox"
                />
              </div>
              <div className="userUpdateBox">
                <label>No</label>
                <input
                  type="checkbox"
                  value="veterinario"
                  className="userUpdateInputBox"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
