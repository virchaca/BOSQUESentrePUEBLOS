// import React from 'react'
// import forest1 from "../../../images/forest1.png";
import { Link } from "react-router-dom";
import "../../../styles/forests.scss";
import PropTypes from "prop-types";

const Forest1 = ({ allPlants }) => {


  const renderPlantsCastaño = (plants) => {
    return (
      <ul className="ulListCastaño">
        {plants
          .filter((item) => item.forest_type === "Castaño")
          .map((plant) => (
            <li key={plant.id}>
              <strong>Common Name:</strong> {plant.common_name}
              <br />
              <strong>Latin Name:</strong> {plant.latin_name}
              <br />
              <strong>Fam:</strong> {plant.fam}
              <br />
              <strong>Forest Type:</strong> {plant.forest_type}
              <br />
            </li>
          ))}
      </ul>
    );
  };
  return (
    <>
      <Link to="/Forests" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>

      <div className="forest1">
        <h1 className="chestnutTitle">BOSQUE DE CASTAÑOS</h1>
        {/* <img className='imgForest1' src={forest1} alt="" /> */}
      </div>
      <div >      
      <p className="chestnutDescription">
        Bosques donde predomina el castaño (Castanea sativa), en algunos casos
        ejemplares centenarios, además de numerosos avellanos, robles, acebedas
        -únicas en la provincia de Salamanca- y sus cerezos silvestres de más de
        20 metros de altura. Descubrimos este hermoso y desconocido bosque bajo
        la lluvia.
      </p>
      <p className="chestnutDescription">
        {" "}
        El árbol dominante de este bosque es el castaño, castannea sativa, con
        ejemplares de envergadura que crecen entre tilos(Tilia platyphyllos),
        acacias (Acacia sp), especie de origen asiático altamente invasiva y
        algunos pinos (Pinus sp). El castaño es un arbol caducifoliao, de la
        familia de las fagáceas, que crece en climas atlanticos y suelos
        silíceos. Su tronco liso y recto alcanza conn facilidad 30 metros de
        altura, con una amplia copa, que da como fruto la castaña. Algunas
        especies convivientes en estos bosques, en los sucesivos escalones
        vegetales, son: rebollos (quecus pyrenaica), castaños y pinos de
        repoblación (pinus pinaster ypinus sylvestris), abedules (betula
        celtiberica), alamaos temblones (populus tremula), serbales (sorbus
        aucuparia), avellanos (coryllus avellana), fresnos (fraxinus excelsior),
        arándanos (Vaccinium mirtyllus), majuelos (Crateagus monogyna) y plantas
        deporte hérbáceo.{" "}
      </p>
      <br />
      <div>
      <h2>Bosque de castaños</h2>
      {allPlants.length > 0 ? (
        renderPlantsCastaño(allPlants)
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
      </div>
      <p className="inProcess">Inventario en proceso de elaboración.</p>

      <Link to="/Forests" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>
    </>
  );
};

Forest1.propTypes = {
  allPlants: PropTypes.array.isRequired,
};

export default Forest1;
