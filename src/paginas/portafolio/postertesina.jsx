// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

//Documentos
import pdfTesinaPoster from "../../doc/portafolio/postertesina.pdf"

function Postertesina() {
    //Idioma
    const [idioma] = useOutletContext();
    const es = idioma === "es";

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{es ? "Póster para Jornadas" : "Poster for conference"}</h1>
                <p>
                    {es ? "Póster presentado en las "
                        : "Poster presented at the "}
                    <a href='https://www.fcecon.unr.edu.ar/seccion/investigacion/jornadas-de-jovenes-investigadores' target='blank'> {es ? 'V Jornadas de Jóvenes Investigadores (FCEyE)' :
                        'V Young Researchers Conference'}</a>
                    {es ? " basado en mi tesina de grado"
                        : " based on my undergraduate thesis"}.
                </p>
            </div>
            <iframe className="docCentrado" src={pdfTesinaPoster} title="poster"></iframe>
        </>
    )
}

export default Postertesina;