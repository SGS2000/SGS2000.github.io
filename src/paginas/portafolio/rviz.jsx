// React
import { useOutletContext } from "react-router-dom";

//Componentes
import TablaContenidos from '../../componentes/TablaContenidos';

// CSS
import "../../hojas/PortafolioEstilo.css"

// Imagenes
import imgPinguino from "../../img/portafolio/portafolio-pinguinos.png"
import imgPinguinoEn from "../../img/portafolio/portafolio-pinguinos-en.png"
import imgBB from "../../img/portafolio/portafolio-bb-es.png"
import imgBBEn from "../../img/portafolio/portafolio-bb-en.png"
import imgFutbol from "../../img/portafolio/portafolio-futbolgif-es.gif"
import imgFutbolEn from "../../img/portafolio/portafolio-futbolgif-en.gif"
import img538 from "../../img/portafolio/portafolio-538.png"
import imgSimpsons from "../../img/portafolio/portafolio-linea-tiempo.png"
import imgSectores from "../../img/portafolio/portafolio-sectores.png"
import imgSectoresEn from "../../img/portafolio/portafolio-sectores-en.png"
import imgCometa from "../../img/portafolio/portafolio-cometa.svg"


function Rviz() {
    //Idioma
    const [idioma] = useOutletContext();
    const es = idioma === "es";

    return (
        <>
            <div className="contenedorPrincipal">
                <h1> {es ? "Visualización de datos con R" : "Data visualization with R"} </h1>
                <TablaContenidos />

                {/* Pinguinos */}
                <h2 id="pinguinos"> {es ? "Gráfico de mancuernas: Pingüinos del archipiélago Palmer" : "Dumbbell plot: Palmer Penguins"} </h2>
                <p> {es ? "Gráfico para visualizar las diferencias entre los machos y las hembras de tres especies de pingüino considerando cuatro variables distintas."
                    : "Chart to visualize the differences between males and females of three penguin species considering four different variables."}</p>
                <p> {es ? "Para la realización del gráfico se usaron los paquetes ggplot2, hrbrthemes, ggtext y patchwork. Los datos pueden obtenerse instalando el paquete palmerpenguins."
                    : "Packages ggplot2, hrbrthemes, ggtext, and patchwork were used to create the chart. Data can be obtained by installing the palmerpenguins package."}</p>
                <div className="contenedorImagenCentrada">
                    <img src={es ? imgPinguino : imgPinguinoEn} alt="dumbbell" className="imgCentrada"></img>
                </div>

                {/* Cometa */}
                <h2 id="pinguinos"> {es ? "Gráfico de cometa: Calificaciones económicas" : "Comet plot: Economic ratings"} </h2>
                <p> {es ? "Gráfico mostrando la evolución en la calificación económica de los habitantes de 22 países entre 2023 y 2024. Adaptado de "
                    : "Comet plot depicting the changes in economic ratings from 2023 to 2024 across 22 countries. Adapted from "}
                    <a href="https://www.pewresearch.org/short-reads/2024/06/07/economic-ratings-across-34-countries-are-more-negative-than-positive/sr_24-06-07_global-views-of-economy_2/" target="_blank" rel="noreferrer">{es ? "la siguiente tabla" : "this table"}</a>
                    {es ? " (Pew Research Center)" : " by Pew Research Center"}.
                </p>
                <p> {es ? "Creado con los paquetes ggplot2, ggforce, ggtext, extrafont y legendry."
                    : "Made with packages ggplot2, ggforce, ggtext, extrafont and legendry."}</p>
                <div className="contenedorImagenCentrada">
                    <img src={imgCometa} alt="cometa" className="imgCentradaGrande"></img>
                </div>

                {/* Breaking Bad */}
                <h2 id="breakingbad"> {es ? "Gráfico de barras: Personajes de Breaking Bad" : "Bar chart: Breaking Bad characters"} </h2>
                <p> {es ? "Número de apariciones de cada personaje en las series Breaking Bad y Better Call Saul."
                    : "Number of appearances of each character in Breaking Bad and Better Call Saul."}
                </p>
                <p> {es ? "Hecho con los paquetes ggplot2, grid y gridExtra. Los datos provienen de la "
                    : "Made with ggplot2, grid and gridExtra. Data comes from the "}
                    <a href="https://breakingbad.fandom.com/wiki/Breaking_Bad_Wiki" target="_blank" rel="noreferrer">Breaking Bad Wiki</a>.
                </p>
                <div className="contenedorImagenCentrada">
                    <img src={es ? imgBB : imgBBEn} alt="Breaking Bad grafico" className="imgCentrada"></img>
                </div>

                {/* Futbol */}
                <h2 id="futbol"> {es ? "Gráfico animado: Probabilidades de ganar el Mundial de Fútbol 2022" : "Animated plot: Chances of winning the 2022 FIFA World Cup."} </h2>
                <p> {es ? "El siguiente gráfico muestra la evolución de las probabilidades de ganar la final del Mundial de Fútbol 2022, de acuerdo con "
                    : "The following plot displays the evolution of the chances of winning the 2022 FIFA World Cup final, according to "}
                    <a href="https://projects.fivethirtyeight.com/2022-world-cup-predictions/" target="_blank" rel="noreferrer">FiveThirtyEight</a>.
                </p>
                <p> {es ? "El gráfico de barras fue creado con los paquetes ggplot2 y hrbrthemes. Las banderas se obtienen con los paquetes ggflags y countrycode. La animación se realiza con los paquetes gganimate y gifski. Los datos puede descargarse de "
                    : "The bar chart was created using the ggplot2 and hrbrthemes packages. Flags were obtained with ggflags and countrycode. The animation was made using gganimate and gifski. Data can be downloaded from "}
                    <a href="https://github.com/fivethirtyeight/data/tree/master/world-cup-2022" target="_blank" rel="noreferrer">GitHub</a>.
                </p>
                <div className="contenedorImagenCentrada">
                    <img src={es ? imgFutbol : imgFutbolEn} alt="gif futbol" className="imgCentrada"></img>
                </div>

                {/* 538 */}
                <h2 id="fte"> {es ? "Diagrama de dispersión: Ingresos en los estados de los Estados Unidos" : "Scatterplot: Income in the U.S. states"} </h2>
                <p> {es ? "Gráfico hecho al estilo de " : "Plot in the style of "}
                    <a href="https://fivethirtyeight.com/" target="_blank" rel="noreferrer">FiveThirtyEight</a>
                    {es ? " que muestra el ingreso mediano familiar y el coeficiente de Gini para cada estado de Estados Unidos. El color corresponde al resultado en las elecciones presidenciales de 2020." :
                        " displaying the median household income and Gini coefficient for each state of the USA. Color corresponds to the results in the 2020 presidential election."}
                </p>
                <p> {es ? "Se utilizaron los paquetes ggplot2, ggthemes, extrafont, ggrepel y scales. Los datos provienen de Wikipedia."
                    : "Made with the ggplot2, ggthemes, extrafont, ggrepel, and scales packages. Data comes from Wikipedia."}
                </p>
                <div className="contenedorImagenCentrada">
                    <img src={img538} alt="scatterplot 538" className="imgCentrada"></img>
                </div>

                {/* Linea de tiempo */}
                <h2 id="linea"> {es ? "Línea de tiempo: Voces latinas de Los Simpson" : "Timeline: Latin American dub voices in The Simpsons"} </h2>
                <p> {es ? "Linea de tiempo mostrando los actores de voz de los protagonistas de la serie Los Simpson y los años en los que trabajaron."
                    : "Timeline showing the Latin American dub voice actors of the main characters of The Simpsons and the years in which they worked."}
                </p>
                <p> {es ? "Se utilizó el paquete vistime. Los datos vienen de "
                    : "Made with the vistime package. Data comes from "}
                    <a href="https://doblaje.fandom.com/es/wiki/Los_Simpson" target="_blank" rel="noreferrer">Doblaje Wiki</a>.
                </p>
                <div className="contenedorImagenCentrada">
                    <img src={imgSimpsons} alt="voces simpsons" className="imgCentrada"></img>
                </div>

                {/* Graficos sectores */}
                <h2 id="sectores"> {es ? "Gráficos circulares: Comparación de paquetes" : "Pie charts: Package comparison"} </h2>
                <p> {es ? "Comparación de múltiples paquetes que permiten crear gráficos de sectores circulares en R."
                    : "Comparison of multiple packages that allow the creation of pie charts in R."}
                </p>
                <p> {es ? "Además de los paquetes mostrados en la imagen, se utilizó el paquete png para combinar los gráficos. Los datos utilizados pueden obtenerse instalando el paquete palmerpenguins."
                    : "In addition to the packages shown in the image, the png package was used to combine the graphics. The data used can be obtained by installing the palmerpenguins package."}</p>
                <div className="contenedorImagenCentrada">
                    <img src={es ? imgSectores : imgSectoresEn} alt="graficos sectores" className="imgCentrada"></img>
                </div>
            </div>
        </>

    )
}

export default Rviz;