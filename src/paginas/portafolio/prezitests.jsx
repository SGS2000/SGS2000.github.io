// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

// Imagenes
import videoPrezi from "../../video/portafolio/portafolio-tests-video.mp4"

function PreziTests() {
    //Idioma
    const [idioma] = useOutletContext();
    const es = idioma === "es";

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{es ? "Comparación de dos tratamientos" : "Comparing Two Treatments"}</h1>
                <p>
                    {es ? "Presentación sobre tests para comparar dos tratamientos en muestras dependientes e independientes, creada con " : "Presentation about tests for comparing two treatments in dependent and independent samples, created with "}
                    <a href="https://prezi.com/" target="_blank" rel="noreferrer">Prezi</a>.
                </p>
                <p>
                    {es ? "Se presentan pruebas para comparar medias, variancias y proporciones. Además, se mencionan alternativas no paramétricas y se realiza un ejercicio extraído del libro " :
                        "Tests to compare means, variances and proportions are presented. In addition, non-parametric alternatives are mentioned and an exercise from the book "}
                    <a href="https://ri.conicet.gov.ar/handle/11336/109376" target="_blank" rel="noreferrer"><i>Problemas de Estadística aplicados a la Biología y la Química</i></a>
                    {es ? "." : " is solved."}
                </p>
                <video className="video" controls >
                    <source src={videoPrezi} type="video/mp4" />
                    {es ? "Ha ocurrido un error, el video no puede reproducirse" : "An error has occurred; the video cannot be played."}
                </video>
            </div>
        </>
    )
}

export default PreziTests;