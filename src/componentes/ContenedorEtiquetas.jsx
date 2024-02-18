import React from "react";

//CSS
import "../hojas/ContenedorEtiquetas.css";

//Componentes
import Etiqueta from '../componentes/Etiqueta';

function ContenedorEtiquetas({ titulo, etiquetas }) {
    return (
        <>
            <div className="contenedor-de-etiquetas">
                <p className="texto-tema-etiqueta"><b>{titulo}</b>:</p> {/* Título del grupo */}
                {/* Mostrar todas las etiquetas */}
                {etiquetas.map(tag => (
                    <Etiqueta
                        id={tag.id}
                        etiqueta={tag.etiqueta}
                        manejarClic={tag.manejarClic}
                        activada={tag.activada}
                        key={tag.id}
                    />
                ))}
            </div>
        </>
    )
}

export default ContenedorEtiquetas;