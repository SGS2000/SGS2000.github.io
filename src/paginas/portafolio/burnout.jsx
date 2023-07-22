// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

// Imagenes
import imgMuestraSexo from "../../img/portafolio/portafolio-burnout-muestrasexo.png"
import imgMuestraEdad from "../../img/portafolio/portafolio-burnout-muestraedad.png"
import imgMuestraOcup from "../../img/portafolio/portafolio-burnout-muestraocup.png"
import imgMuestraConv from "../../img/portafolio/portafolio-burnout-muestraconv.png"
import imgPrevBox from "../../img/portafolio/portafolio-burnout-prevbox.png"
import imgPrevHist from "../../img/portafolio/portafolio-burnout-prevhist.png"
import imgResSex from "../../img/portafolio/portafolio-burnout-resultadossexo.png"
import imgResTabla from "../../img/portafolio/portafolio-burnout-resultadostabla.png"
import imgResOdds from "../../img/portafolio/portafolio-burnout-resultadosodds.png"

function Burnout() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{idioma === "es" ? "Burnout en personal de salud" : "Occupational Burnout in Healthcare Workers"}</h1>
                <h2>{idioma === "es" ? "Introducción" : "Introduction"}</h2>
                <p>
                    {idioma === "es" ? "En este estudio, se evaluó el efecto del Síndrome de Desgaste Ocupacional (Burnout) en el personal de salud de una pequeña ciudad de Argentina durante la pandemia de COVID-19." : "This study analyzed the effects of Occupational Burnout Syndrome among healthcare workers in a small city in Argentina during the COVID-19 pandemic."}
                </p>
                <p>{idioma === "es" ? "Presentado como trabajo final de la materia Bioestadística (2021)." : "Presented as the final project for the Biostatistics course (2021)."} </p>
                {/* Metodologia */}
                <h2>{idioma === "es" ? "Metodología" : "Methodology"}</h2>
                <h3>{idioma === "es" ? "Diseño del estudio y recolección de datos" : "Study design and data collection"}</h3>
                <p>
                    {idioma === "es" ? "Se utilizó un estudio observacional de corte transversal. La población bajo estudio incluyó a todo trabajador empleado por algún hospital o clínica de la ciudad que haya tenido contacto con pacientes durante el período 2020-2021." : "A cross-sectional observational study was used. The population under study included any worker employed by any hospital or clinic in the city who had contact with patients during the 2020-2021 period."}
                </p>
                <p>
                {idioma === "es" ? "Se utilizó un formulario online creado con la herramienta Google Forms, el cual fue enviado mediante e-mail a los distintos participantes. A los entrevistados se les preguntó por su sexo, edad, ocupación y número de convivientes. Para medir el efecto del burnout, se recurrió al Oldenburg Burnout Inventory (OLBI)" : "A Google Forms online survey was used for data collection, which was sent via email to the different participants. Respondents were asked about their gender, age, occupation, and number of cohabitants. To measure the effect of burnout, the Oldenburg Burnout Inventory (OLBI) was used."}
                </p>
                <h3>{idioma === "es" ? "Análisis estadístico" : "Statistical analysis"}</h3>
                <p>
                    {idioma === "es" ? "Se llevó a cabo un análisis descriptivo de las variables explicativas. Se calcularon medias, desvíos, cuartiles y rangos para las variables continuas; así como frecuencias absolutas y relativas para las variables discretas." : "A descriptive analysis of the explanatory variables was performed. Means, standard deviations, quartiles, and ranges were calculated for continuous variables, while absolute and relative frequencies were calculated for discrete variables."}
                </p>
                <p>
                    {idioma === "es" ? "Para evaluar el efecto de las covariables sobre el burnout se planteó un modelo de regresión logística, considerando como variable respuesta al score OLBI. Los resultados fueron interpretados mediante razones de odds." : "To evaluate the effect of the covariates on burnout, a logistic regression model was used, considering the OLBI score as the response variable. The results were interpreted using odds ratios."}
                </p>
                <p>
                    {idioma === "es" ? "Todos los cálculos fueron realizados con los programas Microsoft Excel y SAS." : "All calculations were performed with Microsoft Excel and SAS."}
                </p>
                {/* Resultados */}
                <h2>{idioma === "es" ? "Resultados" : "Results"}</h2>
                <h3>{idioma === "es" ? "Muestra" : "Sample"}</h3>
                <p>
                    {idioma === "es" ? "55 personas respondieron la encuesta, de las cuales 41 (74,5%) fueron mujeres. La edad media fue de 45,4 años, con un desvío estándar de 10,5. La mayoría de los participantes (69,1%) reportó vivir con dos personas o más, mientras que apenas 7 individuos (12,7%) vivían solos." : "Fifty-five people responded to the survey, of whom 41 (74.5%) were women. The mean age was 45.4 years, with a standard deviation of 10.5. The majority of participants (69.1%) reported living with two or more people, while only 7 individuals (12.7%) lived alone."}
                </p>
                <p>
                    {idioma === "es" ? "La muestra consistió de 23 médicos (41,8%), 12 enfermeros (21,8%), 12 administrativos (21,8%) y 8 profesionales de otra clase." : "The sample consisted of 23 physicians (41.8%), 12 nurses (21.8%), 12 administrative workers (21.8%), and 8 professionals from other fields."}
                </p>
                <img src={imgMuestraSexo} alt="muestra sexo" ></img>
                <img src={imgMuestraOcup} alt="muestra ocupacion" ></img>
                <img src={imgMuestraConv} alt="muestra convivientes" ></img>
                <img src={imgMuestraEdad} alt="muestra edad" ></img>
                <h3>{idioma === "es" ? "Prevalencia" : "Prevalence"}</h3>
                <p>
                {idioma === "es" ? "El valor medio del Score OLBI fue 38,35, con un desvío estándar de 7,5. Utilizando el valor 35 como punto de corte, se encontró que el 74,5% de los participantes sufrían de los efectos del burnout." : "The mean value of the OLBI Score was 38.35, with a standard deviation of 7.5. Using a cutoff value of 35, it was found that 74.5% of the participants were experiencing the effects of burnout."}
                </p>
                <img src={imgPrevBox} alt="prevalencia boxplot" ></img>
                <img src={imgPrevHist} alt="prevalencia histograma" ></img>
                <h3>{idioma === "es" ? "Factores asociados" : "Associated factors"}</h3>
                <p>{idioma === "es" ? "Se planteó un modelo de regresión logística, tomando como evento el hecho de presentar un Score OLBI mayor a la media.  Solo la variable sexo resultó significativa: la chance de presentar un nivel de  burnout superior al promedio fue más 4 veces  superior para las mujeres que para los hombres." : "A logistic regression model was fused, considering presenting an OLBI Score higher than the mean as the event of interest. Only gender turned out to be significant: the odds of having a burnout level above the sample mean were more than 4 times greater for women than for men."}</p>
                <img src={imgResSex} alt="resultados sexo" ></img>
                <img src={imgResTabla} alt="resultados tabla" ></img>
                <p>
                    {idioma === "es" ? "Posteriormente se ajustó un segundo modelo, tomando como evento el presentar un valor mayor a 18 en la subescala de Agotamiento. En este caso, las variables sexo, edad y ocupación resultaron significativas. Las mujeres y los jóvenes presentaron un mayor riesgo de padecer agotamiento, mientras que los administrativos presentaron un menor riesgo que otras profesiones." : "A second model was adjusted, considering presenting a value greater than 18 in the Exhaustion subscale as the event of interest. In this case, the variables gender, age, and occupation were found to be significant. Women and young individuals presented a higher risk of experiencing exhaustion, while administrative staff showed a lower risk compared to other professions."}
                </p>
                <img src={imgResOdds} alt="resultados odds" ></img>

            </div>
        </>
    )
}

export default Burnout;