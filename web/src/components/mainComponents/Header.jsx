// import React from 'react'
import { useEffect, useState } from "react";
// import Forests from "../pageComponents/Forests";
import { Link } from "react-router-dom";
import "../../styles/header.scss";

function Header() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Actualizar la hora cada segundo

    return () => {
      clearInterval(interval);
    };
  }, []);
  const [classMenu, setClassMenu] = useState(true);
  const handleClick = () => {
    setClassMenu(!classMenu);
  };

  return (
    <div>
      <header className="header">
        <section className="headerSection">
          <div>
            <h1> BOSQUES entre PUEBLOS</h1>
            {/* ENTRE BOSQUES y PUEBLOS  */}
          </div>
          <section>
            <div className="dateAndTime">
              <span>{currentDateTime.toLocaleDateString()} - 
              {currentDateTime.toLocaleTimeString()}</span>
            </div>
          </section>
        </section>
        <section className="burguerMenu">
          <div onClick={handleClick}>
            <i className="menuIcon fa-solid fa-bars"></i>

            <section className={classMenu === true ? "hidden" : ""}>
              <ul className="menuList">
                <li>
                  <Link to="/" className="no-underline">
                    Inicio
                  </Link>
                </li>

                <li>
                  <Link to="/Forests" className="no-underline">
                    Bosques
                  </Link>
                </li>
                <li>
                  <Link to="/Fauna" className="no-underline">
                    Fauna
                  </Link>
                </li>
                {/* <li>
                  <Link to="/Users" className="no-underline">
                    Usuarios
                  </Link>
                </li> */}
                <li>
                  <Link to="/Card" className="no-underline">
                    Crea tu tarjeta
                  </Link>
                </li>
                <li>
                  <Link to="/UsersPics" className="no-underline">
                    Comparte tus fotos
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="no-underline">
                    Contacto
                  </Link>
                </li>
              </ul>
              {/*  como la funcion handle ordena que haga lo contrario a lo k tiene, con poner aquí que ejecute la funcion handle, hará lo contrario a lo k hay, es decir, cierra lista y muestra icono */}
            </section>
          </div>
          <div>
            <i className="fa-solid fa-tree"></i>
            <i className="fa-brands fa-pagelines"></i>
            <i className="fa-solid fa-wind"></i>
            <i className="fa-solid fa-feather"></i>
            <i className="fa-solid fa-bug"></i>
            <i className="fa-solid fa-mountain-sun"></i>
            <i className="fa-solid fa-pencil"></i>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Header;
