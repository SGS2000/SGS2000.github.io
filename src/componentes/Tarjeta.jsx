import React from "react";
import { useOutletContext } from "react-router-dom";

//CSS
import "../hojas/Tarjeta.css";

//Imágenes
import placeholder1 from "../img/placeholder.jpg";

//Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Tarjeta({ titulo, texto, etiquetas, imagen = placeholder1, enlace = "#" }) {

  //Idioma
  const [idioma] = useOutletContext();
  const es = idioma === "es";

  return (
    <Card className="text-center" id="tarjeta-contenedor">
      <div id="tarjeta-imagen">
        <Card.Img variant="top" src={imagen} id="imagen-carta" />
      </div>
      <Card.Body id="tarjeta-cuerpo">
        <Card.Title> {titulo} </Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <div>
          <hr></hr>
          <Link to={enlace} target="_blank">
            <Button id="boton-tarjeta" variant="primary" > {es ? "Ver más" : "More"}  </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Tarjeta;