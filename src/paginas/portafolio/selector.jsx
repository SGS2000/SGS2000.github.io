// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

//Documentos
import pdfLatinR from "../../doc/portafolio/selectorggplot.pdf"

//Imágenes
import videoShiny from "../../video/portafolio/portafolio-shiny-video.mp4"

function Selector() {
    //Idioma
    const [idioma] = useOutletContext();
    const es = idioma === "es";

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{es ? "Selector de temas para ggplot2" : "Theme Selector for ggplot2"}</h1>
                <p>
                    {es ? "App Shiny que permite al usuario cargar un objeto ggplot y aplicarle distintos temas de manera dinámica." :
                        "Shiny App that allows the user to load a ggplot object and dynamically apply different themes."}
                </p>
                <p>
                    {es ? "Presentada como charla relámpago en " : "Presented as a lightning talk at "}
                    <a href={es ? "https://latin-r.com/" : "https://latin-r.com/en/"} target="blank">LatinR 2023</a>.
                    {es ? " La aplicación puede visitarse " : " The Shiny app can be visited "}
                    <a href="https://sgs2000.shinyapps.io/themeselector/" target="blank"> {es ? "aquí" : "here"}</a>,
                    {es ? " mientras que el código utilizado está disponible en " : " while the R code is available in "}
                    <a href="https://github.com/SGS2000/ggplot2-theme-selector" target="blank">GitHub</a>.
                </p>
                <h2>{es ? "Resumen" : "Summary"}</h2>
                <iframe className="docCentrado" src={pdfLatinR} title="selector de temas"></iframe>
                <h2>Video</h2>
                <video className="videoCentrado" controls >
                    <source src={videoShiny} type="video/mp4" />
                    {es ? "Ha ocurrido un error, el video no puede reproducirse." : "An error has occurred; the video cannot be played."}
                </video>
            </div>
        </>
    )
}

export default Selector;