// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

// Imagenes
import imgMapaDef from "../../img/portafolio/portafolio-mapa-defunciones.gif"
import imgMapaAfricaEs from "../../img/portafolio/portafolio-mapa-africa-es.png"
import imgMapaAfricaEn from "../../img/portafolio/portafolio-mapa-africa-en.png"
import imgMapaUSA from "../../img/portafolio/portafolio-mapa-usa.png"
import imgMapaCongresoEs from "../../img/portafolio/portafolio-mapa-congreso-es.png"
import imgMapaCongresoEn from "../../img/portafolio/portafolio-mapa-congreso-en.png"
import imgMapaSFEs from "../../img/portafolio/portafolio-mapa-santafe-es.png"
import imgMapaSFEn from "../../img/portafolio/portafolio-mapa-santafe-en.png"
import imgMapaSAE from "../../img/portafolio/portafolio-mapa-sae.gif"

function Rmap() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1> {idioma === "es" ? "Mapas con R" : "Maps with R"} </h1>
                <p> {idioma === "es" ? "Varios mapas hechos con distintos paquetes de R." : "Various maps made with different R packages."} </p>

                {/* Muertes */}
                <h2> {idioma === "es" ? "Defunciones en Argentina (2005-2020)" : "Deaths in Argentina (2005-2020)"} </h2>
                <p>{idioma === "es" ? "Gif que muestra las principales causas de defunción en Argentina en el período 2005-2020, tanto por lista básica como por grupo de causas. Presentado para el concurso "
                    : "GIF showing the main causes of death in Argentina in the 2005-2020 period. Made for the "}
                    <a href="https://contarcondatos.mincyt.gob.ar/" target="_blank" rel="noreferrer">"Contar con Datos"</a>
                    {idioma === "es" ? " (2022)." : " contest (2022)."} </p>
                <p>{idioma === "es" ? "El mapa fue hecho con los paquetes ggplot2 y sf. La animación se realizó con los paquetes gganimate, magick y gifski."
                    : "The map was created using the ggplot2 and sf packages. The animation was made using the gganimate, magick, and gifski packages."} </p>
                <img src={imgMapaDef} alt="mapa defunciones" className="imgCentradaSinTamanio"></img>

                {/* SAE */}
                <h2> {idioma === "es" ? "Sedes del Coloquio Argentino de Estadística" : "Venues of the Argentine Statistics Colloquium"} </h2>
                <p>{idioma === "es" ? "Mapa animado mostrando dónde se llevó a cabo cada Coloquio Argentino de Estadística entre 1952 y 2023. En algunos años éstos se realizaron como parte del Congreso Latinoamericano de Sociedades de Estadística (CLATSE)." : "Animated map showing the locations of each Argentine Statistics Colloquium between 1952 and 2023. In some years, these were held as part of the Latin American Congress of Statistics Societies (CLATSE)."} </p>
                <p>{idioma === "es" ? "Hecho con los paquetes ggplot2, spData y sf. La animación se realizó con los paquetes gganimate, magick y gifski." : "Made with the ggplot2, spData and sf packages. The animation was made using the gganimate, magick, and gifski packages."}</p>
                <img src={imgMapaSAE} alt="mapa coloquios" className="imgCentradaSinTamanio"></img>

                {/* africa */}
                <h2> {idioma === "es" ? "Religiones en África" : "Religion in Africa"} </h2>
                <p> {idioma === "es" ? "Mapa mostrando la religión predominante en cada país del continente africano y el porcentaje de la población que la sigue. Los datos provienen de Wikipedia." : "Map showing the predominant religion in each country in Africa and the share of the population that follows it. Data comes from Wikipedia."} </p>
                <p> {idioma === "es" ? "Hecho con los paquetes ggplot2, spData, sf y ggnewscale." : "Made with the spData, sf and ggnewscale packages."} </p>
                <img src={idioma === "es" ? imgMapaAfricaEs : imgMapaAfricaEn} alt="mapa africa" className="imgCentrada"></img>

                {/* Congreso */}
                <h2> {idioma === "es" ? "Sedes del Congreso Mundial de Estadística" : "ISI World Statistics Congress hosts"} </h2>
                <p> {idioma === "es" ? "Países que fueron sedes del Congreso Mundial de Estadística entre 1887 y 2023. Los datos vienen de distintas fuentes. Hecho con el paquete maps." : "Countries that hosted the World Statistics Congress between 1887 and 2023. Data from various sources. Created using the maps package."} </p>
                <img src={idioma === "es" ? imgMapaCongresoEs : imgMapaCongresoEn} alt="mapa congreso" className="imgCentradaSinTamanio"></img>

                {/* usa */}
                <h2> {idioma === "es" ? "Energía renovable en Estados Unidos" : "Renewable energy in the USA"} </h2>
                <p>
                    {idioma === "es" ? "Porcentaje de la energía producida por cada estado que es renovable. Los datos provienen de Wikipedia. Hecho con el paquete usmap."
                        : "Percentage of energy produced by each state that is renewable. Data comes from Wikipedia. Made with the usmap package."}
                </p>
                <img src={imgMapaUSA} alt="mapa energia" className="imgCentrada"></img>

                {/* santa fe */}
                <h2> {idioma === "es" ? "Departamentos de la Provincia de Santa Fe por población" : "Departments of Santa Fe Province by population"} </h2>
                <p>
                    {idioma === "es" ? "Mapa de los departamentos de la Provincia de Santa Fe, con los colores representando la población total (colores más oscuros corresponden a departamentos más habitados)."
                        : "Map of the departments of Santa Fe Province, with colors representing the total population (darker colors correspond to more populated departments)."}
                </p>
                <p> {idioma === "es" ? "El mapa fue hecho con el paquete tmap. El archivo shapefile fue importado con el paquete sf y la fuente de texto con el paquete extrafont." : "The map was created using the tmap package. The shapefile was imported using the sf package, while the fonts were installed with the extrafont package."} </p>
                <img src={idioma === "es" ? imgMapaSFEs : imgMapaSFEn} alt="mapa santa fe" className="imgCentrada"></img>
            </div>
        </>

    )
}

export default Rmap;