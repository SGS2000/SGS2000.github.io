// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

function Plotly() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{idioma === "es" ? "Gráficos interactivos con Plotly" : "Interactive plots with Plotly"}</h1>
                <h2> {idioma === "es" ? "Gráfico de líneas: Episodios de Black Mirror" : "Line chart: Black Mirror episodes"} </h2>
                <p> {idioma === "es" ? "Se muestran todos los episodios de la serie Black Mirror por temporada y su respectiva calificación en IMDB (hasta agosto del 2023). El gráfico fue hecho con R." 
                : "All episodes of the Black Mirror series are displayed by season along with their respective IMDb ratings (as of August 2023). Plot made in R."}</p>
                <iframe src={idioma === "es" ? "html/plotly1Es.html" : "html/plotly1En.html"}  width="1000vw"  height="750vh" title="Plotly 1"></iframe>
                <h2> {idioma === "es" ? "Gráfico de líneas: Resultados de mundiales de fútbol FIFA" : "Line chart: FIFA World Cup results"} </h2>
                <p> {idioma === "es" ? "El gráfico muestra la evolución de los resultados de 8 selecciones de fútbol en la Copa Mundial de la FIFA entre 1930 y 2022. Solo se incluyen equipos que hayan sido campeones al menos una vez. Los datos provienen de la FIFA. Hecho con R." 
                : "The chart displays the evolution of the results of 8 football teams in the FIFA World Cup between 1930 and 2022. Only teams that have been champions at least once are included. Data is sourced from FIFA. Plot made in R."}</p>
                <iframe src={idioma === "es" ? "html/plotly2Es.html" : "html/plotly2En.html"} width="1000vw" height="750vh" title="Plotly 2"></iframe>
                
                {/* <h2> {idioma === "es" ? "Gráfico de dispersión 3D: Alfabetización, Esperanza de vida y PBI" : "3D Scatterplot: Literacy Rate, Life Expectancy, and GDP"} </h2>
                <p> {idioma === "es" ? "Utilizando un conjunto de datos con información de múltiples países y territorios, se realiza un gráfico de dispersión en tres dimensiones mostrando la relación entre tres variables: alfabetización (porcentaje de la población que sabe leer y escribir), esperanza de vida al nacer (en años) y PBI per cápita PPA (en dólares). Estas variables son utilizadas para la construcción de medidas tales cómo el índice de desarrollo humano (IDH)." 
                : "Using a dataset with information from multiple countries and territories, a 3D scatter plot is created to show the relationship between three variables: literacy (percentage of the population that can read and write), life expectancy at birth (in years), and GDP per capita PPP. These variables are used to construct measures such as the Human Development Index (HDI)."}</p>
                <p> {idioma === "es" ? "El gráfico fue creado en R. Los datos provienen del " 
                : "The plot was created using R. Data comes from the "}
                <a href='https://www.cia.gov/the-world-factbook/' target='blank'> <i>CIA World Factbook</i></a>.
                </p>
                <iframe src={idioma === "es" ? "html/plotlyScatter.html" : "html/plotlyScatterEn.html"} width="1000vw" height="750vh" title="Plotly Scatter"></iframe> */}

                <h2> {idioma === "es" ? "Mapa de árbol: Población mundial" : "Treemap: World Population"} </h2>
                <p>
                {idioma === "es" ? "La población mundial es representada mediante distintas cajas, cuya área es proporcional a la población de su país correspondiente. Se indica también el porcentaje que representa cada país del total de habitantes del continente. Hecho en R con datos del paquete gapminder" : 
                "The world population is represented by different boxes, the size of which is proportional to that of the corresponding country. The percentage of the total inhabitants of the continent that each country represents is also indicated. Made in R with data from the gapminder package."}.
                </p>
                <iframe src="html/plotlyTreemap.html" width="1000vw" height="750vh" title="Plotly Treemap"></iframe>

                <h2> {idioma === "es" ? "Línea de tiempo: Voces latinas de Los Simpson" : "Timeline: Latin American dub voices in The Simpsons"} </h2>
                <p> {idioma === "es" ? "Linea de tiempo mostrando los actores de voz de los protagonistas de la serie Los Simpson y los años y temporadas en los que trabajaron." 
                : "Timeline showing the Latin American dub voice actors of the main characters of The Simpsons and the years and seasons in which they worked."}
                </p>
                <p> {idioma === "es" ? "El gráfico fue creado en R. Los datos provienen de "
                    : "The plot was created using R. Data comes from "}
                    <a href="https://doblaje.fandom.com/es/wiki/Los_Simpson" target="_blank" rel="noreferrer">Doblaje Wiki</a>.
                </p>
                <iframe src="html/plotlyLinea.html" width="1000vw" height="750vh" title="Plotly Linea de tiempo"></iframe>


                <h2> {idioma === "es" ? "Gráfico de barras: Resumen de la serie Civilization" : "Bar Chart: Summary of the Civilization series"} </h2>
                <p> {idioma === "es" ? "La figura muestra la cantidad de civilizaciones disponibles en cada juego y expansión de la serie Civilization. El gráfico fue hecho con Python. Los datos provienen de " 
                : "The figure displays the number of civilizations available in each game and expansion pack or DLC of the Civilization series. The plot was created using Python. Data comes from "}
                <a href="https://civilization.fandom.com/wiki/Civilization_Games_Wiki" target="_blank" rel="noreferrer">Civilization Wiki</a>.</p>
                <iframe src="html/plotly3.html" width="1000vw" height="750vh" title="Plotly 3"></iframe>
                <h2> {idioma === "es" ? "Mapa de calor: Civilizaciones y líderes" : "Heatmap: Civilizations and leaders"} </h2>
                <p> {idioma === "es" ? "El mapa de calor muestra las civilizaciones presentes en cada juego de la serie, así como los líderes disponibles para cada una de ellas. Una vez más, el gráfico fue hecho en Python con datos de Civilization Wiki." 
                : "The heatmap illustrates which civilizations are present in every game of the series, as well as the leaders available for each of them. Once again, the plot was created in Python using data from Civilization Wiki."}</p>
                <iframe src="html/plotly4.html" width="1000vw" height="750vh" title="Plotly 4"></iframe>
            </div>
        </>
    )
}

export default Plotly;