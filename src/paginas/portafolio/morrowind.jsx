// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

//Documento
import Dataset from "../../img/portafolio/mw/morrowind_npcs.xlsx"

// Imagenes
//SPSS
import SPSSRaza1Es from "../../img/portafolio/mw/portafolio-mw-raza1-es.png"
import SPSSRaza1En from "../../img/portafolio/mw/portafolio-mw-raza1-en.png"
import SPSSRaza2Es from "../../img/portafolio/mw/portafolio-mw-raza2-es.png"
import SPSSRaza2En from "../../img/portafolio/mw/portafolio-mw-raza2-en.png"
import SPSSSexoEs from "../../img/portafolio/mw/portafolio-mw-sexo-es.png"
import SPSSSexoEn from "../../img/portafolio/mw/portafolio-mw-sexo-en.png"
import SPSSSexoTablaEs from "../../img/portafolio/mw/portafolio-mw-sexo-tabla-es.png"
import SPSSSexoTablaEn from "../../img/portafolio/mw/portafolio-mw-sexo-tabla-en.png"
import SPSSSexoRazaEs from "../../img/portafolio/mw/portafolio-mw-sexo-raza-es.png"
import SPSSSexoRazaEn from "../../img/portafolio/mw/portafolio-mw-sexo-raza-en.png"
import SPSSSexoRaza2Es from "../../img/portafolio/mw/portafolio-mw-sexo-raza-2-es.png"
import SPSSSexoRaza2En from "../../img/portafolio/mw/portafolio-mw-sexo-raza-2-en.png"
import SPSSFaccionEs from "../../img/portafolio/mw/portafolio-mw-faccion-es.png"
import SPSSFaccionEn from "../../img/portafolio/mw/portafolio-mw-faccion-en.png"
import SPSSFaccionSexoEs from "../../img/portafolio/mw/portafolio-mw-faccion-sexo-es.png"
import SPSSFaccionSexoEn from "../../img/portafolio/mw/portafolio-mw-faccion-sexo-en.png"
import SPSSFaccionRazaEs from "../../img/portafolio/mw/portafolio-mw-faccion-raza-es.png"
import SPSSFaccionRazaEn from "../../img/portafolio/mw/portafolio-mw-faccion-raza-en.png"

//R
import RMatriz from "../../img/portafolio/mw/portafolio-mw-skills-matrix.png"
import RTabla from "../../img/portafolio/mw/portafolio-mw-skills-table.png"
import RSkillsCEs from "../../img/portafolio/mw/portafolio-mw-skills-combat-es.png"
import RSkillsCEn from "../../img/portafolio/mw/portafolio-mw-skills-combat-en.png"
import RSkillsMEs from "../../img/portafolio/mw/portafolio-mw-skills-magic-es.png"
import RSkillsMEn from "../../img/portafolio/mw/portafolio-mw-skills-magic-en.png"
import RSkillsSEs from "../../img/portafolio/mw/portafolio-mw-skills-stealth-es.png"
import RSkillsSEn from "../../img/portafolio/mw/portafolio-mw-skills-stealth-en.png"
import RResEs from "../../img/portafolio/mw/portafolio-mw-tecnicas-es.png"
import RResEn from "../../img/portafolio/mw/portafolio-mw-tecnicas-en.png"
import RConfusionEs from "../../img/portafolio/mw/portafolio-mw-confusion-es.png"
import RConfusionEn from "../../img/portafolio/mw/portafolio-mw-confusion-en.png"
import RImpEs from "../../img/portafolio/mw/portafolio-mw-importancia-es.png"
import RImpEn from "../../img/portafolio/mw/portafolio-mw-importancia-en.png"

//SAS
import SASComponentes from "../../img/portafolio/mw/portafolio-mw-componentes.png"
import SASGifFacciones from "../../img/portafolio/mw/portafolio-mw-gif-facciones.gif"
import SASGifRazas from "../../img/portafolio/mw/portafolio-mw-gif-razas.gif"
import SASPuntosFacciones from "../../img/portafolio/mw/portafolio-mw-puntos-faccion.png"
import SASPuntosRazas from "../../img/portafolio/mw/portafolio-mw-puntos-razas.png"
import SASTablaContingencia from "../../img/portafolio/mw/portafolio-mw-contingencia.png"
import SASInercia from "../../img/portafolio/mw/portafolio-mw-inercia.png"
import SASGraficoCorrespondencia from "../../img/portafolio/mw/portafolio-mw-correspondencias.png"


function Morrowind() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{idioma === "es" ? "Analizando datos de The Elder Scrolls III: Morrowind" : "Analyzing data from The Elder Scrolls III: Morrowind"}</h1>
                {/* Introduccion */}
                <h2>{idioma === "es" ? "Introducción" : "Introduction"}</h2>
                <p>
                    <i>The Elder Scrolls III: Morrowind </i>
                    {idioma === "es" ? " es un videojuego de rol (RPG) desarrollado por Bethesda Game Studios y lanzado en 2002. La historia principal tiene lugar en Vvardenfell, una isla en la provincia de Morrowind que forma parte del continente de Tamriel."
                        : " is a role-playing video game developed by Bethesda Game Studios and released in 2002. The main story takes place on Vvardenfell, an island in the province of Morrowind, part of the continent of Tamriel. "}
                </p>
                <p>
                    {idioma === "es" ? "En el presente proyecto se recurrió a " : "For this project, "}
                    <i>The Elder Scrolls Construction Set</i>
                    {idioma === "es" ? ", herramienta provista por los desarrolladores, para generar un archivo con los datos de todos los personajes no jugables (NPCs) del videojuego. El conjunto creado posee más de 2600 observaciones y 30 variables, incluyendo el nombre, raza y habilidades de cada NPC. Estos datos pueden ser un recurso útil para presentar diversas técnicas estadísticas. A continuación, se exhiben múltiples ejemplos realizados con distintos programas estadísticos."
                        : " was used to generate a file containing data on all non-playable characters (NPCs) in the video game. This file consists of over 2600 observations and 30 variables, including the name, race, and skills of each NPC. The dataset can serve as a valuable resource for showcasing various statistical techniques. The following section presents multiple examples conducted using different statistical software."}
                </p>
                <p>
                    {idioma === "es" ? "Para descargar el conjunto de datos, pulse " : "To download the dataset, click "}
                    <a href={Dataset} download="morrowind_npcs.xlsx">
                        {idioma === "es" ? "aquí" : "here"}
                    </a>.
                </p>

                {/* Analisis SPSS */}
                <h2> {idioma === "es" ? "Estadística descriptiva (SPSS)" : "Descriptive Statistics (SPSS)"} </h2>
                <p>
                    {idioma === "es" ? "Los personajes del juego pueden pertenecer a una de diez razas. Entre ellas, la más común es " : "The NPCs belong to one of ten races. Among them, the most common is "}
                    <a href="https://en.uesp.net/wiki/Morrowind:Dark_Elf" target="_blank" rel="noreferrer"> Dark Elf / Dunmer</a>
                    {idioma === "es" ? " (más del 55% de los personajes), mientras que la menos frecuente es " : " (more than 55% of the characters), while the least frequent is "}
                    <a href="https://en.uesp.net/wiki/Morrowind:High_Elf" target="_blank" rel="noreferrer"> High Elf / Altmer</a>.
                </p>

                <div className="contenedorGaleria">
                    <img src={idioma === "es" ? SPSSRaza1Es : SPSSRaza1En} alt="Razas" ></img>
                    <img src={idioma === "es" ? SPSSRaza2Es : SPSSRaza2En} alt="Razas sin Dark Elf"></img>
                </div>
                <p>
                    {idioma === "es" ? "Casi el 60% de los personajes son de sexo masculino. Esta diferencia es más marcada en las razas " : "Nearly 60% of the characters are male. This difference is more pronounced among the "}
                    <a href="https://en.uesp.net/wiki/Morrowind:Imperial" target="_blank" rel="noreferrer">Imperial</a>
                    {idioma === "es" ? " y " : " and "}
                    <a href="https://en.uesp.net/wiki/Morrowind:Nord" target="_blank" rel="noreferrer">Nord</a>
                    {idioma === "es" ? " (siendo más del 70% de los personajes de sexo masculino). Las únicas razas con más mujeres que hombres son " : " races (with over 70% of the characters being male). The only races with more women than men are "}
                    <a href="https://en.uesp.net/wiki/Morrowind:Khajiit" target="_blank" rel="noreferrer">Khajiit</a>
                    {idioma === "es" ? " y " : " and "}
                    <a href="https://en.uesp.net/wiki/Morrowind:Breton" target="_blank" rel="noreferrer">Breton</a>.
                </p>
                <div className="contenedorGaleria">
                    <img src={idioma === "es" ? SPSSSexoEs : SPSSSexoEn} alt="Genero"></img>
                    <img src={idioma === "es" ? SPSSSexoTablaEs : SPSSSexoTablaEn} alt="Genero Tabla"></img>
                </div>

                <div className="contenedorGaleria">
                    <img src={idioma === "es" ? SPSSSexoRazaEs : SPSSSexoRazaEn} alt="Sexo y raza"></img>
                    <img src={idioma === "es" ? SPSSSexoRaza2Es : SPSSSexoRaza2En} alt="Sexo y raza sin Dark Elf"></img>
                </div>
                <p>
                    {idioma === "es" ? "Los personajes de Morrowind pueden pertenecer a una de de múltiples facciones, entre las cuales el jugador solo puede incorporarse a unas pocas. Para más detalles, consultar " : "The NPCs in Morrowind can belong to one of multiple factions, while only some of them are joinable by the player. For more details, refer to "}
                    <a href="https://en.uesp.net/wiki/Morrowind:Factions" target="_blank" rel="noreferrer">{idioma === "es" ? "este artículo" : "this article"}</a>.
                </p>
                <p>
                    {idioma === "es" ? "En casi todas las facciones hay una mayoría masculina, con la excepción del " : "In almost all factions there is a male majority, with the exception of the "}
                    <a href="https://en.uesp.net/wiki/Morrowind:Mages_Guild" target="_blank" rel="noreferrer">{idioma === "es" ? "Gremio de Magos" : "Mages Guild"}</a>
                    {idioma === "es" ? " (54,2% femenino) y los " : " (54.2% female) and the "}
                    <a href="https://en.uesp.net/wiki/Morrowind:Blades" target="_blank" rel="noreferrer">{idioma === "es" ? "Cuchillas" : "Blades"}</a>
                    {idioma === "es" ? " (igual cantidad de hombres que de mujeres). Respecto a las razas, en la mayoría de las facciones predominan los Dunmer, pero hay excepciones como por ejemplo la " : " (equal number of men and women). Regarding races, Dunmer are predominant in most factions, but there are exceptions such as the "}
                    <a href="https://en.uesp.net/wiki/Morrowind:Imperial_Legion" target="_blank" rel="noreferrer">{idioma === "es" ? "Legión Imperial" : "Imperial Legion"}</a>.
                </p>

                <div className="contenedorGaleria">
                    <img src={idioma === "es" ? SPSSFaccionEs : SPSSFaccionEn} alt="Faccion" className="imgGrande"></img>
                    <img src={idioma === "es" ? SPSSFaccionSexoEs : SPSSFaccionSexoEn} alt="Faccion y sexo"></img>
                    <img src={idioma === "es" ? SPSSFaccionRazaEs : SPSSFaccionRazaEn} alt="Faccion y raza"></img>
                </div>

                {/* Machine learning R */}
                <h2> {idioma === "es" ? "Aprendizaje automático (R)" : "Machine learning (R)"} </h2>
                <h3> {idioma === "es" ? "Habilidades en Morrowind" : "Skills in Morrowind"} </h3>
                <p>
                    {idioma === "es" ? "Hay 27 habilidades en Morrowind, que determinan qué tan bien se pueden realizar diversas tareas. Las habilidades se dividen dentro de tres especializaciones: combate, magia y sigilo. Para más información sobre las habilidades, revisar " : "There are 27 skills in Morrowind, each of which determines how well various tasks can be performed. The skills are divided into three specializations: combat, magic, and stealth. For more information about the skills, please refer to "}
                    <a href="https://en.uesp.net/wiki/Morrowind:Skills" target="_blank" rel="noreferrer">{idioma === "es" ? "este artículo" : "this article"}</a>.
                </p>
                <p>
                    {idioma === "es" ? "A continuación, se muestran las distribuciones de las distintas habilidades, según especialidad:" : "The following plots show the distributions of the different skills, displayed according to specialization:"}
                </p>

                <div className="contenedorGaleria">
                    <img src={idioma === "es" ? RSkillsCEs : RSkillsCEn} alt="Habilidades combate" className="imgGrande"></img>
                    <img src={idioma === "es" ? RSkillsMEs : RSkillsMEn} alt="Habilidades magia" className="imgGrande"></img>
                    <img src={idioma === "es" ? RSkillsSEs : RSkillsSEn} alt="Habilidades sigilo" className="imgGrande"></img>
                </div>

                <p>
                    {idioma === "es" ? "Se calculan las correlaciones entre habilidades. Como era de esperarse, las habilidades de una misma especialidad muestran las mayores correlaciones entre sí. La correlación positiva más fuerte se da entre Alteración y Misticismo (0,88), mientras que la correlación negativa más fuerte se da entre Atletismo y Misticismo (-0,55)" : "Correlations between skills are calculated. As expected, skills within the same specialization show the highest correlations. The strongest positive correlation is observed between Alteration and Mysticism (0.88), while the strongest negative correlation is between Athletics and Mysticism (-0.55)."}
                </p>
                <div className="contenedorImagenCentrada">
                    <img src={RMatriz} alt="Matriz habilidades" className="imgCentrada"></img>
                </div>
                <h3> {idioma === "es" ? "Clasificación supervisada" : "Supervised learning"} </h3>
                <p>
                    {idioma === "es" ? "Las distintas facciones prefieren diferentes habilidades, cómo se muestra en la siguiente tabla: " : "Various factions favor different skills, as shown in the following table:"}
                </p>
                <div className="contenedorImagenCentrada">
                    <img src={RTabla} alt="Tabla habilidades facciones" className="imgCentrada"></img>
                </div>
                <p>
                    {idioma === "es" ? "Se plantea como objetivo clasificar los personajes dentro de su facción correspondiente, utilizando sus niveles de habilidad respectivos como variables explicativas. Las técnicas que se contrastan son:" : "The objective is to classify characters into their respective factions, using their skill levels as explanatory variables. The techniques compared are :"}
                </p>
                <ul>
                    <li> {idioma === "es" ? "Árboles de decisión" : "Decision Trees"} </li>
                    <li> {idioma === "es" ? "Bosques aleatorios" : "Random Forest"} </li>
                    <li> {idioma === "es" ? "Clasificador bayesiano ingenuo" : "Naive Bayes classifier"} </li>
                    <li> {idioma === "es" ? "K vecinos más cercanos" : "K-nearest neighbors"} </li>
                </ul>
                <p>
                    {idioma === "es" ? "El mejor desempeño se obtuvo con bosques aleatorios. Los resultados completos son los siguientes: " : "The best performance was achieved with random forests. The complete results are as follows:"}
                </p>
                <div className="contenedorImagenCentrada">
                    <img src={idioma === "es" ? RResEs : RResEn} alt="Tabla resultados" className="imgCentrada"></img>
                </div>

                <p>
                    {idioma === "es" ? "Analizando los resultados obtenidos con bosques aleatorios, se observa que las facciones con mayor precisión por clase fueron el " : "Analyzing the results obtained with random forests, it can be observed that the factions with the highest class accuracy were the "}
                    <a href="https://en.uesp.net/wiki/Morrowind:Tribunal_Temple" target="_blank" rel="noreferrer">{idioma === "es" ? "Templo del Tribunal" : "Tribunal Temple"}</a>
                    {idioma === "es" ? " y la " : " and "}
                    <a href="https://en.uesp.net/wiki/Morrowind:House_Hlaalu" target="_blank" rel="noreferrer">{idioma === "es" ? "Casa Hlaalu" : "House Hlaalu"}</a>.
                    {idioma === "es" ? " Las facciones con menor precisión por clase fueron el " : " The factions with the lowest class accuracy were the "}
                    <a href="https://en.uesp.net/wiki/Morrowind:Fighters_Guild" target="_blank" rel="noreferrer">{idioma === "es" ? "Gremio de Luchadores" : "Fighters Guild"}</a>
                    {idioma === "es" ? " y el " : " and the "}
                    <a href="https://en.uesp.net/wiki/Morrowind:Imperial_Cult" target="_blank" rel="noreferrer">{idioma === "es" ? "Culto Imperial" : "Imperial Cult"}</a>.
                    {idioma === "es" ? ' Las habilidades que presentaron una mayor importancia para el algoritmo fueron  "destruction", "short blade" y "light armor", mientras que "spear" y "conjuration" fueron las que presentaron una menor importancia.  ' : ' The skills that showed the greatest importance for the algorithm were "destruction," "short blade," and "light armor", while "spear" and "conjuration" were the least important. '}
                </p>

                <div className="contenedorGaleria">
                    <img src={idioma === "es" ? RConfusionEs : RConfusionEn} alt="Confusion" className="imgGrande"></img>
                    <img src={idioma === "es" ? RImpEs : RImpEn} alt="Importancia" className="imgGrande"></img>
                </div>

                {/* Análisis Multivariado SAS */}
                <h2> {idioma === "es" ? "Análisis multivariado (SAS)" : "Multivariate statistics (SAS)"} </h2>
                <h3> {idioma === "es" ? "Análisis de componentes principales" : "Principal component analysis"} </h3>
                <p>
                    {idioma === "es" ? "Se realiza un análisis de componentes principales utilizando las habilidades mostradas anteriormente como variables. Se utilizan dos componentes principales: la primera distingue entre aquellos personajes especializados en magia y aquellos especializados en combate, mientras que la segunda distingue entre los personajes que están especializados en sigilo de los que no lo están. A continuación se presenta el gráfico de cargas:"
                        : "A principal component analysis is conducted using the skills mentioned above as variables. Two principal components are used: the first one distinguishes between NPCs specialized in magic and those specialized in combat, while the second one distinguishes between NPCs specialized in stealth and those who are not. The loadings plot is presented below:"}
                </p>
                <div className="contenedorImagenCentrada">
                    <img src={SASComponentes} alt="componentes" className="imgCentrada"></img>
                </div>
                <p>
                    {idioma === "es" ? "Se construye el gráfico de scores para los distintos personajes del juego, indicando con colores la facción a la que pertenece. En el segundo gráfico, se muestran por separado las distintas facciones y se indica el nombre de cada personaje junto a su punto correspondiente." : "The scores plot is constructed for the different characters in the game, indicating their factions with colors. In the second plot, the different factions are shown separately, and the name of each character is indicated next to their respective point."}
                </p>
                <div className="contenedorImagen">
                    <img src={SASPuntosFacciones} alt="puntos facciones" className="imgGrande"></img>
                    <img src={SASGifFacciones} alt="gif facciones" className="imgGrande"></img>
                </div>
                <p>
                    {idioma === "es" ? "De manera similar, se construyen gráficos de scores para las distintas razas." : "Similarly, score plots are constructed for the different races."}
                </p>
                <div className="contenedorImagen">
                    <img src={SASPuntosRazas} alt="puntos razas" className="imgGrande"></img>
                    <img src={SASGifRazas} alt="gif razas" className="imgGrande"></img>
                </div>

                <h3> {idioma === "es" ? "Análisis de correspondencias" : "Correspondence analysis"} </h3>
                <p>
                    {idioma === "es" ? "Se aplica el análisis de correspondencias para estudiar la relación entre las razas de los personajes de Morrowind y la facción a la que pertenecen. La siguiente tabla de contingencia muestra todas las razas del juego y las diez facciones principales: "
                        : "Correspondence analysis is applied to study the relationship between the races of Morrowind NPCs and the faction to which they belong. The following contingency table displays all the races in the game and the ten main factions: "}
                </p>
                <div className="contenedorImagenCentrada">
                    <img src={SASTablaContingencia} alt="Tabla contingencia" className="imgCentrada"></img>
                </div>
                <p>
                    {idioma === "es" ? "Hay una asociación significativa entre las variables. Se grafican las primeras dos dimensiones y se observan las relaciones entre las distintas razas y facciones. La primera dimensión diferencia entre aquellas facciones y Grandes Casas nativas de Morrowind (valores negativos) y las facciones imperiales (valores positivos). Las Casas Hlaalu y Redoran y el Templo del Tribunal presenta perfiles parecidos, con un importante predominio de la raza Dark Elf. Por otra parte, como era de esperarse, la Legión Imperial y el Culto Imperial presentan también perfiles similares con un predominio de las razas Imperial, Orc y Nord."
                        : "There is a significant association between the variables. The first two dimensions are plotted, revealing relationships between the different races and factions. The first dimension distinguishes native Morrowind factions and Great Houses (negative values) from Imperial factions (positive values). Houses Hlaalu and Redoran, along with the Tribunal Temple, exhibit similar profiles, with a predominance of the Dark Elf race. As expected, the Imperial Legion and the Imperial Cult show similar profiles, with a predominance of the Imperial, Orc and Nord races."}
                </p>
                <div className="contenedorImagen">
                    <img src={SASInercia} alt="Inercia"></img>
                    <img src={SASGraficoCorrespondencia} alt="Correspondencias"></img>
                </div>

            </div>
        </>
    )
}

export default Morrowind;