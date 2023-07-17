import React from "react";
import "../hojas/Etiqueta.css";

function Etiqueta(props) {

  return (
    <div className="etiqueta-boton">
        <input type="checkbox" className="btn-check" id={props.id} autoComplete="off" onClick={() =>props.manejarClic(props.id)}/> 
        <label  className="btn btn-outline-danger shadow-none" htmlFor={props.id}> <b>{props.etiqueta}</b> </label>
    </div>

  );
};

export default Etiqueta;