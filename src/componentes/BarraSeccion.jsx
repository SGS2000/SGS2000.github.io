import React from "react";
import { useOutletContext } from "react-router-dom";

//CSS
import "../hojas/BarraSeccion.css";

function BarraSeccion({ manejarClic }) {
    //Idioma
    const [idioma] = useOutletContext();
    const es = idioma === "es";

    return (
        <div className="btn-toolbar" role="toolbar" aria-label="Barra con botones agrupados">
            <div className="btn-group" role="group" aria-label="Primer grupo">
                <button type="button" className="btn btn-secondary shadow-none" onClick={() => manejarClic(1)} > {es ? "Experiencia" : "Experience"} </button>
            </div>
            <div className="btn-group" role="group" aria-label="Segundo groupo">
                <button type="button" className="btn btn-secondary shadow-none" onClick={() => manejarClic(2)} > {es ? "Educación" : "Education"} </button>
            </div>
            <div className="btn-group" role="group" aria-label="Tercer grupo">
                <button type="button" className="btn btn-secondary shadow-none" onClick={() => manejarClic(3)} > {es ? "Cursos y capacitaciones" : "Courses"} </button>
            </div>
            <div className="btn-group" role="group" aria-label="Cuarto grupo">
                <button type="button" className="btn btn-secondary shadow-none" onClick={() => manejarClic(4)} > {es ? "Habilidades" : "Skills"} </button>
            </div>
        </div>
    );
};

export default BarraSeccion;