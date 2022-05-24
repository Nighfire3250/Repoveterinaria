import React from "react";
import "./SectionEdit.scss";
import team1 from "assets/img/faces/snow.jpg";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BadgeIcon from "@mui/icons-material/Badge";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

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
        <div className="userUpdate"></div>
      </div>
    </div>
  );
}
