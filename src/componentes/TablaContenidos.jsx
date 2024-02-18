import React from "react";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

//CSS
import "../hojas/TablaContenidos.css";

function TablaContenidos() {
    //Idioma
    const [idioma] = useOutletContext();

    //Array para guardar encabezados
    const [encabezados, setEncabezados] = useState([])

    //Buscar encabezados en la página y guardar id y nivel
    useEffect(() => {
        const elementos = Array.from(document.querySelectorAll("h2, h3, h4"))
            .filter((elem) => elem.id !== "tituloTabla")
            .map((elem) => ({
                id: elem.id,
                texto: elem.innerText,
                nivel: Number(elem.nodeName.charAt(1))
            }))
        setEncabezados(elementos)
    },
        // Añadir idioma como dependencia
        [idioma]
    )

    //Asignar clase según nivel
    const getClassName = (nivel) => {
        switch (nivel) {
            case 2:
                return 'head2'
            case 3:
                return 'head3'
            case 4:
                return 'head4'
            default:
                return null
        }
    }

    return (
        <div id="contenedorTabla">
            <h2 id="tituloTabla"> {idioma === "es" ? "Tabla de contenidos" : "Contents"} </h2>
            <ul>
                {encabezados.map(encabezado => (
                    <li
                        key={encabezado.id}
                        className={getClassName(encabezado.nivel)}
                    >
                        {/* Link a la sección */}
                        <Link to={`#${encabezado.id}`}
                            onClick={(e) => {
                                //Scrolling más suave
                                e.preventDefault()
                                document.querySelector(`#${encabezado.id}`).scrollIntoView({ behavior: "smooth" })
                            }}
                        >
                            {encabezado.texto}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TablaContenidos
