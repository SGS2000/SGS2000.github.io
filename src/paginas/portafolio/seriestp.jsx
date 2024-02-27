// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

// Imagenes
import tablaDatos from "../../img/portafolio/series/portafolio-series-tabla.png"
import graficoSerieEs from "../../img/portafolio/series/portafolio-series-temperaturas-es.png"
import graficoSerieEn from "../../img/portafolio/series/portafolio-series-temperaturas-en.png"
import graficoFacEs from "../../img/portafolio/series/portafolio-series-fac-es.png"
import graficoFacEn from "../../img/portafolio/series/portafolio-series-fac-en.png"
import graficoFacpEs from "../../img/portafolio/series/portafolio-series-facp-es.png"
import graficoFacpEn from "../../img/portafolio/series/portafolio-series-facp-en.png"
import graficoBoxplotEs from "../../img/portafolio/series/portafolio-series-boxplot-es.png"
import graficoBoxplotEn from "../../img/portafolio/series/portafolio-series-boxplot-en.png"
import salidaTest from "../../img/portafolio/series/portafolio-series-test.png"
import graficoSerieDifEs from "../../img/portafolio/series/portafolio-series-dif-es.png"
import graficoSerieDifEn from "../../img/portafolio/series/portafolio-series-dif-en.png"
import graficoFacDifEs from "../../img/portafolio/series/portafolio-series-fac-dif-es.png"
import graficoFacDifEn from "../../img/portafolio/series/portafolio-series-fac-dif-en.png"
import graficoFacpDifEs from "../../img/portafolio/series/portafolio-series-facp-dif-es.png"
import graficoFacpDifEn from "../../img/portafolio/series/portafolio-series-facp-dif-en.png"
import salidaModelo from "../../img/portafolio/series/portafolio-series-modelo.png"
import salidaTest2 from "../../img/portafolio/series/portafolio-series-test2.png"
import salidaTest3 from "../../img/portafolio/series/portafolio-series-test3.png"
import graficoDiagnostico1Es from "../../img/portafolio/series/portafolio-series-residuos1-es.png"
import graficoDiagnostico1En from "../../img/portafolio/series/portafolio-series-residuos1-en.png"
import graficoDiagnostico2Es from "../../img/portafolio/series/portafolio-series-residuos2-es.png"
import graficoDiagnostico2En from "../../img/portafolio/series/portafolio-series-residuos2-en.png"
import graficoDiagnostico3Es from "../../img/portafolio/series/portafolio-series-residuos3-es.png"
import graficoDiagnostico3En from "../../img/portafolio/series/portafolio-series-residuos3-en.png"
import tablaPredEs from "../../img/portafolio/series/portafolio-series-predicciones-es.png"
import tablaPredEn from "../../img/portafolio/series/portafolio-series-predicciones-en.png"


function SeriesTP() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{idioma === "es" ? "Temperaturas en Argentina" : "Temperatures in Argentina"}</h1>

                <h2> {idioma === "es" ? "Introducción" : "Introduction"} </h2>
                <p> {idioma === "es" ? "En este trabajo, se ajustó un modelo SARIMA para pronosticar futuros valores de las temperaturas en Argentina. Se trabajó con un conjunto de datos de "
                    : "In this project, a SARIMA model was fitted to forecast future temperature values in Argentina. A dataset from "}
                    <a href="https://berkeleyearth.org/" target="_blank" rel="noreferrer">Berkeley Earth</a>
                    {idioma === "es" ? " que presenta las temperaturas promedio por mes entre 2015 y 2020."
                        : ", which provides average monthly temperatures between 2015 and 2020, was used."}</p>

                <p>{idioma === "es" ? "Presentado como trabajo final de la materia Series de tiempo (2021)." : "Presented as the final project for the Time Series course (2021)."} </p>

                <h2> {idioma === "es" ? "Análisis descriptivo" : "Descriptive Analysis"} </h2>
                <p> {idioma === "es" ? "La siguiente tabla muestra la temperatura promedio (ºC) por mes en Argentina durante el período 2015-2020. Las últimas seis observaciones son removidas para ser utilizadas como conjunto de prueba."
                    : "The following table displays the average temperature (ºC) per month in Argentina during the 2015-2020 period. The last six observations are excluded for use as a test set."}</p>

                <div className="contenedorImagenCentrada">
                    <img src={tablaDatos} alt="tabla datos" className="imgCentradaGrande"></img>
                </div>

                <br></br>
                <p> {idioma === "es" ? "Se grafican los datos. Se puede observar una estacionalidad de período 12, lo cuál es esperable al trabajar con temperaturas mensuales."
                    : "The data is shown in the following plot. Seasonality with a period of 12 can be observed, which is expected when working with monthly temperatures."}</p>

                <div className="contenedorImagenCentrada">
                    <img src={idioma === "es" ? graficoSerieEs : graficoSerieEn} alt="Serie original" className="imgCentradaGrande"></img>
                </div>

                <p> {idioma === "es" ? "Se grafican la función de autocorrelación (FAC) y la función de autocorrelación parcial (FACP). Una vez más, se confirma la estacionalidad de período 12."
                    : "The autocorrelation function (ACF) and partial autocorrelation function (PACF) are plotted. Once again, the seasonality with a period of 12 is confirmed."}</p>

                <div className="contenedorGaleria">
                    <img src={idioma === "es" ? graficoFacEs : graficoFacEn} alt="FAC" className="imgGrande"></img>
                    <img src={idioma === "es" ? graficoFacpEs : graficoFacpEn} alt="FACP" className="imgGrande"></img>
                </div>

                <p> {idioma === "es" ? "Se aprecia una distribución similar por año, la variancia no parece aumentar ni disminuir con el tiempo. Se utiliza el test de Portmanteau para confirmar que la serie no es ruido blanco."
                    : "A similar distribution can be observed each year, and there doesn't seem to be an increase or decrease in variance over time. The Portmanteau test is used to confirm that the series is not white noise."}</p>

                <div className="contenedorImagen">
                    <img src={idioma === "es" ? graficoBoxplotEs : graficoBoxplotEn} alt="Boxplot" className="imgGrande"></img>
                    <img src={salidaTest} alt="test portmanteau"></img>
                </div>

                {/* Selección de modelos */}
                <h2> {idioma === "es" ? "Selección de modelos" : "Model Selection"} </h2>
                <p> {idioma === "es" ? "Se decidió aplicar una diferenciación de orden 1 tanto en la parte regular como en la parte estacional. A continuación se muestran los gráficos correspondientes a la serie diferenciada. "
                    : "It was decided to apply a first-order differencing to both the regular and seasonal components. Below are the corresponding plots for the differenced series."}</p>

                <div className="contenedorGaleria">
                    <img src={idioma === "es" ? graficoSerieDifEs : graficoSerieDifEn} alt="Serie diferenciada" className="imgGrande"></img>
                    <img src={idioma === "es" ? graficoFacDifEs : graficoFacDifEn} alt="FAC diferenciada" className="imgGrande"></img>
                    <img src={idioma === "es" ? graficoFacpDifEs : graficoFacpDifEn} alt="Boxplot" className="imgGrande"></img>
                </div>

                <p> {idioma === "es" ? "Los modelos que se contrastaron fueron los siguientes:"
                    : "The following models were compared:"}</p>
                <ol>
                    <li>SARIMA(0,1,1)(0,1,1)<sub>12</sub></li>
                    <li>SARIMA(0,1,1)(0,1,2)<sub>12</sub></li>
                    <li>SARIMA(0,1,1)(1,1,0)<sub>12</sub></li>
                    <li>SARIMA(0,1,1)(2,1,0)<sub>12</sub></li>
                    <li>SARIMA(0,1,1)(1,1,1)<sub>12</sub></li>
                </ol>

                {/* Ajuste de modelos */}
                <h2> {idioma === "es" ? "Ajuste y diagnóstico del modelo" : "Model Fitting and Diagnosis"} </h2>
                <p>{idioma === "es" ? "El modelo óptimo fue el modelo 3: " : "The optimal model was Model 3: "}
                    SARIMA(0,1,1)(1,1,0)<sub>12</sub></p>
                <p>{idioma === "es" ? "Se presenta un resumen del modelo:" : "A summary of the model is shown:"} </p>

                <div className="contenedorImagen">
                    <img src={salidaModelo} alt="modelo optimo"></img>
                </div>

                <p>{idioma === "es" ? "A continuación, se lleva a cabo el diagnóstico del modelo. Como se puede ver en los siguientes gráficos, los residuos parecen ser ruido blanco y seguir una distribución aproximadamente normal." :
                    "Next, the model diagnosis is performed. As seen in the following plots, the residuals seem to be white noise and follow an approximately normal distribution."} </p>

                <div className="contenedorGaleria">
                    <img src={idioma === "es" ? graficoDiagnostico1Es : graficoDiagnostico1En} alt="Residuos 1" className="imgGrande"></img>
                    <img src={idioma === "es" ? graficoDiagnostico2Es : graficoDiagnostico2En} alt="Residuos 2" className="imgGrande"></img>
                    <img src={idioma === "es" ? graficoDiagnostico3Es : graficoDiagnostico3En} alt="Residuos 3" className="imgGrande"></img>
                </div>

                <p>{idioma === "es" ? "El test de Portmanteau confirma que los residuos son ruido blanco. Finalmente, se aplica el test de Lilliefors para confirmar la normalidad de los residuos." :
                    "The Portmanteau test confirms that the residuals are white noise. Finally, the Lilliefors test is applied to confirm the normality of the residuals."} </p>

                <div className="contenedorImagen">
                    <img src={salidaTest2} alt="test portmanteau"></img>
                    <img src={salidaTest3} alt="test lilliefors"></img>
                </div>

                <h2> {idioma === "es" ? "Predicciones" : "Forecast"} </h2>
                <p>{idioma === "es" ? "Se realizan los pronósticos con el modelo SARIMA seleccionado. La siguiente tabla muestra los valores predichos, el valor verdadero presente en el conjunto de datos y la diferencia entre ambos. Se incluye además el intervalo de confianza del 95%. En todos los casos, el intervalo cubrió al verdadero valor de la temperatura mensual promedio." :
                    "The forecasts are made with the selected SARIMA model. The following table displays the predicted values, the true value from the dataset, and the difference between them. Additionally, the 95% confidence interval is included. In all cases, the CI covered the true value of the average monthly temperature."} </p>

                <div className="contenedorImagenCentrada">
                    <img src={idioma === "es" ? tablaPredEs : tablaPredEn} alt="Predicciones" className="imgCentrada"></img>
                </div>

            </div>
        </>
    )
}

export default SeriesTP;