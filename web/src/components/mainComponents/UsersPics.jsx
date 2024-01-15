// import React from 'react'

import "../../styles/usersPics.scss";

import pic6 from "../../images/usersPictures/6.jpg";
import pic2 from "../../images/usersPictures/2.jpg";
import boletus from "../../images/usersPictures/boletus.png";
import pic4 from "../../images/usersPictures/4.jpg";
import pic8 from "../../images/usersPictures/8.jpg";
import flores from "../../images/usersPictures/flores.jpg";
import pic7 from "../../images/usersPictures/7.jpg";

import { useState } from "react";
import GetAvatar from "../GetAvatar";
import Profile from "../Profile";

function UsersPics() {
  const [avatar, setAvatar] = useState("");
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };
  return (
    <div>
      <section className="usersPictures">
        <p className="usersForestPic">
          <img src={pic6} alt="" />
        </p>
        <div className="usersPicturesHeader">
          <div className="usersPicText">
            <h3 className="h3Foro">Sube aqui tus fotos...</h3>
            <p>
              Prueba la foto que quieras compartirnos en el botón de{" "}
              <span className="spanUploadPic"> sube tu foto </span>.
            </p>
            <p>
              Cuando lo tengas claro, envíanosla{" "}
              <a href="mailto:virginia.alvarez82@gmail.com?&subject=Subir foto usuario - Contacto &body=Buenos días, me gustaría compartir esta foto con vosotros.
                  ">
                <button className="sendPhotoBtn">pulsando aqui</button>
              </a>
            </p>
            <p>La revisaremos y la subiremos!</p>
          </div>
          <div className="uploadPic">
            <Profile avatar={avatar} />
            <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />
          </div>
        </div>
        <div className="usersPhoto">
          <img className="imgUsersPics" src={pic2} alt="" />
          <img className="imgUsersPics" src={boletus} alt="" />
          <img className="imgUsersPics" src={pic4} alt="" />
          <img className="imgUsersPics" src={pic8} alt="" />
          <img className="imgUsersPics" src={flores} alt="" />
          <img className="imgUsersPics" src={pic7} alt="" />
        </div>
      </section>
    </div>
  );
}

export default UsersPics;