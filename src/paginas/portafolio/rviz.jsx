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
import img538 from "../../img/portafolio/portafolio-538.png"
import imgSimpsons from "../../img/portafolio/portafolio-linea-tiempo.png"

function Rviz() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1> {idioma === "es" ? "Visualización de datos con R" : "Data visualization with R"} </h1>
                {/* Pinguinos */}
                <h2> {idioma === "es" ? "Gráfico de mancuernas: pingüinos del archipiélago Palmer" : "Dumbbell plot: Palmer Penguins"} </h2>
                <p> {idioma === "es" ? "Gráfico para visualizar las diferencias entre los machos y las hembras de tres especies de pingüino considerando cuatro variables distintas."
                    : "Chart to visualize the differences between males and females of three penguin species considering four different variables."}</p>
                <p> {idioma === "es" ? "Para la realización del gráfico se usaron los paquetes ggplot2, hrbrthemes, ggtext y patchwork. Los datos pueden obtenerse instalando el paquete palmerpenguins."
                    : "Packages ggplot2, hrbrthemes, ggtext, and patchwork were used to create the chart. Data can be obtained by installing the palmerpenguins package."}</p>
                <img src={idioma === "es" ? imgPinguino : imgPinguinoEn} alt="dumbbell" className="imgCentrada"></img>
                {/* Breaking Bad */}
                <h2> {idioma === "es" ? "Gráfico de barras: Personajes de Breaking Bad" : "Bar chart: Breaking Bad characters"} </h2>
                <p> {idioma === "es" ? "Número de apariciones de cada personaje en las series Breaking Bad y Better Call Saul."
                    : "Number of appearances of each character in Breaking Bad and Better Call Saul."}
                </p>
                <p> {idioma === "es" ? "Hecho con los paquetes ggplot2, grid y gridExtra. Los datos provienen de la "
                    : "Made with ggplot2, grid and gridExtra. Data comes from the "}
                    <a href="https://breakingbad.fandom.com/wiki/Breaking_Bad_Wiki" target="_blank" rel="noreferrer">Breaking Bad Wiki</a>.
                    <img src={idioma === "es" ? imgBB : imgBBEn} alt="Breaking Bad grafico" className="imgCentrada"></img>
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
                <img src={idioma === "es" ? imgFutbol : imgFutbolEn} alt="gif futbol" className="imgCentrada"></img>
                {/* 538 */}
                <h2> {idioma === "es" ? "Diagrama de dispersión: Ingresos en los estados de los Estados Unidos" : "Scatterplot: Income in the U.S. states"} </h2>
                <p> {idioma === "es" ? "Gráfico hecho al estilo de " : "Plot in the style of "}
                    <a href="https://fivethirtyeight.com/" target="_blank" rel="noreferrer">FiveThirtyEight</a>
                    {idioma === "es" ? " que muestra el ingreso mediano familiar y el coeficiente de Gini para cada estado de Estados Unidos. El color corresponde al resultado en las elecciones presidenciales de 2020." :
                        " displaying the median household income and Gini coefficient for each state of the USA. Color corresponds to the results in the 2020 presidential election."}
                </p>
                <p> {idioma === "es" ? "Se utilizaron los paquetes ggplot2, ggthemes, extrafont, ggrepel y scales. Los datos provienen de Wikipedia."
                    : "Made with the ggplot2, ggthemes, extrafont, ggrepel, and scales packages. Data comes from Wikipedia."}
                </p>
                <img src={img538} alt="scatterplot 538" className="imgCentrada"></img>
                {/* 3d */}
                {/* <h2> {idioma === "es" ? "Gráfico de dispersión 3D: Alfabetización, Esperanza de vida y PBI" : "3D Scatterplot: Literacy Rate, Life Expectancy, and GDP"} </h2>
                <p> {idioma === "es" ? "Utilizando un conjunto de datos con información de múltiples países y territorios, se realiza un gráfico de dispersión en tres dimensiones mostrando la relación entre tres variables: alfabetización (porcentaje de la población que sabe leer y escribir), esperanza de vida al nacer (en años) y PBI per cápita PPA (en dólares). Estas variables son utilizadas para la construcción de medidas tales cómo el índice de desarrollo humano (IDH)." 
                : "Using a dataset with information from multiple countries and territories, a 3D scatter plot is created to show the relationship between three variables: literacy (percentage of the population that can read and write), life expectancy at birth (in years), and GDP per capita PPP. These variables are used to construct measures such as the Human Development Index (HDI)."}</p>
                <p> {idioma === "es" ? "El gráfico fue creado con el paquete rgl. Los datos provienen del " 
                : "The rgl package was used to create the plot. Data comes from the "}
                <a href='https://www.cia.gov/the-world-factbook/' target='blank'> <i>CIA World Factbook</i></a>.
                </p>
                <iframe src={idioma === "es" ? "html/R3D.html" : "html/R3DEn.html"}  width="1000vw"  height="750vh" title="Scatterplot 3D"></iframe> */}

                {/* Linea de tiempo */}
                <h2> {idioma === "es" ? "Línea de tiempo: Voces latinas de Los Simpson" : "Timeline: Latin American dub voices in The Simpsons"} </h2>
                <p> {idioma === "es" ? "Linea de tiempo mostrando los actores de voz de los protagonistas de la serie Los Simpson y los años en los que trabajaron." 
                : "Timeline showing the Latin American dub voice actors of the main characters of The Simpsons and the years in which they worked."}
                </p>
                <p> {idioma === "es" ? "Se utilizó el paquete vistime. Los datos vienen de "
                    : "Made with the vistime package. Data comes from "}
                    <a href="https://doblaje.fandom.com/es/wiki/Los_Simpson" target="_blank" rel="noreferrer">Doblaje Wiki</a>.
                </p>
                <img src={imgSimpsons} alt="voces simpsons" className="imgCentrada"></img>
            </div>
        </>

    )
}

export default Rviz;