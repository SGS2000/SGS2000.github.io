import TablaLista from '../componentes/TablaLista';
import { useOutletContext } from "react-router-dom";
import pdf from "../doc/promedio2021.pdf"

function Reconocimientos() {

    const [idioma, setIdioma] = useOutletContext();

    return (
        <>
            <h1>{idioma === "es" ? "Premios y reconocimientos" : "Awards and recognition"}</h1>
            <TablaLista
                titulo={idioma === "es" ? <h2>Premios</h2> : <h2>Awards</h2>}
                texto={
                    <ul>
                        <li> {idioma === "es" ? "Concurso de pósteres para estudiantes - Primer premio (Año 2022)" : "Student Poster Competition - First prize (2022)" } </li>

                        <ul>
                            <li> {idioma === "es" ? 'Póster "Análisis del valor de mercado de jugadores de fútbol de élite", en coautoría con Agustina Margaritis, Natalia Macchi y Román Tanducci.' : 'Poster "Analysis of the market value of elite football players", co-authored with Agustina Margaritis, Natalia Macchi y Roman Tanducci.' }  </li>
                            <li> {idioma === "es" ? 'Presentado en el ' : 'Presented at the ' } <a href='https://sites.google.com/view/cae-jee-2022' target='blank'> {idioma === "es" ? 'XLIX Coloquio Argentino de Estadística.' : 'XLIX Argentine Colloquium of Statistics.' } </a></li>
                        </ul>

                        <li>{idioma === "es" ? '6ª Olimpíada Matemática del Golfo San Jorge - Segundo Subcampeón (Año 2015)' : '6th Golfo San Jorge Mathematical Olympiad - Second Runner-up (2015)' }  </li>

                        <li>{idioma === "es" ? '21ª Olimpíada Matemática Iberoamericana de Mayo - Mención de honor (Año 2015)' : '21st Iberoamerican Mathematical Olympiad - Honorable Mention (2015)' } </li>

                        <li>{idioma === "es" ? '5ª Olimpíada Matemática del Golfo San Jorge - Campeón (Año 2014)' : '5th Golfo San Jorge Mathematical Olympiad - Champion (2014)' } </li>
                    </ul>
                }
            />
            <TablaLista
                titulo={idioma === "es" ? <h3>Mejores promedios</h3> : <h3>Highest grades</h3>}
                texto={
                    <>
                    <p> {idioma === "es" ? 'Estuve entre los mejores promedios de la Facultad de Ciencias Económicas y Estadística en mis dos últimos años.' : 'I was among the best performing students at the Faculty of Economics and Statistics during my last two years.' }
                         </p>
                    <ul>
                        <li> <a href="https://www.fcecon.unr.edu.ar/noticias/2022-12-12/mejores-promedios-2022" target="blank"> {idioma === "es" ? 'Año 2022' : 'Year 2022' } </a> </li>
                        <li> <a href ={pdf}  attributes-list download ="promedios2021.pdf"> {idioma === "es" ? 'Año 2021' : 'Year 2021' } </a> </li>
                    </ul>
                    </>
                }
            />
            <TablaLista
                titulo={idioma === "es" ? <h2>Apariciones en los medios</h2> : <h2>Media appearances</h2>}
                texto={
<ul>
            <li> <a href="https://www.pagina12.com.ar/528781-dime-quien-eres-y-te-dire-lo-que-vales" target="blank"> Dime quién eres y te diré lo que vales</a> (Página 12, 2023)</li>
            <li> <a href="https://www.elciudadanoweb.com/estudiantes-de-la-unr-crearon-una-ecuacion-para-saber-cuanto-vale-un-jugador-de-futbol/" target="blank"> Estudiantes de la UNR crearon una ecuación para saber cuánto vale un jugador de fútbol</a> (Diario El Ciudadano, 2022)</li>
            <li> <a href="https://www.elchubut.com.ar/esquel/2014-11-10-un-esquelense-participara-por-primera-vez-de-una-olimpiada-nacional-de-matematica" target="blank"> Un esquelense participará por primera vez de una Olimpíada Nacional de Matemática </a> (Diario El Chubut, 2014) </li>
            <li> <a href="https://issuu.com/rggpena/docs/oeste_18c95582535367/10" target="blank"> Destacada participación de alumnos de Esquel y Trevelin </a> (Diario El Oeste, 2014)</li>
        </ul>
                }
            />
        </>
    );
}

export default Reconocimientos;