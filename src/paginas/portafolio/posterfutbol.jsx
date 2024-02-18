// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

//Documentos
import pdfFutbol from "../../doc/portafolio/posterfutbol.pdf"

function Posterfutbol() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{idioma === "es" ? "Análisis del valor de mercado de jugadores de fútbol de élite" : "Football players' market value analysis"}</h1>
                <p> {idioma === "es" ? "Póster presentado en el XLIX Coloquio Argentino de Estadística, basado en un trabajo realizado junto a Agustina Margaritis, Natalia Macchi y Román Tanducci"
                    : "Poster presented at the XLIX Argentine Colloquium of Statistics, based on a study made with Agustina Margaritis, Natalia Macchi y Román Tanducci"}.</p>
                <p> {idioma === "es" ? "Código disponible en" : "Code available at"} <a href='https://github.com/SGS2000/valor-de-mercado-de-jugadores' target='blank'> GitHub</a>.</p>
            </div>
            <iframe className="docCentrado" src={pdfFutbol} title="poster"></iframe>
        </>
    )
}

export default Posterfutbol;