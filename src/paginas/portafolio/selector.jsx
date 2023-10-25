// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

//Documentos
import pdfLatinR from "../../img/portafolio/selectorggplot.pdf"

function Selector() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{idioma === "es" ? "Selector de temas para ggplot2" : "Theme Selector for ggplot2"}</h1>
                <p> 
                    {idioma === "es" ? "App Shiny que permite al usuario cargar un objeto ggplot y aplicarle distintos temas de manera dinámica." : 
                    "Shiny App that allows the user to load a ggplot object and dynamically apply different themes."}
                </p>
                <p> 
                    {idioma === "es" ? "Presentada como charla relámpago en " : "Presented as a lightning talk at "}
                    <a href={idioma === "es" ? "https://latin-r.com/" : "https://latin-r.com/en/"} target="blank">LatinR 2023</a>.
                    {idioma === "es" ? " La aplicación puede visitarse " : " The Shiny app can be visited "}
                    <a href="https://sgs2000.shinyapps.io/themeselector/" target="blank"> {idioma === "es" ? "aquí" : "here"}</a>, 
                    {idioma === "es" ? " mientras que el código utilizado está disponible en " : " while the R code is available in "}
                    <a href="https://github.com/SGS2000/ggplot2-theme-selector" target="blank">GitHub</a>.
                </p>
                <h2>{idioma === "es" ? "Resumen" : "Summary"}</h2>
                <iframe src= {pdfLatinR} width="100%" height="750px"  title="selector de temas"></iframe>


            </div>
        </>
    )
}

export default Selector;