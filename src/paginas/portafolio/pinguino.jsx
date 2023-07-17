// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

// Imagenes
import imgPinguino from "../../img/portafolio/portafolio-pinguinos.png"
import imgPinguinoEn from "../../img/portafolio/portafolio-pinguinos-en.png"

function Pinguino() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1> {idioma === "es" ? "Gráfico de mancuernas con R" : "Dumbbell Plot with R"} </h1>
                <p> {idioma === "es" ? "Gráfico para visuazlizar las diferencias entre los machos y las hembras de tres especies de pingüino considerando cuatro variables distintas." 
                : "Chart to visualize the differences between males and females of three penguin species considering four different variables."}</p>
                <p> {idioma === "es" ? "Para la realización del gráfico se usaron los paquetes ggplot2, hrbrthemes, ggtext y patchwork. Los datos pueden obtenerse instalando el paquete palmerpenguins." 
                : "Packages ggplot2, hrbrthemes, ggtext, and patchwork were used to create the chart. Data can be obtained by installing the palmerpenguins package."}</p>
                <img src={idioma === "es" ? imgPinguino  : imgPinguinoEn } alt="dumbbell" className="imgCentrada"></img>
            </div>
        </>

    )
}

export default Pinguino;