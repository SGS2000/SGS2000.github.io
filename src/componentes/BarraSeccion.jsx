import React from "react";
import { useOutletContext } from "react-router-dom";

//CSS
import "../hojas/BarraSeccion.css";

function BarraSeccion({ manejarClic }) {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary shadow-none" onClick={() => manejarClic(1)} > {idioma === "es" ? "Información básica" : "Basic information"} </button>
            </div>
            <div className="btn-group" role="group" aria-label="Second group">
                <button type="button" className="btn btn-secondary shadow-none" onClick={() => manejarClic(2)} > {idioma === "es" ? "Experiencia" : "Experience"} </button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="btn btn-secondary shadow-none" onClick={() => manejarClic(3)} > {idioma === "es" ? "Educación" : "Education"} </button>
            </div>
            <div className="btn-group" role="group" aria-label="Fourth group">
                <button type="button" className="btn btn-secondary shadow-none" onClick={() => manejarClic(4)} > {idioma === "es" ? "Cursos y capacitaciones" : "Courses"} </button>
            </div>
            <div className="btn-group" role="group" aria-label="Fifth group">
                <button type="button" className="btn btn-secondary shadow-none" onClick={() => manejarClic(5)} > {idioma === "es" ? "Habilidades" : "Skills"} </button>
            </div>
        </div>
    );
};

export default BarraSeccion;