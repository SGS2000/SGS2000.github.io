// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

// Imagenes
import imgPinguino from "../../img/portafolio/portafolio-pinguinos.png"
import imgPinguinoEn from "../../img/portafolio/portafolio-pinguinos-en.png"
import imgBB from "../../img/portafolio/portafolio-bb-es.png"
import imgBBEn from "../../img/portafolio/portafolio-bb-en.png"
import imgFutbol from "../../img/portafolio/portafolio-futbolgif-es.gif"
import imgFutbolEn from "../../img/portafolio/portafolio-futbolgif-en.gif"


function Rviz() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1> {idioma === "es" ? "Visualización de datos con R" : "Data visualization with R"} </h1>
                {/* Pinguinos */}
                <h2> {idioma === "es" ? "Gráfico de mancuernas" : "Dumbbell Plot"} </h2>
                <p> {idioma === "es" ? "Gráfico para visualizar las diferencias entre los machos y las hembras de tres especies de pingüino considerando cuatro variables distintas." 
                : "Chart to visualize the differences between males and females of three penguin species considering four different variables."}</p>
                <p> {idioma === "es" ? "Para la realización del gráfico se usaron los paquetes ggplot2, hrbrthemes, ggtext y patchwork. Los datos pueden obtenerse instalando el paquete palmerpenguins." 
                : "Packages ggplot2, hrbrthemes, ggtext, and patchwork were used to create the chart. Data can be obtained by installing the palmerpenguins package."}</p>
                <img src={idioma === "es" ? imgPinguino  : imgPinguinoEn } alt="dumbbell" className="imgCentrada"></img>
                {/* Breaking Bad */}
                <h2> {idioma === "es" ? "Personajes de Breaking Bad" : "Breaking Bad characters"} </h2>
                <p> {idioma === "es" ? "Número de apariciones de cada personaje en las series Breaking Bad y Better Call Saul." 
                : "Number of appearances of each character in Breaking Bad and Better Call Saul."}
                </p>
                <p> {idioma === "es" ? "Hecho con los paquetes ggplot2, grid y gridExtra. Los datos provienen de la " 
                : "Made with ggplot2, grid and gridExtra. Data comes from the "}
                <a href="https://breakingbad.fandom.com/wiki/Breaking_Bad_Wiki" target="_blank" rel="noreferrer">Breaking Bad Wiki</a>.
                <img src={idioma === "es" ? imgBB  : imgBBEn } alt="Breaking Bad grafico" className="imgCentrada"></img>
                </p>
                {/* Futbol */}
                <h2> {idioma === "es" ? "Gráfico animado: Probabilidades de ganar el Mundial de Fútbol 2022" : "Animated plot: Chances of winning the 2022 FIFA World Cup."} </h2>
                <p> {idioma === "es" ? "El siguiente gráfico muestra la evolución de las probabilidades de ganar la final del Mundial de Fútbol 2022, de acuerdo con " 
                : "The following plot displays the evolution of the chances of winning the 2022 FIFA World Cup final, according to "}
                <a href="https://projects.fivethirtyeight.com/2022-world-cup-predictions/" target="_blank" rel="noreferrer">FiveThirtyEight</a>.
                </p>
                <p> {idioma === "es" ? "El gráfico de barras fue creado con los paquetes ggplot2 y hrbrthemes. Las banderas se obtienen con los paquetes ggflags y countrycode. La animación se realiza con los paquetes gganimate y gifski. Los datos puede descargarse de " 
                : "The bar chart was created using the ggplot2 and hrbrthemes packages. Flags were obtained with ggflags and countrycode. The animation was made using gganimate and gifski. Data can be downloaded from "}
                <a href="https://github.com/fivethirtyeight/data/tree/master/world-cup-2022" target="_blank" rel="noreferrer">GitHub</a>.
                </p>
                <img src={idioma === "es" ? imgFutbol  : imgFutbolEn } alt="gif futbol" className="imgCentrada"></img>
            </div>
        </>

    )
}

export default Rviz;