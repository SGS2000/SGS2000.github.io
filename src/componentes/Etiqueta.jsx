import React from "react";

//CSS
import "../hojas/Etiqueta.css";

function Etiqueta({ id, etiqueta, manejarClic }) {
  return (
    <div className="etiqueta-boton">
      {/* Checkbox (invisible) */}
      <input
        type="checkbox"
        className="btn-check"
        id={id}
        autoComplete="off"
        onClick={() => manejarClic(id)}
      />
      {/* Botón y texto */}
      <label className="btn btn-outline-danger shadow-none"
        htmlFor={id}
      >
        <b>{etiqueta}</b>
      </label>
    </div>
  );
}

export default Etiqueta;