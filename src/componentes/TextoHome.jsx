import React from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

// CSS
import "../hojas//TextoHome.css";

//Imagenes
import foto from "../img/foto.jpg";

//Documentos
import pdf from "../doc/NuevoCV.pdf"
import pdf_Eng from "../doc/NuevoCV_Eng.pdf"

const TextoHome = () => {

    const [idioma] = useOutletContext();
    const es = idioma === "es";

    return (

        <div id='contenedor-principal'>
            <div id='contenedor-texto'>
                <h1>Santiago García Sánchez</h1>
                <p id="texto-presentacion">{es ? "Licenciado en Estadística / Analista de datos / Desarrollador Web / Programador (R, Python, Java)"
                    : "Statistician / Data Analyst / Full Stack Developer / Programmer (R, Python, Java)"}</p>
                <div id="contenedor-botones">
                    <a href={es ? pdf : pdf_Eng} download="CV Santiago Garcia Sanchez.pdf">
                        <button className="btn btn-primary btn-lg" type="button" >{es ? "Descargar CV" : "Download CV"}</button>
                    </a>
                    <Link to="/portafolio">
                        <button className="btn btn-primary btn-lg" type="button">{es ? "Ver portafolio" : "My portfolio"}</button>
                    </Link>
                </div>
            </div>
            <img
                src={foto}
                alt="Santiago Garcia Sanchez"
                id="foto-principal"
            />
        </div>

    );
};

export default TextoHome;