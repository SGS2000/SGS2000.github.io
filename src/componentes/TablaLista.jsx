import React from "react";

//CSS
import "../hojas/TablaLista.css";

function TablaLista({ titulo, imagen, texto }) {

  return (
    <div className="tabla-lista-contenedor">
      <div className="tabla-lista-titulo">{titulo}</div>
      <div className="tabla-lista-contenido">
        <div className="tabla-lista-imagen"> {imagen} </div>
        <div className="tabla-lista-texto">{texto}</div>
      </div>
    </div>
  );
}

export default TablaLista;