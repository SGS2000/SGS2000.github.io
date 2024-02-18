// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

// Imagenes
import imgResumen1 from "../../img/portafolio/portafolio-spssreg-resumen.png"
import imgResumen2 from "../../img/portafolio/portafolio-spssreg-resumen2.png"
import imgResumen3 from "../../img/portafolio/portafolio-spssreg-resumen3.png"
import imgModelo from "../../img/portafolio/portafolio-spssreg-modelo.png"
import imgModelo2 from "../../img/portafolio/portafolio-spssreg-modelo2.png"
import imgCoeficientes from "../../img/portafolio/portafolio-spssreg-coeficientes.png"
import imgCoeficientes2 from "../../img/portafolio/portafolio-spssreg-coeficientes2.png"
import imgDiagnostico from "../../img/portafolio/portafolio-spssreg-diagnostico.png"

function Spssreg() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{idioma === "es" ? "Regresión lineal múltiple: Precios de viviendas" : "Multiple linear regression: Housing prices"}</h1>
                <h2>{idioma === "es" ? "Introducción" : "Introduction"}</h2>
                <p>
                    {idioma === "es" ? "El conjunto de datos " : "The "}
                    <a href="https://econpapers.repec.org/paper/bocbocins/hprice1.htm" target="_blank" rel="noreferrer"><i>hprice1</i></a>
                    {idioma === "es" ? ", creado por Jeffrey Wooldridge y presentado en el libro "
                        : " dataset, created by Jeffrey Wooldridge and presented in his book "}
                    <i> {idioma === "es" ? "Introducción a la econometría: Un enforque moderno" : "Introductory Econometrics: A Modern Approach"}</i>,
                    {idioma === "es" ? " contiene los precios de 88 viviendas vendidas en el área de Boston, Massachusetts durante el año 1990. Además del precio, se incluyen otras nueve variables detallando características de las casas."
                        : " provides the prices of 88 homes sold in the Boston, Massachusetts area during the year 1990. In addition to price, nine other variables detailing characteristics of the houses are included."}
                </p>
                <p>
                    {idioma === "es" ? "En este proyecto, se ajusta un modelo de regresión lineal múltiple para estudiar el efecto de cuatro variables sobre el precio de las viviendas:" :
                        "In this project, a multiple linear regression model is fitted to study the effect of four variables on house prices:"}
                </p>
                <ul>
                    <li> <i>log(lotsize)</i>:  {idioma === "es" ? "Logaritmo del tamaño del lote (en pies cuadrados)" : "Logarithm of the size of the lot in square feet"}. </li>
                    <li> <i>log(sqrft)</i>:  {idioma === "es" ? "Logaritmo del tamaño de la casa (en pies cuadrados)" : "Logarithm of the size of house in square feet"}. </li>
                    <li> <i>bdrms</i>:  {idioma === "es" ? "Número de dormitorios en la casa" : "Number of bedrooms in the house"}. </li>
                    <li> <i>colonial</i>:  {idioma === "es" ? "Indica si la casa es de estilo colonial o no" : "Whether or not the house is colonial style"}. </li>
                </ul>

                <h2>{idioma === "es" ? "Análisis descriptivo" : "Descriptive analysis"}</h2>
                <p>
                    {idioma === "es" ? "Se presentan estadísticas resumen de las variables bajo estudio" : "Summary statistics are provided for the five variables"}:
                </p>
                <div className="contenedorImagen">
                    <img src={imgResumen1} alt="estadísticas resumen" ></img>
                    <img src={imgResumen2} alt="resumen variable colonial" ></img>
                </div>
                <p>
                    {idioma === "es" ? "Se realizan diagramas de caja y gráficos de dispersión entre las cuatro variables explicativas y la variable respuesta" :
                        "Box plots and scatter plots  between the four explanatory variables and the response variable are shown"}:
                </p>
                <div className="contenedorImagen">
                    <img src={imgResumen3} alt="gráficos resumen"></img>
                </div>

                <h2>{idioma === "es" ? "Modelo de regresión" : "Regression model"}</h2>
                <p className="contenedorimgTexto">
                    {idioma === "es" ? "Se plantea el siguiente modelo" :
                        "The following model is proposed"}:
                    <img src={imgModelo} alt="modelo planteado" className="imgTexto"></img>
                </p>
                <p>
                    {idioma === "es" ? "La tabla muestra los coeficientes beta estimados del modelo y sus respectivos desvíos e intervalos de confianza" :
                        "The table below shows the estimated beta coefficients of the model and their respective deviations and confidence intervals"}.
                    {idioma === "es" ? " Además, se presentan los valores t y p-values correspondientes a la prueba para evaluar la hipótesis nula de que el coeficiente es igual a 0" :
                        " In addition, the t and p-values used in testing the null hypothesis that the coefficient is equal to 0 are presented"}.
                    {idioma === "es" ? " Se puede observar una relación estadísticamente significativa entre el tamaño del lote y el precio de la vivienda, así como entre el tamaño de la casa y el precio de esta. El número de dormitorios y el tipo de casa no parecen influir significativamente en el precio de la vivienda" :
                        " A statistically significant relationship can be observed between lot size and house price, as well as between house size and house price. The number of bedrooms and the type of house do not seem to significantly influence the house price"}.
                </p>

                <div className="contenedorImagenCentrada">
                    <img className="imgCentrada" src={imgCoeficientes} alt="tabla coeficientes"></img>
                </div>

                <p className="contenedorimgTexto">
                    {idioma === "es" ? "El modelo estimado resulta" : "The estimated model is"}:
                    <img src={imgModelo2} alt="modelo estimado" className="imgTexto"></img>
                </p>
                <p>
                    {idioma === "es" ? "El valor del coeficiente " : "The adjusted "}
                    R<sup>2</sup>
                    {idioma === "es" ? " ajustado es igual a 0,632" : " coefficient is equal to 0.632"}.
                </p>

                <h2>{idioma === "es" ? "Evaluación del modelo" : "Model evaluation"}</h2>
                <p>
                    {idioma === "es" ? "La siguiente tabla presenta las correlaciones entre las variables explicativas y la variable respuesta, así como los factores de inflación de la varianza para cada variable"
                        : "The following table presents the correlations between the explanatory variables and the response variable, as well as the variance inflation factors for each variable"}.
                    {idioma === "es" ? "  Dado que todos los FIV son bajos, se puede concluir que no hay efecto de multicolinealidad entre las variables"
                        : "Since all IVFs are low, it can be concluded that there is no multicollinearity effect between the variables"}.
                </p>

                <div className="contenedorImagenCentrada">
                    <img className="imgCentrada" src={imgCoeficientes2} alt="tabla multicolinealidad"></img>
                </div>

                <p>
                    {idioma === "es" ? "Se realiza un análisis de los residuos. Como puede verse en los gráficos, los supuestos de linealidad, homocedasticidad, normalidad e independencia de los residuos parecen cumplirse satisfactoriamente" :
                        "An analysis of the residuals is performed. As can be seen from the plots, the assumptions of linearity, homoscedasticity, normality and independence of the residuals seem to be satisfactorily met"}.
                </p>

                <div className="contenedorImagen">
                    <img src={imgDiagnostico} alt="graficos residuos"></img>
                </div>

                <h2>{idioma === "es" ? "Conclusiones" : "Conclusions"}</h2>
                <p>
                    {idioma === "es" ? "El modelo de regresión lineal múltiple ajustado muestra que tanto el tamaño del lote como el tamaño de la casa tienen una relación estadísticamente significativa con el precio de las viviendas, mientras que no se hay evidencia para afirmar que el número de dormitorios o el estilo colonial de la casa influyan significativamente" :
                        "The fitted multiple linear regression model shows that both the lot size and the house size have a statistically significant relationship with the house prices, while there is not enough evidence to say that the number of bedrooms or the colonial style of the house significantly influence prices"}.
                    {idioma === "es" ? " Se encontró quel el 63,2% de la variabilidad de los precios puede ser explicada por las variables del modelo" :
                        " It was found that 63.2% of the price variability can be explained by the variables in the model"}.
                </p>
            </div>
        </>
    )
}

export default Spssreg;