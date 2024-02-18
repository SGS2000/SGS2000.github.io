// React
import { useOutletContext } from "react-router-dom";

//Componentes
import TablaContenidos from '../../componentes/TablaContenidos';

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
import imgMapaXKCD from "../../img/portafolio/portafolio-mapa-xkcd.png"

function Rmap() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1> {idioma === "es" ? "Mapas con R" : "Maps with R"} </h1>
                <p> {idioma === "es" ? "Varios mapas hechos con distintos paquetes de R" : "Various maps made with different R packages"}. </p>
                <TablaContenidos />

                <h2 id="maps"> {idioma === "es" ? "Paquete maps" : "maps package"} </h2>
                {/* Congreso */}
                <h3 id="congreso"> {idioma === "es" ? "Sedes del Congreso Mundial de Estadística" : "ISI World Statistics Congress hosts"} </h3>
                <p> {idioma === "es" ? "Países que fueron sedes del Congreso Mundial de Estadística entre 1887 y 2023. Los datos vienen de distintas fuentes. Hecho con el paquete maps" : "Countries that hosted the World Statistics Congress between 1887 and 2023. Data from various sources. Created using the maps package"}. </p>
                <div className="contenedorImagenCentrada">
                    <img src={idioma === "es" ? imgMapaCongresoEs : imgMapaCongresoEn} alt="mapa congreso" className="imgCentrada"></img>
                </div>

                <h2 id="ggplot"> {idioma === "es" ? "Paquetes ggplot2 y sf" : "Maps with ggplot2 and sf"} </h2>
                {/* africa */}
                <h3 id="rayshader"> {idioma === "es" ? "Religiones en África" : "Religion in Africa"} </h3>
                <p> {idioma === "es" ? "Mapa mostrando la religión predominante en cada país del continente africano y el porcentaje de la población que la sigue. Los datos provienen de Wikipedia." : "Map showing the predominant religion in each country in Africa and the share of the population that follows it. Data comes from Wikipedia."} </p>
                <p> {idioma === "es" ? "Hecho con los paquetes ggplot2, spData, sf y ggnewscale" : "Made with the spData, sf and ggnewscale packages"}. </p>
                <div className="contenedorImagenCentrada">
                    <img src={idioma === "es" ? imgMapaAfricaEs : imgMapaAfricaEn} alt="mapa africa" className="imgCentrada"></img>
                </div>

                <h2 id="animados"> {idioma === "es" ? "Mapas animados con sf y gganimate" : "Animated maps with sf and gganimate"} </h2>
                {/* Muertes */}
                <h3 id="defunciones"> {idioma === "es" ? "Defunciones en Argentina (2005-2020)" : "Deaths in Argentina (2005-2020)"} </h3>
                <p>{idioma === "es" ? "Gif que muestra las principales causas de defunción en Argentina en el período 2005-2020, tanto por lista básica como por grupo de causas. Presentado para el concurso "
                    : "GIF showing the main causes of death in Argentina in the 2005-2020 period. Made for the "}
                    <a href="https://contarcondatos.mincyt.gob.ar/" target="_blank" rel="noreferrer">"Contar con Datos"</a>
                    {idioma === "es" ? " (2022)" : " contest (2022)"}. </p>
                <p>{idioma === "es" ? "El mapa fue hecho con los paquetes ggplot2 y sf. La animación se realizó con los paquetes gganimate, magick y gifski"
                    : "The map was created using the ggplot2 and sf packages. The animation was made using the gganimate, magick, and gifski packages"}. </p>
                <div className="contenedorImagenCentrada">
                    <img src={imgMapaDef} alt="mapa defunciones" className="imgCentrada"></img>
                </div>

                {/* SAE */}
                <h3 id="sedes"> {idioma === "es" ? "Sedes del Coloquio Argentino de Estadística" : "Venues of the Argentine Statistics Colloquium"} </h3>
                <p>{idioma === "es" ? "Mapa animado mostrando dónde se llevó a cabo cada Coloquio Argentino de Estadística entre 1952 y 2023. En algunos años éstos se realizaron como parte del Congreso Latinoamericano de Sociedades de Estadística (CLATSE)" : "Animated map showing the locations of each Argentine Statistics Colloquium between 1952 and 2023. In some years, these were held as part of the Latin American Congress of Statistics Societies (CLATSE)"}. </p>
                <p>{idioma === "es" ? "Hecho con los paquetes ggplot2, spData y sf. La animación se realizó con los paquetes gganimate, magick y gifski" : "Made with the ggplot2, spData and sf packages. The animation was made using the gganimate, magick, and gifski packages"}.</p>
                <div className="contenedorImagenCentrada">
                    <img src={imgMapaSAE} alt="mapa coloquios" className="imgCentradaAlta"></img>
                </div>

                <h2 id="tmap"> {idioma === "es" ? "Paquete tmap" : "tmap package"} </h2>
                {/* santa fe */}
                <h3 id="santafe"> {idioma === "es" ? "Departamentos de la Provincia de Santa Fe por población" : "Departments of Santa Fe Province by population"} </h3>
                <p>
                    {idioma === "es" ? "Mapa de los departamentos de la Provincia de Santa Fe, con los colores representando la población total (colores más oscuros corresponden a departamentos más habitados)"
                        : "Map of the departments of Santa Fe Province, with colors representing the total population (darker colors correspond to more populated departments)"}.
                </p>
                <p> {idioma === "es" ? "El mapa fue hecho con el paquete tmap. El archivo shapefile fue importado con el paquete sf y la fuente de texto con el paquete extrafont" : "The map was created using the tmap package. The shapefile was imported using the sf package, while the fonts were installed with the extrafont package"}. </p>
                <div className="contenedorImagenCentrada">
                    <img src={idioma === "es" ? imgMapaSFEs : imgMapaSFEn} alt="mapa santa fe" className="imgCentrada"></img>
                </div>

                <h2 id="usmap"> {idioma === "es" ? "Paquete usmap" : "usmap package"} </h2>
                {/* usa energia */}
                <h3 id="energia"> {idioma === "es" ? "Energía renovable en Estados Unidos" : "Renewable energy in the USA"} </h3>
                <p>
                    {idioma === "es" ? "Porcentaje de la energía producida por cada estado que es renovable. Los datos provienen de Wikipedia. Hecho con el paquete usmap"
                        : "Percentage of energy produced by each state that is renewable. Data comes from Wikipedia. Made with the usmap package"}.
                </p>
                <div className="contenedorImagenCentrada">
                    <img src={imgMapaUSA} alt="mapa energia" className="imgCentrada"></img>
                </div>

                {/* xkcd */}
                <h3 id="xkcd"> {idioma === "es" ? "Palabras por estado" : "State Word Map"} </h3>
                <p>
                    {idioma === "es" ? "Mapa basado en un cómic de " : "Map based on a webcomic by "}
                    <a href="https://xkcd.com/1845/" target="_blank" rel="noreferrer">xkcd</a>
                    {idioma === "es" ? " (explicación completa " : " (full explanation "}
                    <a href="https://www.explainxkcd.com/wiki/index.php/1845:_State_Word_Map" target="_blank" rel="noreferrer"> {idioma === "es" ? "aquí" : "here"}</a>).
                    {idioma === "es" ? " Hecho con los paquetes usmap, ggplot2 y xkcd. La fuente de texto fue importada con el paquete extrafont" : " Made with the usmap, ggplot2 and xkcd packages. The font was imported with the extrafont package"}.

                </p>
                <div className="contenedorImagenCentrada">
                    <img src={imgMapaXKCD} alt="mapa energia" className="imgCentrada"></img>
                </div>

                <h2 id="interactivos"> {idioma === "es" ? "Mapas interactivos" : "Interactive maps"} </h2>

                {/* bzrp */}
                <h3 id="bzrp"> {idioma === "es" ? "BZRP Music Sessions por país" : "Bzrp Music Sessions by country"} </h3>
                <p>
                    {idioma === "es" ? "País de origen de los cantantes que han participado en la serie de videos musicales "
                        : "Country of origin of the singers who have participated in the "}
                    <a href="https://www.youtube.com/watch?v=_6XzJPyAJDI&list=PL66mZR-Sq4J4xtMm8T2pWGbC_iuuEOVAt&ab_channel=Bizarrap" target="_blank" rel="noreferrer">BZRP Music Sessions</a>
                    {idioma === "es" ? ". Los datos provienen de varias fuentes" : " series of music videos. Data comes from many sources"}.
                </p>
                <p>{idioma === "es" ? " Hecho con el paquete plotly. La fuente de texto fue importada con el paquete extrafont" : " Made with the plotly package. The font was imported with the extrafont package"}.</p>

                <div className="contenedorIframeCentrado">
                    <iframe src="html/R/RMapaBzrp.html" title="Bzrp" className="iframeCentrado"></iframe>
                </div>

                {/* leaflet */}
                <h3 id="leaflet"> {idioma === "es" ? "Entidades religiosas en Chubut" : "Religious entities in Chubut"} </h3>
                <p>
                    {idioma === "es" ? "Mapa interactivo mostrando las distintas entidades religiosas presentes en la provincia de Chubut, según el "
                        : "Interactive map showing the different religious entities present in the province of Chubut, according to the "}
                    <a href="https://www.cancilleria.gob.ar/es/ministerio-de-relaciones-exteriores-comercio-internacional-y-culto/secretaria-de-culto/registro" target="_blank" rel="noreferrer">
                        {idioma === "es" ? "Registro Nacional de Cultos" : " National Register of Cults"}.
                    </a>
                    {idioma === "es" ? " Hecho con los paquetes leaflet y htmltools" : " Made with the leaflet and htmltools packages"}.
                </p>
                <div className="contenedorIframeCentradoSinBarra">
                    <iframe src="html/R/RMapaCultos.html" title="Cultos" className="iframeCentradoSinBarra"></iframe>
                </div>

            </div>
        </>

    )
}

export default Rmap;