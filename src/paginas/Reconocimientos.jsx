import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

//Componentes
import TablaLista from '../componentes/TablaLista';

//Documentos
import pdf from "../doc/promedio2021.pdf"

function Reconocimientos() {

    const [idioma] = useOutletContext();
    const es = idioma === "es";

    return (
        <>
            <h1>{es ? "Premios y reconocimientos" : "Awards and recognition"}</h1>
            <TablaLista
                titulo={es ? <h2>Premios</h2> : <h2>Awards</h2>}
                texto={
                    <ul>
                        <li> {es ? "Concurso de pósteres para estudiantes - Primer premio (Año 2022)" : "Student Poster Competition - First prize (2022)"} </li>

                        <ul>
                            <li> {es ? 'Póster' : 'Poster'}  "<Link to="/portafolio/posterfutbol" target="_blank">Análisis del valor de mercado de jugadores de fútbol de élite</Link>",  {es ? 'en coautoría con Agustina Margaritis, Natalia Macchi y Román Tanducci.' : 'co-authored with Agustina Margaritis, Natalia Macchi y Roman Tanducci.'}  </li>
                            <li> {es ? 'Presentado en el ' : 'Presented at the '} <a href='https://sites.google.com/view/cae-jee-2022' target='blank'> {es ? 'XLIX Coloquio Argentino de Estadística' : 'XLIX Argentine Colloquium of Statistics'}</a>.</li>
                        </ul>

                        <li><a href="https://www.unp.edu.ar/oma/index.php/omgsj" target="blank"> {es ? '6ª Olimpíada Matemática del Golfo San Jorge' : '6th Golfo San Jorge Mathematical Olympiad'}</a> - {es ? 'Segundo Subcampeón (Año 2015)' : 'Second Runner-up (2015)'} </li>

                        <li><a href="https://www.oma.org.ar/internacional/resultados-may21.html" target="blank"> {es ? '21ª Olimpíada Matemática Iberoamericana de Mayo' : '21st Iberoamerican Mathematical Olympiad'}</a> - {es ? 'Mención de honor (Año 2015)' : 'Honorable Mention (2015)'} </li>

                        <li><a href="https://www.unp.edu.ar/oma/index.php/omgsj" target="blank"> {es ? '5ª Olimpíada Matemática del Golfo San Jorge' : '5th Golfo San Jorge Mathematical Olympiad'}</a> -  {es ? 'Campeón (Año 2014)' : 'Champion (2014)'}</li>
                    </ul>
                }
            />
            <TablaLista
                titulo={es ? <h2>Mejores promedios</h2> : <h2>Highest grades</h2>}
                texto={
                    <>
                        <p> {es ? 'Estuve entre los mejores promedios de la Facultad de Ciencias Económicas y Estadística en mis dos últimos años.' : 'I was among the best performing students at the Faculty of Economics and Statistics during my last two years.'}
                        </p>
                        <ul>
                            <li> <a href="https://www.fcecon.unr.edu.ar/noticias/2022-12-12/mejores-promedios-2022" target="blank"> {es ? 'Año 2022' : 'Year 2022'} </a> </li>
                            <li> <a href={pdf} target='_blank' rel='noopener noreferrer' > {es ? 'Año 2021' : 'Year 2021'} </a> </li>
                        </ul>
                    </>
                }
            />
            <TablaLista
                titulo={es ? <h2>Apariciones en los medios</h2> : <h2>Media appearances</h2>}
                texto={
                    <ul>
                        <li> <a href="https://www.pagina12.com.ar/528781-dime-quien-eres-y-te-dire-lo-que-vales" target="blank"> Dime quién eres y te diré lo que vales</a> (Página 12, 2023)</li>
                        <li> <a href="https://www.elciudadanoweb.com/estudiantes-de-la-unr-crearon-una-ecuacion-para-saber-cuanto-vale-un-jugador-de-futbol/" target="blank"> Estudiantes de la UNR crearon una ecuación para saber cuánto vale un jugador de fútbol</a> (Diario El Ciudadano, 2022)</li>
                        <li> <a href="https://www.elchubut.com.ar/esquel/2014-11-10-un-esquelense-participara-por-primera-vez-de-una-olimpiada-nacional-de-matematica" target="blank"> Un esquelense participará por primera vez de una Olimpíada Nacional de Matemática</a> (Diario El Chubut, 2014) </li>
                        <li> <a href="https://issuu.com/rggpena/docs/oeste_18c95582535367/10" target="blank"> Destacada participación de alumnos de Esquel y Trevelin</a> (Diario El Oeste, 2014)</li>
                        <li> <a href="https://www.elchubut.com.ar/esquel/2014-9-18-alumnos-de-esquel-y-trevelin-participan-de-olimpiadas-nacionales-de-matematica" target="blank"> Alumnos de Esquel y Trevelin participan de Olimpiadas Nacionales de Matemática</a> (Diario El Chubut, 2014)</li>
                    </ul>
                }
            />
        </>
    );
}

export default Reconocimientos;