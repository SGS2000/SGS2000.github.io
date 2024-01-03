import React from "react";
import "../hojas/TablaContenidos.css";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function TablaContenidos() {
    //Idioma
    const [idioma] = useOutletContext();

    //Array para guardar encabezados
    const [headings, setHeadings] = useState([])

    //Buscar encabezados en la página y guardar id y nivel
    useEffect(() => {
        const elements = Array.from(document.querySelectorAll("h2, h3, h4"))
            .filter((elem) => elem.id !== "tituloTabla")
            .map((elem) => ({
                id: elem.id,
                text: elem.innerText,
                level: Number(elem.nodeName.charAt(1))
            }))
        setHeadings(elements)
    }, 
    // Añadir idioma como dependencia
    [idioma]
    )

    //Asignar clase según nivel
    const getClassName = (level) => {
        switch (level) {
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
        <div className="contenedorTabla">
            <h2 id="tituloTabla"> {idioma === "es" ? "Tabla de contenidos" : "Contents"} </h2>
            <ul>
                {headings.map(heading => (
                    <li
                        key={heading.id}
                        className={getClassName(heading.level)}
                    >
                        {/* Link a la sección */}
                        <Link to={`#${heading.id}`}
                            onClick={(e) => {
                                //Scrolling más suave
                                e.preventDefault()
                                document.querySelector(`#${heading.id}`).scrollIntoView({
                                    behavior: "smooth"
                                })
                            }}
                        >
                            {heading.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TablaContenidos
