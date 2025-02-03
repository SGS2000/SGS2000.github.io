// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

// Imagenes
import imgVeteranTabla from "../../img/portafolio/stata/portafolio-stata-veteran-tabla.png"
import imgVeteranTablaVida from "../../img/portafolio/stata/portafolio-stata-veteran-tablavida.png"
import imgVeteranCurva from "../../img/portafolio/stata/portafolio-stata-veteran-curva1.png"
import imgVeteranCurvaTrt from "../../img/portafolio/stata/portafolio-stata-veteran-curva2.png"
import imgVeteranCurvaInt from "../../img/portafolio/stata/portafolio-stata-veteran-curva1int.png"
import imgVeteranCurvaTrtInt from "../../img/portafolio/stata/portafolio-stata-veteran-curva2int.png"
import imgVeteranCurvaDist from "../../img/portafolio/stata/portafolio-stata-veteran-curva4.png"
import imgVeteranCurvaTrtDist from "../../img/portafolio/stata/portafolio-stata-veteran-curva3.png"
import imgVeteranHazardAcum from "../../img/portafolio/stata/portafolio-stata-veteran-hazard1.png"
import imgVeteranHazardAcumTrt from "../../img/portafolio/stata/portafolio-stata-veteran-hazard2.png"
import imgVeteranHazardEstim from "../../img/portafolio/stata/portafolio-stata-veteran-hazard3.png"
import imgVeteranHazardEstimTrt from "../../img/portafolio/stata/portafolio-stata-veteran-hazard4.png"

function Statasurv() {
    //Idioma
    const [idioma] = useOutletContext();
    const es = idioma === "es";

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{es ? "Análisis de supervivencia con Stata" : "Survival analysis with Stata"}</h1>
                <h2>{es ? "Modelos no paramétricos" : "Nonparametric Survival Models"}</h2>
                <h3>{es ? "Introducción" : "Introduction"}</h3>
                <p>
                    {es ? "Se analiza un " : "A "}
                    <a href="https://www.jstor.org/stable/2334539" target="_blank" rel="noreferrer">dataset</a>
                    {es ? " que incluye datos de supervivencia (en días) de 137 pacientes con cáncer de pulmón avanzado, recopilados por el Grupo de Estudio de Cáncer de Pulmón de la Administración de Veteranos. Los pacientes fueron asignados aleatoriamente a uno de dos agentes quimioterapéuticos (estándar o prueba)"
                        : " with survival data (in days) from 137 advanced lung cancer patients (collected by the Veterans Administration Lung Cancer Study Group) is analysed. Patients were randomized according to one of two chemotherapeutic agents (standard or test)"}.
                </p>
                <p>
                    {es ? "Los datos de supervivencia se resumen en las siguientes tablas:" : "The following tables show a summary of the survival data:"}
                </p>
                <div className="contenedorImagen">
                    <img src={imgVeteranTabla} alt="tablas resumen"></img>
                </div>

                {/* Tablas de vida */}
                <h3>{es ? "Tabla de vida" : "Life-table estimate"}</h3>
                <p>
                    {es ? "Se construye una tabla de vida y se obtiene una estimación de la función de supervivencia" :
                        "A life table is generated and an estimate of the survival function is obtained"}.
                </p>
                <div className="contenedorImagen">
                    <img src={imgVeteranTablaVida} alt="tabla de vida"></img>
                </div>

                {/* K-M */}
                <h3>{es ? "Método de Kaplan-Meier" : "Kaplan-Meier analysis"}</h3>
                <p>
                    {es ? "Se grafica la función de supervivencia estimada por el método de Kaplan-Meier" :
                        "The survival function estimated by the Kaplan-Meier method is plotted"}:
                </p>
                <div className="contenedorImagenCentrada">
                    <img src={imgVeteranCurva} alt="funcion de supervivencia K-M" className="imgCentradaGrande"></img>
                </div>
                <p>
                    {es ? "Se grafican las funciones de supervivencia estimadas para cada tratamiento" :
                        "The estimated survival functions for each treatment are plotted"}:
                </p>
                <div className="contenedorImagenCentrada">
                    <img src={imgVeteranCurvaTrt} alt="funcion de supervivencia por tratamientos" className="imgCentradaGrande"></img>
                </div>
                <p>
                    {es ? "Se añaden intervalos de confianza a los gráficos anteriores" :
                        "Confidence intervals are added to the previous plots"}:
                </p>
                <div className="contenedorGaleria">
                    <img src={imgVeteranCurvaInt} alt="funcion de supervivencia K-M con IC" className="imgGrande"></img>
                    <img src={imgVeteranCurvaTrtInt} alt="funcion de supervivencia por tratamientos con IC" className="imgGrande"></img>
                </div>
                <p>
                    {es ? "Finalmente, se grafican las funciones de riesgo estimadas por el método de Kaplan-Meier" :
                        "Finally, the risk functions estimated by the Kaplan-Meier method are plotted"}.
                </p>
                <div className="contenedorGaleria">
                    <img src={imgVeteranCurvaDist} alt="funcion de distribucion" className="imgGrande"></img>
                    <img src={imgVeteranCurvaTrtDist} alt="funcion de distribucion por tratamiento" className="imgGrande"></img>
                </div>

                {/* N-A */}
                <h3>{es ? "Estimadores de Nelson-Aalen" : "Nelson-Aalen estimators"}</h3>
                <p>
                    {es ? "Se calculan las funciones de hazard acumuladas con el estimador de Nelson-Aalen" :
                        "The cumulative hazard functions are calculated with the Nelson-Aalen estimator"}.
                </p>
                <div className="contenedorGaleria">
                    <img src={imgVeteranHazardAcum} alt="funcion hazard acumulada" className="imgGrande"></img>
                    <img src={imgVeteranHazardAcumTrt} alt="funcion hazard acumulada por tratamiento" className="imgGrande"></img>
                </div>
                <p>
                    {es ? "Se grafican además las funciones de hazard suavizadas" :
                        "The smoothed hazard estimates are also plotted"}.
                </p>
                <div className="contenedorGaleria">
                    <img src={imgVeteranHazardEstim} alt="funcion hazard" className="imgGrande"></img>
                    <img src={imgVeteranHazardEstimTrt} alt="funcion hazard por tratamiento" className="imgGrande"></img>
                </div>
            </div>
        </>
    )
}

export default Statasurv;