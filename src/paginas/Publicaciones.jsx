import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

//Componentes
import TablaLista from '../componentes/TablaLista';

//CSS
import "../hojas/Publicaciones.css";

//Documentos
import pdfColoquio2023 from "../doc/presentacion-coloquio-2023.pdf"

function Publicaciones() {

    const [idioma] = useOutletContext();

    return (
        <>
            <h1>{idioma === "es" ? "Publicaciones y presentaciones" : "Publications and presentations"}</h1>
            <TablaLista
                titulo={<h2>Papers</h2>}
                texto={
                    <ul className='lista-publicaciones'>
                        <li> <b> <a href="https://revistaingenieria.uda.cl/Publicaciones/360006.pdf" target="blank">Analisis del valor de mercado de jugadores de futbol de elite</a></b>. <i> <a href="https://revistaingenieria.uda.cl/vistas/edicion.php?id=36" target="blank">Revista de la Facultad de Ingeniería, Universidad de Atacama</a></i> (2023) </li>
                    </ul>
                }
            />
            <TablaLista
                titulo={<h2>Software</h2>}
                texto={
                    <ul className='lista-publicaciones'>
                        <li> <b> <a href="https://sgs2000.github.io/ClustMC/" target="blank">ClustMC: Cluster-Based Multiple Comparisons</a></b> (DOI: <a href="https://doi.org/10.32614/CRAN.package.ClustMC" target="blank">10.32614/CRAN.package.ClustMC</a>) (2024) </li>
                    </ul>
                }
            />
            <TablaLista
                titulo={idioma === "es" ? <h2>Presentaciones en conferencias</h2> : <h2>Presentations at conferences</h2>}
                texto={
                    <>
                        <ul className='lista-publicaciones'>
                            <li> <a href="https://latinr.org/" target="blank">LatinR 2024</a>
                                <ul>
                                    <li>
                                        {idioma === "es" ? 'Presentación' : 'Presentation'}: "<a href="https://www.youtube.com/watch?v=L0cibLrZDY8" target="blank">{idioma === "es" ? "ClustMC: comparaciones múltiples basadas en conglomerados" : "ClustMC: Cluster-Based Multiple Comparisons"}</a>"
                                    </li>
                                </ul>
                            </li>
                            <li> <a href="https://sites.google.com/fcecon.unr.edu.ar/visualizaciondedatos/" target="blank">{idioma === "es" ? "Diplomatura en Visualización de Datos" : "Data Visualization Associate Degree"}</a> (2024)
                                <ul>
                                    <li>
                                        {idioma === "es" ? 'Taller' : 'Workshop'}:  "{idioma === "es" ? "Visualización de datos textuales" : "Text Data visualization"}"
                                    </li>
                                </ul>
                            </li>
                            <li> <a href="https://2023.latinr.org/" target="blank">LatinR 2023</a>
                                <ul>
                                    <li>
                                        {idioma === "es" ? 'Charla relámpago' : 'Lightning talk'}:  "<Link to="/portafolio/selector" target="_blank">{idioma === "es" ? "Selector de temas para ggplot2" : "Theme Selector for ggplot2"}</Link>"
                                    </li>
                                </ul>
                            </li>
                            <li> <a href='https://sites.google.com/view/lcaeviiijee/cae-jee-2023/libro-de-res%C3%BAmenes' target='blank'> {idioma === "es" ? 'L Coloquio Argentino de Estadística' :
                                'L Argentine Colloquium of Statistics'}</a> (2023)
                                <ul>
                                    <li>
                                        {idioma === "es" ? 'Presentación' : 'Presentation'}: "<a href={pdfColoquio2023} target='_blank' rel='noopener noreferrer'>{idioma === "es" ? "Clasificación supervisada de textos de ficción según género utilizando bosques aleatorios" : "Supervised Classification of Fiction Texts by Genre using Random Forests"}</a>"
                                    </li>
                                </ul>
                            </li>
                            <li> <a href='https://www.fcecon.unr.edu.ar/seccion/investigacion/jornadas-de-jovenes-investigadores' target='blank'> {idioma === "es" ? 'V Jornadas de Jóvenes Investigadores (FCEyE)' :
                                'V Young Researchers Conference (National University of Rosario)'}</a> (2023)
                                <ul>
                                    <li>
                                        {idioma === "es" ? 'Póster' : 'Poster'}:  "<Link to="/portafolio/postertesina" target="_blank">{idioma === "es" ? "Clasificación supervisada de textos de ficción según género utilizando bosques aleatorios" : "Supervised Classification of Fiction Texts by Genre using Random Forests"}</Link>"
                                    </li>
                                </ul>
                            </li>
                            <li> <a href='https://sites.google.com/view/cae-jee-2022/cae-jee-2022/libro-de-res%C3%BAmenes' target='blank'> {idioma === "es" ? 'XLIX Coloquio Argentino de Estadística' :
                                'XLIX Argentine Colloquium of Statistics'}</a> (2022)
                                <ul>
                                    <li>
                                        {idioma === "es" ? 'Póster' : 'Poster'}:  "<Link to="/portafolio/posterfutbol" target="_blank">{idioma === "es" ? "Análisis del valor de mercado de jugadores de fútbol de élite" : "Football players' market value analysis"}</Link>",  {idioma === "es" ? 'en coautoría con Agustina Margaritis, Natalia Macchi y Román Tanducci.' : 'co-authored with Agustina Margaritis, Natalia Macchi y Roman Tanducci.'}
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </>
                }
            />
        </>
    );
}

export default Publicaciones;