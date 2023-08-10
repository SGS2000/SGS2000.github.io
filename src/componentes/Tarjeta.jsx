import React from "react";
import "../hojas/Tarjeta.css";
import { useOutletContext } from "react-router-dom";
import placeholder1 from "../img/placeholder.jpg";

//Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

function Tarjeta({ titulo, texto, etiquetas, imagen = placeholder1, enlace = "#" }) {

  //Idioma
  const [idioma, setIdioma] = useOutletContext();

  return (

    <Card className="text-center" id="tarjeta-contenedor" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} id="imagen-carta" />
      <Card.Body className="tarjeta-cuerpo">
        <Card.Title> {titulo} </Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <div>
          <ListGroup variant="flush">
            <ListGroup.Item> </ListGroup.Item>
            <ListGroup.Item> </ListGroup.Item>
          </ListGroup>
          <Link to={enlace} target="_blank">
            <Button variant="primary" > {idioma === "es" ? "Ver más" : "More"}  </Button>
          </Link>
        </div>

      </Card.Body>
    </Card>

  );
};

export default Tarjeta;