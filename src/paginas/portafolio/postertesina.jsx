// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

//Documentos
import pdfTesinaPoster from "../../doc/portafolio/postertesina.pdf"

function Postertesina() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{idioma === "es" ? "Póster para Jornadas" : "Poster for conference"}</h1>
                <p> {idioma === "es" ? "Póster presentado en la V Jornadas de Jóvenes Investigadores de la UNR, basado en mi tesina de grado." 
                : "Poster presented at the V Young Researchers Conference, based on my undergraduate thesis."}</p>
            </div>
            <iframe src= {pdfTesinaPoster} width="100%" height="750px"  title="poster"></iframe>
        </>
    )
}

export default Postertesina;