// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

//Imágenes
import imgRay from "../../img/portafolio/portafolio-3d-rayshader.png"
import imgRayEn from "../../img/portafolio/portafolio-3d-rayshader-en.png"

function Plots3D() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{idioma === "es" ? "Gráficos 3D en R" : "3D plots in R"}</h1>

                <p> {idioma === "es" ? "Utilizando un conjunto de datos con información de múltiples países y territorios, se desea realizar un gráfico de dispersión en tres dimensiones mostrando la relación entre tres variables: alfabetización (porcentaje de la población que sabe leer y escribir), esperanza de vida al nacer (en años) y PBI per cápita PPA (en dólares). Estas variables son utilizadas para la construcción de medidas tales cómo el índice de desarrollo humano (IDH)."
                    : "Using a dataset with information from multiple countries and territories, the goal is to create a 3D scatter plot to show the relationship between three variables: literacy (percentage of the population that can read and write), life expectancy at birth (in years), and GDP per capita PPP. These variables are used to construct measures such as the Human Development Index (HDI)."}</p>
                <p> {idioma === "es" ? "A continuación, se muestran distintos paquetes de R que permiten crear gráficos como el indicado. Los datos provienen del "
                    : "The following are different R packages that allow the user to create graphs like the specified one. Data comes from the "}
                    <a href='https://www.cia.gov/the-world-factbook/' target='blank'> <i>CIA World Factbook</i></a>.
                </p>

                <h2> {idioma === "es" ? "Paquete rayshader" : "rayshader package"} </h2>
                <p>{idioma === "es" ? "rayshader es un paquete de código abierto para producir visualizaciones de datos 2D y 3D en R. Utilizando la función plot_gg(), es posible transformar cualquier objeto ggplot2 en un gráfico 3D. Tutoriales disponibles en el " :
                    "rayshader is an open source package for producing 2D and 3D data visualizations in R. Using the plot_gg() function, it is possible to transform any ggplot2 object into a 3D plot. Tutorials are available on the "}
                    <a href='https://www.rayshader.com/' target='blank'>{idioma === "es" ? "sitio oficial del paquete" : "package's official website"}</a>.
                </p>
                <img src={idioma === "es" ? imgRay : imgRayEn}alt="paquete rayshader" className="imgCentrada"></img>

                <h2> {idioma === "es" ? "Paquete rgl" : "rgl package"} </h2>
                <p>{idioma === "es" ? "Este paquete permite crear gráficos interactivos en 3D. Disponible en " :
                    "This package provides functions for 3D interactive graphics. Available at "}
                    <a href='https://cran.r-project.org/web/packages/rgl/index.html' target='blank'>CRAN</a>.
                </p>
                <iframe src={idioma === "es" ? "html/R3D.html" : "html/R3DEn.html"} width="1000vw" height="750vh" title="Scatterplot 3D"></iframe>

                <h2> {idioma === "es" ? "Paquete Plotly" : "Plotly package"} </h2>
                <p>{idioma === "es" ? "Paquete para crear distintos tipos de gráficos interactivos. Ejemplos disponible en su " :
                    "Package to create interactive graphs. Basic examples are available on the package's "}
                    <a href='https://plotly.com/r/3d-scatter-plots/' target='blank'> {idioma === "es" ? "sitio oficial" : "official website"}</a>.
                </p>

                <iframe src={idioma === "es" ? "html/plotlyScatter.html" : "html/plotlyScatterEn.html"} width="1000vw" height="750vh" title="Plotly Scatter"></iframe>
            </div>
        </>
    )
}

export default Plots3D;