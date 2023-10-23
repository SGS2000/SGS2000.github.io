import React from "react";
import "../hojas/TablaLista.css";

function TablaLista(props) {

    return (
        <div className="tabla-lista-contenedor">
            <div className="tabla-lista-titulo">{props.titulo}</div>
            <div className="tabla-lista-contenido">
                <div className="tabla-lista-imagen"> {props.imagen} </div>
                <div className="tabla-lista-texto">{props.texto}</div>
            </div>
        </div>


    );
}



export default TablaLista;