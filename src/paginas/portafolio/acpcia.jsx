// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

// Imagenes
import imgAutovalores from "../../img/portafolio/portafolio-sas-autovalores.png"
import imgScree from "../../img/portafolio/portafolio-sas-scree.png"
import imgCargas from "../../img/portafolio/portafolio-sas-cargas.png"
import imgComp from "../../img/portafolio/portafolio-sas-cp.png"
import imgScores from "../../img/portafolio/portafolio-sas-paises.png"

function Acpcia() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{idioma === "es" ? "Análisis de componentes principales: CIA World Factbook" : "Principal component analysis: CIA World Factbook"}</h1>
                <h2>{idioma === "es" ? "Introducción" : "Introduction"}</h2>
                <p>
                    {idioma === "es" ? "Para este trabajo, se analizaron datos provenientes del " : "In this study, data from the "}
                    <a href='https://www.cia.gov/the-world-factbook/' target='blank'> <i>CIA World Factbook</i>  </a>
                    {idioma === "es" ? " utilizando la técnica de análisis de componentes principales en SAS." : " was analyzed using the principal component analysis technique in SAS."}
                </p>
                <p>{idioma === "es" ? "Presentado como parte del trabajo final de la materia Análisis de Datos multivariados (2020)." : "Presented as part of the final project for the Multivariate Data Analysis course (2020)."} </p>
                <h2>Variables</h2>
                {idioma === "es" ? "Se trabajó con las siguientes variables:" : "The following variables were used:"}
                <ul>
                    <li> <i>alf</i>:  {idioma === "es" ? "Porcentaje de alfabetización" : "Literacy rate"}. </li>
                    <li> <i>expect</i>:  {idioma === "es" ? "Expectativa de vida" : "Life expectancy"}. </li>
                    <li> <i>mort</i>:  {idioma === "es" ? "Tasa bruta de mortalidad" : "Gross mortality rate"}. </li>
                    <li> <i>mortif</i>:  {idioma === "es" ? "Tasa de mortalidad infantil" : "Infant mortality rate"}. </li>
                    <li> <i>nat</i>:  {idioma === "es" ? "Tasa bruta de natalidad" : "Gross birth rate"}. </li>
                    <li> <i>pbippa</i>:  {idioma === "es" ? "Producto interno bruto (PBI) a valores de paridad de poder adquisitivo (PPA)" : "Gross domestic product (GDP) based on purchasing power parity (PPP)"}. </li>
                    <li> <i>porcagr</i>:  {idioma === "es" ? "Porcentaje de la población que trabaja en el sector primario" : "Percentage of the population working in the primary sector"}. </li>
                    <li> <i>porcindu</i>:  {idioma === "es" ? "Porcentaje de la población que trabaja en el sector secundario" : "Percentage of the population working in the secondary sector"}. </li>
                    <li> <i>porcserv</i>:  {idioma === "es" ? "Porcentaje de la población que trabaja en el sector terciario" : "Percentage of the population working in the tertiary sector"}. </li>
                    <li> <i>urban</i>:  {idioma === "es" ? "Porcentaje de población urbana" : "Percentage of urban population"}. </li>
                </ul>
                <h2>{idioma === "es" ? "Número de componentes" : "Number of components"}</h2>
                <p>
                    {idioma === "es" ? "En base a los distintos criterios, se decidió utilizar dos componentes principales." : "Based on different criteria, it was decided to use two principal components."}
                </p>

                <div className="contenedorImagen">
                    <img src={imgAutovalores} alt="autovalores" ></img>
                    <img src={imgScree} alt="scree"></img>
                </div>

                <h2>{idioma === "es" ? "Componentes" : "Components"}</h2>
                <ul>
                    <li>
                        {idioma === "es" ? "La primera componente está altamente correlacionada en sentido positivo con las variables " : "The first component is highly positively correlated with "}
                        <i>pbippa</i>, <i>porcserv</i>,  <i>alf</i>, <i>expect</i> {idioma === "es" ? " y " : " and "} <i>urban</i>
                        {idioma === "es" ? " y en sentido negativo con las variables " : " and negatively correlated with "}
                        <i>porcagr</i>, <i>mortif</i> {idioma === "es" ? " y " : " and "} <i>nac</i>.
                        <ul>
                            <li>
                                {idioma === "es" ? "Esta componente distingue entre los países más desarrollados y aquellos en vías de desarrollo." : "This component distinguishes more developed countries from those that are still developing."}
                            </li>
                        </ul>
                    </li>
                    <li>
                        {idioma === "es" ? "La segunda componente está altamente correlacionada en sentido positivo con la variable " : "The second component is highly positively correlated with "}
                        <i>porcindu</i>
                        {idioma === "es" ? " y moderadamente correlacionada en sentido negativo con la variable " : " and moderately negatively correlated with "}
                        <i>porcserv</i>.
                        <ul>
                            <li>
                                {idioma === "es" ? "Esta componente divide los países donde predomina el sector secundario de aquellos donde predomina el sector terciario." : "This component divides countries between those where the secondary sector predominates from those where the tertiary sector predominates."}
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="contenedorImagen">
                    <img src={imgComp} alt="componentes" ></img>
                    <img src={imgCargas} alt="cargas" ></img>
                </div>
                <h2>{idioma === "es" ? "Gráfico de Scores" : "Score plot"}</h2>
                <p>{idioma === "es" ? "Se presenta un gráfico de scores mostrando los 227 territorios del conjunto de datos. Los colores indican el continente al que pertenecen." : "A score plot is presented showing the 227 territories from the dataset. The colors indicate the continent to which they belong."}</p>
                <div className="contenedorImagen">
                    <img src={imgScores} alt="cargas" ></img>
                </div>
            </div>
        </>
    )
}

export default Acpcia;