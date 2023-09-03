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