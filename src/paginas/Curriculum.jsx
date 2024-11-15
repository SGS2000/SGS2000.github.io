import { useOutletContext } from "react-router-dom";
import { useState } from 'react';

//CSS
import "../hojas/Curriculum.css";

// Componentes
import TablaLista from '../componentes/TablaLista';
import BarraSeccion from '../componentes/BarraSeccion';

// Imágenes
import imgPython from "../img/curriculum/curriculum-python.png"
import imgR from "../img/curriculum/curriculum-r.png"
import imgSAS from "../img/curriculum/curriculum-sas.png"
import imgExcel from "../img/curriculum/curriculum-excel.png"
import imgPHP from "../img/curriculum/curriculum-php.png"
import imgNode from "../img/curriculum/curriculum-node.png"
import imgPower from "../img/curriculum/curriculum-power.svg"
import imgUNR from "../img/curriculum/curriculum-unr.png"
import imgSAE from "../img/curriculum/curriculum-sae.png"
import imgUNRaf from "../img/curriculum/curriculum-unraf.png"
import imgUBP from "../img/curriculum/curriculum-ubp.png"
import imgQuarto from "../img/curriculum/curriculum-quarto.png"
import imgGrafico from "../img/curriculum/curriculum-grafico.png"
import imgXpandete from "../img/curriculum/curriculum-xpandete.png"
import imgSantander from "../img/curriculum/curriculum-santander.png"
import imgFCE from "../img/curriculum/curriculum-fceye.png"
import imgFBF from "../img/curriculum/curriculum-fbioyf.png"
import imgUCA from "../img/curriculum/curriculum-uca.jpg"

function Curriculum() {

    // Idioma
    const [idioma] = useOutletContext();

    // Manejar seccion
    const [seccion, setSeccion] = useState(1);

    const manejarClic = val => {
        setSeccion(val);

        //Colores de los botones
        const botones = document.querySelectorAll('.btn-secondary');
        botones.forEach(otroBoton => otroBoton.classList.remove('active'));
        botones[val - 1].classList.add('active');

    }

    const mostrarTablas = () => {
        switch (seccion) {
            case 1:
                return (
                    <>
                        <TablaLista
                            titulo={<h2> {idioma === "es" ? "Datos personales" : "Personal information"} </h2>}
                            texto={
                                <ul>
                                    <li> {idioma === "es" ? <b>Fecha de nacimiento:</b> : <b>Date of birth:</b>}  {idioma === "es" ? "30 de junio, 2000" : "30 / 06 / 2000"} </li>
                                    <li> {idioma === "es" ? <b>Lugar de residencia:</b> : <b>Place of residence:</b>}  Rosario, Santa Fe, Argentina</li>
                                </ul>
                            }
                            key="datos"
                        />
                        <TablaLista
                            titulo={<h2> {idioma === "es" ? "Información de contacto" : "Contact information"} </h2>}
                            texto={
                                <ul>
                                    <li> <b>E-mail</b>: santiagoesquel@gmail.com </li>
                                    <li> <b>WhatsApp</b>: +5492945690132 </li>
                                </ul>
                            }
                            key="contacto"
                        />
                    </>
                )
            case 2:
                return (
                    <>
                        <TablaLista
                            titulo={<h2> {idioma === "es" ? 'Profesor universitario asistente' : 'Assistant Professor'} </h2>}
                            imagen={<img src={imgUCA} className='curriculum-img-ancha curriculum-img-redondeada' alt='logo uca'></img>}
                            texto={
                                <>
                                    <p> {idioma === "es" ? "Profesor de las siguientes asignaturas" : "Professor of the following subjects"}:</p>
                                    <ul>
                                        <li> {idioma === "es" ? "Estadística Aplicada - Ingeniería Industrial" : "Applied Statistics - Industrial Engineering"}.  </li>
                                        <li> {idioma === "es" ? "Probabilidad y Estadística - Licenciatura en Ciencia de Datos" : "Probability and Statistics - Bachelor's Degree in Data Science"}.  </li>
                                    </ul>
                                    <p> {idioma === "es" ? <b>Lugar</b> : <b>Location</b>}:  {idioma === "es" ? "Facultad de Química e Ingeniería, UCA Sede Rosario" : "Faculty of Chemistry and Engineering, UCA, Rosario Campus"}  </p>
                                    <p> {idioma === "es" ? <b>Duración</b> : <b>Duration</b>}: {idioma === "es" ? "Agosto de 2024-presente" : "August 2024-Present"} </p>
                                    <p> {idioma === "es" ? <b>Responsabilidades</b> : <b>Responsibilities</b>}: </p>
                                    <ul>
                                        <li> {idioma === "es" ? "Enseñanza de múltiples temas de estadística básica e intermedia" : "Teaching multiple topics in basic and intermediate statistics"}.  </li>
                                        <li> {idioma === "es" ? "Elaboración de planes de estudio" : "Development of curricula"}.  </li>
                                        <li> {idioma === "es" ? "Producción de materiales de estudio y actividades evaluativas" : "Production of study materials and assessment activities"}.  </li>
                                    </ul>
                                </>
                            }
                            key="profesor"
                        />
                        <TablaLista
                            titulo={<h2> {idioma === "es" ? 'Auxiliar docente' : 'Teaching assistant'} </h2>}
                            imagen={<img src={imgFBF} className='curriculum-img-ancha curriculum-img-redondeada' alt='logo fbioyf'></img>}
                            texto={
                                <>
                                    <p> {idioma === "es" ? "Auxiliar docente en el área de Estadística y Procesamiento de Datos" : "Teaching Assistant in the area of Statistics and Data Processing"}.</p>
                                    <p> {idioma === "es" ? <b>Lugar</b> : <b>Location</b>}:  {idioma === "es" ? "Facultad de Ciencias Bioquímicas y Farmacéuticas, Universidad Nacional de Rosario" : "Faculty of Biochemical and Pharmaceutical Sciences, National University of Rosario"}  </p>
                                    <p> {idioma === "es" ? <b>Duración</b> : <b>Duration</b>}: {idioma === "es" ? "Abril de 2024-presente" : "April 2024-Present"} </p>
                                    <p> {idioma === "es" ? <b>Responsabilidades</b> : <b>Responsibilities</b>}: </p>
                                    <ul>
                                        <li> {idioma === "es" ? "Colaboración con los docentes del área en la enseñanza de contenidos teóricos y prácticos" : "Collaboration with professors in the teaching of both theory and practice"}.  </li>
                                        <li> {idioma === "es" ? "Asistencia en la elaboración y corrección de trabajos prácticos y exámenes" : "Assistance in the elaboration and correction of assignments and exams"}.  </li>
                                        <li> {idioma === "es" ? "Participación en actividades de investigación y extensión" : "Participation in research and extension activities"}.  </li>
                                        <li> {idioma === "es" ? "Apoyo técnico en diversas tareas" : "Technical support in various tasks"}.  </li>
                                    </ul>
                                </>
                            }
                            key="auxiliar"
                        />
                        <TablaLista
                            titulo={<h2> {idioma === "es" ? 'Redactor académico' : 'Academic Writer'} </h2>}
                            imagen={<img src={imgXpandete} className='curriculum-img-ancha' alt='logo xpandete'></img>}
                            texto={
                                <>
                                    <p> {idioma === "es" ? "Redacción de contenidos académicos con temáticas vinculadas a la estadística, incluyendo asistencia en la escritura de tesis y elaboración de informes para proyectos de investigación" : "Writing of academic content on topics related to statistics, including assistance in writing theses and reports for research projects"}.</p>
                                    <p> {idioma === "es" ? <b>Duración</b> : <b>Duration</b>}: {idioma === "es" ? "Noviembre de 2023-presente" : "November 2023-Present"} </p>
                                </>
                            }
                            key="redactor"
                        />
                        <TablaLista
                            titulo={<h2> {idioma === "es" ? "Docente invitado" : "Guest Professor"} </h2>}
                            imagen={<img src={imgFCE} className='curriculum-img-ancha curriculum-img-redondeada' alt='logo fceye'></img>}
                            texto={
                                <>
                                    <p> {idioma === "es" ? 'Docente invitado en la Diplomatura en Visualización de Datos. Presentación del taller "Visualización de datos textuales"' : 'Guest lecturer at the Data Visualization Associate Degree. Presentation of the "Text Data Visualization" workshop'}.</p>
                                    <p> {idioma === "es" ? <b>Lugar</b> : <b>Location</b>}:  {idioma === "es" ? "Facultad de Ciencias Económicas y Estadística, Universidad Nacional de Rosario" : "Faculty of Economic Sciences and Statistics, National University of Rosario"}  </p>
                                    <p> {idioma === "es" ? <b>Duración</b> : <b>Duration</b>}: {idioma === "es" ? "Septiembre-Noviembre de 2024" : "September-November 2024"} </p>
                                </>
                            }
                            key="colaborador"
                        />
                        <TablaLista
                            titulo={<h2> {idioma === "es" ? 'Analista de datos' : 'Data Analyst'} </h2>}
                            imagen={<img src={imgUNRaf} className='curriculum-img' alt='logo unraf'></img>}
                            texto={
                                <>
                                    <p> {idioma === "es" ? "Análisis estadístico de datos vinculados al cursado de la Diplomatura en Acompañamiento y Abordaje Territorial de Situaciones de Violencia por Razones de Género, realizado por la Universidad Nacional de Rafaela y el Gobierno de la provincia de Santa Fe" : "Statistical analysis of data related to the development of the Diploma in Territorial Accompaniment and Approach to Situations of Gender-Based Violence, conducted by the National University of Rafaela and the Government of Santa Fe"}.</p>
                                    <p> {idioma === "es" ? <b>Lugar</b> : <b>Location</b>}:  {idioma === "es" ? "Universidad Nacional de Rafaela" : "National University of Rafaela"}  </p>
                                    <p> {idioma === "es" ? <b>Duración</b> : <b>Duration</b>}: {idioma === "es" ? "Abril-Octubre de 2023" : "April-October 2023"} </p>
                                    <p> {idioma === "es" ? <b>Responsabilidades</b> : <b>Responsibilities</b>}: </p>
                                    <ul>
                                        <li> {idioma === "es" ? "Elaboración de informes estadísticos" : "Writing statistical reports"}.  </li>
                                        <li> {idioma === "es" ? "Depuración, formateo y organización de conjuntos de datos" : "Cleansing, formatting, and organizing datasets"}. </li>
                                        <li> {idioma === "es" ? "Confección de mapas, gráficos y otros elementos visuales para comunicar resultados" : "Creation of maps, graphs, and other visual elements to communicate results"}. </li>
                                    </ul>
                                </>
                            }
                            key="analista"
                        />
                        <TablaLista
                            titulo={<h2> {idioma === "es" ? 'Estadístico autónomo' : 'Freelance Statistician'} </h2>}
                            imagen={<img src={imgGrafico} className='curriculum-img-ancha' alt='logo grafico'></img>}
                            texto={
                                <>
                                    <p> {idioma === "es" ? "Diversos estudios estadísticos y asistencia técnica para múltiples organismos públicos y privados" : "Data analysis and technical assistance for multiple public and private organizations"}.</p>
                                    <p> {idioma === "es" ? <b>Lugar</b> : <b>Location</b>}:  {idioma === "es" ? "Varios" : "Various"}  </p>
                                    <p> {idioma === "es" ? <b>Duración</b> : <b>Duration</b>}: {idioma === "es" ? "Noviembre de 2022-presente" : "November 2022-present"} </p>
                                </>
                            }
                            key="estadistico"
                        />
                        <TablaLista
                            titulo={<h2> {idioma === "es" ? "Colaborador" : "Course Assistant"} </h2>}
                            imagen={<img src={imgFCE} className='curriculum-img-ancha curriculum-img-redondeada' alt='logo fceye'></img>}
                            texto={
                                <>
                                    <p> {idioma === "es" ? 'Colaborador en el curso "Desarrollo de Shiny Apps"' : 'Course Assistant for the "Shiny Apps Development" course'}.</p>
                                    <p> {idioma === "es" ? <b>Lugar</b> : <b>Location</b>}:  {idioma === "es" ? "Facultad de Ciencias Económicas y Estadística, Universidad Nacional de Rosario" : "Faculty of Economic Sciences and Statistics, National University of Rosario"}  </p>
                                    <p> {idioma === "es" ? <b>Duración</b> : <b>Duration</b>}: {idioma === "es" ? "Mayo-Junio de 2022" : "May-June 2022"} </p>
                                    <p> {idioma === "es" ? <b>Responsabilidades</b> : <b>Responsibilities</b>}: </p>
                                    <ul>
                                        <li> {idioma === "es" ? "Elaboración y evaluación de los materiales de estudio." : "Development and evaluation of study materials."}  </li>
                                        <li> {idioma === "es" ? "Asistencia a los estudiantes durante el cursado." : "Assistance to students during the course."} </li>
                                    </ul>
                                </>
                            }
                            key="colaborador"
                        />
                    </>
                )
            case 3:
                return (
                    <>
                        <TablaLista
                            titulo={<h2>{idioma === "es" ? "Licenciatura en Estadística" : "Bachelor's degree in Statistics"}</h2>}
                            imagen={<img src={imgUNR} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p>{idioma === "es" ? "Universidad Nacional de Rosario (2018-2022)" : "National University of Rosario (2018-2022)"}</p>
                                    <ul>
                                        <li> <b>{idioma === "es" ? "Promedio" : "Average"}</b>: {idioma === "es" ? "8,06" : "8.06"} </li>
                                        <li> <b>{idioma === "es" ? "Tesina de grado" : "Undergraduate thesis"}</b>: {idioma === "es" ? '"Clasificación supervisada de textos de ficción según género utilizando bosques aleatorios"' : '"Supervised Classification of Fiction Texts by Genre using Random Forests"'} (2023)</li>
                                    </ul>
                                </>
                            }
                            key="licenciatura"
                        />
                    </>
                )
            case 4:
                return (
                    <>
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Visualización de datos utilizando R" : "Data visualization using R"}</h3>
                                </>
                            }
                            imagen={<img src={imgR} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p><b>{idioma === "es" ? "RSG Argentina (Agosto de 2024)" : "RSG Argentina (August 2024)"} </b></p>
                                    <p>{idioma === "es" ? "Gráficos con R Base, ggplot2, Shiny, Cairo y otras librerías" : "Plots with R Base, ggplot2, Shiny, Cairo and other libraries"}.</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Excel: Nuevas herramientas de análisis de datos" : "Excel: New data analysis tools"}</h3>
                                </>
                            }
                            imagen={<img src={imgExcel} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p><b>{idioma === "es" ? "Facultad de Ciencias Económicas y Estadística, UNR (Junio-Julio de 2024)" : "Faculty of Economics and Statistics, National University of Rosario (June-July 2024)"}</b></p>
                                    <p>{idioma === "es" ? "Power Query, Transformación de datos, Power Pivot, Uso de fórmulas DAX" : "Power Query, Data transformation, Power Pivot, DAX functions"}.</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Curso: Big Data" : "Big Data"}</h3>
                                </>
                            }
                            imagen={<img src={imgSantander} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p><b>{idioma === "es" ? "Santander Open Academy (Febrero de 2024)" : "Santander Open Academy (February 2024)"}</b></p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Creación de reportes reproducibles con Quarto" : "Reproducible Reports with Quarto"}</h3>
                                </>
                            }
                            imagen={<img src={imgQuarto} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p><b>{idioma === "es" ? "LatinR (Octubre de 2023)" : "LatinR (October 2023)"}</b></p>
                                    <p>{idioma === "es" ? "Elaboración de reportes, parametrización, temas HTML, publicación con GitHub Pages y Netlify" : "Report Creation, Parameterization, HTML Themes, Publishing with GitHub Pages and Netlify"}.</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Implementación de modelos de aprendizaje automático con Python" : "Implementation of Machine Learning Models with Python"}</h3>
                                </>
                            }
                            imagen={<img src={imgPython} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p><b>{idioma === "es" ? "Sociedad Argentina de Estadística (Octubre de 2023)" : "Argentine Society of Statistics (October 2023)"}</b></p>
                                    <p>{idioma === "es" ? "Rutinas de preprocesamiento con Scikit-Learn, búsqueda de hiperparámetros utilizando GridSearchCV y Optimización Bayesiana, análisis de errores" : "Pre-Processing Routines with Scikit-Learn, hyperparameter Tuning Using GridSearchCV and Bayesian Optimization, error analysis"}.</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Curso: Internet de las cosas" : "Internet of Things"}</h3>
                                </>
                            }
                            imagen={<img src={imgUBP} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p><b>{idioma === "es" ? "Universidad Blas Pascal (Agosto-Septiembre de 2023)" : "Blas Pascal University (August-September 2023)"}</b></p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Full Stack - Desarrollo Web (JavaScript/Node.JS)" : "Full Stack - Web Development (JavaScript/Node.js)"}</h3>
                                </>
                            }
                            imagen={<img src={imgNode} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p><b>{idioma === "es" ? "Agencia de Aprendizaje a lo largo de la vida (Marzo-Junio de 2023)" : "Agencia de Aprendizaje a lo largo de la vida (March-June 2023)"}</b></p>
                                    <p>{idioma === "es" ? "HTML y CSS, JavaScript, Node.js, REST, Express JS" : "HTML and CSS, JavaScript, Node.js, REST, Express JS"}.</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Estadística bayesiana con aplicaciones en R y Python" : "Bayesian statistics with R and Python"}</h3>
                                </>
                            }
                            imagen={<img src={imgSAE} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p><b>{idioma === "es" ? "Sociedad Argentina de Estadística (Noviembre de 2022)" : "Argentine Society of Statistics (November 2022)"}</b></p>
                                    <p>{idioma === "es" ? "Inferencia bayesiana, Regresión lineal, Modelos lineales generalizados, WinBUGS" :
                                        "Bayesian inference, Regression, Generalized linear models, WinBUGS"}.</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>Data analytics</h3>
                                </>
                            }
                            imagen={<img src={imgPower} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p><b>Perfil e-learning {idioma === "es" ? "(Septiembre-Noviembre de 2022)" : "(September-November 2022)"}</b></p>
                                    <p>{idioma === "es" ? "Data storytelling, visualización de datos con Power BI, SQL." : "Data storytelling, data visualization with Power BI, SQL."}</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>PHP Full Stack</h3>
                                </>
                            }
                            imagen={<img src={imgPHP} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p><b>Agencia de Aprendizaje a lo largo de la vida {idioma === "es" ? "(Agosto-Diciembre de 2021)" : "(August-December 2021)"}</b></p>
                                    <p>{idioma === "es" ? "Desarrollo web, HTML y CSS, JavaScript, Git y GitHub, conexión con bases de datos." : "Web development, HTML and CSS, JavaScript, Git and GitHub, connection with databases."}</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Procesamiento avanzado de la Información" : "Advanced Data Processing"}</h3>
                                </>
                            }
                            imagen={<img src={imgUNR} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p><b>{idioma === "es" ? "Facultad de Ciencias Económicas y Estadística, UNR (Septiembre-Octubre de 2021)" : "Faculty of Economics and Statistics, National University of Rosario (September-October 2021)"}</b></p>
                                    <p>{idioma === "es" ? "Minería de datos, limpieza de datos, Big Data, técnicas de Machine Learning." : "Data mining, data cleansing, Big Data, Machine Learning."}</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Estadística Bayesiana" : "Bayesian Statistics"}</h3>
                                </>
                            }
                            imagen={<img src={imgUNR} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p><b>{idioma === "es" ? "Facultad de Ciencias Económicas y Estadística, UNR (Mayo-Septiembre de 2021)" : "Faculty of Economics and Statistics, National University of Rosario (May-September 2021)"}</b></p>
                                    <p>{idioma === "es" ? "Inferencia bayesiana, distribuciones conjugadas, modelos bayesianos, RStan" : "Bayesian inference, Conjugate distributions, Bayesian models, RStan"}.</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Curso avanzado de R" : "Advanced R"}</h3>
                                </>
                            }
                            imagen={<img src={imgR} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p><b>{idioma === "es" ? "Facultad de Ciencias Económicas y Estadística, UNR (Agosto-Septiembre de 2020)" : "Faculty of Economics and Statistics, National University of Rosario (August-September 2020)"} </b></p>
                                    <p>{idioma === "es" ? "Funciones, Creación de paquetes, R Markdown, Datos georreferenciados, Shiny" : "Functions, Packages, R Markdown, Georeferenced data, Shiny"}.</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Funciones y herramientas avanzadas con Microsoft Excel" : "Advanced functions and tools with Microsoft Excel"}</h3>
                                </>
                            }
                            imagen={<img src={imgExcel} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p><b>FACES Consultores ({idioma === "es" ? "Junio de 2020" : "June 2020"})</b></p>
                                    <p>{idioma === "es" ? "Tipos de errores, Funcion AGREGAR, Filtros avanzados, Análisis de hipótesis" : "Types of errors, AGGREGATE function, Advanced filters, Hypothesis testing"}.</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>Introduction to ANOVA, Regression and Logistic Regression</h3>
                                </>
                            }
                            imagen={<img src={imgSAS} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p><b>SAS ({idioma === "es" ? "Abril de 2020" : "April 2020"})</b></p>
                                    <p>{idioma === "es" ? "ANOVA y Regresión, Tests de hipótesis, Análisis de los residuos,  Datos categóricos" : "ANOVA and Regression, Hypothesis testing, Residual analysis, Categorical data"}.</p>
                                </>
                            }
                        />
                    </>
                )
            case 5:
                return (
                    <>
                        <TablaLista
                            titulo={
                                <h2>{idioma === "es" ? "Estadística" : "Statistics"}</h2>
                            }
                            texto={
                                <>
                                    <div className='tabla-lista-doble'>
                                        <ul>
                                            <li>{idioma === "es" ? "Modelos estadísticos" : "Statistical models"}</li>
                                            <li>{idioma === "es" ? "Análisis multivariado" : "Multivariate analysis"}</li>
                                            <li>{idioma === "es" ? "Muestreo" : "Statistical sampling"}</li>
                                            <li>{idioma === "es" ? "Diseño de experimentos" : "Design of experiments"}</li>
                                            <li>{idioma === "es" ? "Series de tiempo" : "Time series"}</li>
                                            <li>{idioma === "es" ? "Análisis de supervivencia" : "Survival analysis"}</li>
                                            <li>{idioma === "es" ? "Métodos numéricos" : "Numerical methods"}</li>
                                        </ul>
                                        <ul>
                                            <li>{idioma === "es" ? "Procesamiento de datos" : "Data processing"}</li>
                                            <li>{idioma === "es" ? "Visualización de datos" : "Data visualization"}</li>
                                            <li>{idioma === "es" ? "Aprendizaje automático" : "Machine learning"}</li>
                                            <li>{idioma === "es" ? "Simulaciones" : "Simulations"}</li>
                                            <li>{idioma === "es" ? "Estadística bayesiana" : "Bayesian statistics"}</li>
                                            <li>{idioma === "es" ? "Bioestadística" : "Biostatistics"}</li>
                                            <li>{idioma === "es" ? "Econometría" : "Econometrics"}</li>
                                        </ul>
                                    </div>
                                </>
                            }
                            key="estadistica"
                        />
                        <TablaLista
                            titulo={
                                <h3>{idioma === "es" ? "Idiomas" : "Languages"} </h3>
                            }
                            texto={
                                <ul>
                                    <li> <b>{idioma === "es" ? "Español" : "Spanish"}</b>- {idioma === "es" ? "Hablante nativo" : "Native speaker"}</li>
                                    <li> <b>{idioma === "es" ? "Inglés" : "English"}</b> - {idioma === "es" ? "Nivel avanzado (C1)" : "Advanced level (C1)"}</li>
                                    <details>
                                        <summary> {idioma === "es" ? "Certificados" : "Certificates"} </summary>
                                        <ul>
                                            <li>B2 First (Cambridge English) - Score 184 (2017) </li>
                                            <li>GESE (Trinity College London) - Grade 9 (2017) </li>
                                        </ul>
                                    </details>
                                    <li> <b>{idioma === "es" ? "Francés" : "French"}</b> - {idioma === "es" ? "Nivel intermedio" : "Intermediate level"} </li>
                                    <li> <b>{idioma === "es" ? "Portugués" : "Portuguese"}</b> - {idioma === "es" ? "Nivel intermedio" : "Intermediate level"}</li>
                                    <li> <b>{idioma === "es" ? "Italiano" : "Italian"}</b> - {idioma === "es" ? "Nivel básico" : "Basic level"}</li>
                                    <li> <b>{idioma === "es" ? "Lenguaje de señas americano (ASL)" : "American Sign Language (ASL)"}</b> - {idioma === "es" ? "Nivel básico" : "Basic level"}</li>
                                </ul>
                            }
                            key="idiomas"
                        />
                        <TablaLista
                            titulo={
                                <h3> {idioma === "es" ? "Lenguajes de programación" : "Programming languages"} </h3>
                            }
                            texto={
                                <div className='tabla-lista-doble'>
                                    <ul>
                                        <li>R</li>
                                        <details>
                                            <summary> {idioma === "es" ? "Ver más" : "See more"} </summary>
                                            <ul>
                                                <li>Tidyverse </li>
                                                <li>R Markdown </li>
                                                <li>Shiny </li>
                                                <li>RStan </li>
                                            </ul>
                                        </details>
                                        <li>Python</li>
                                        <details>
                                            <summary> {idioma === "es" ? "Ver más" : "See more"} </summary>
                                            <ul>
                                                <li>Numpy / Pandas</li>
                                                <li>Statsmodels / SciPy</li>
                                                <li>Scikit-learn / TensorFlow / Keras / Fairlearn</li>
                                                <li>Matplotlib / Seaborn / Plotly</li>
                                                <li>NLTK</li>
                                            </ul>
                                        </details>
                                        <li>SQL</li>
                                        <li>Java</li>
                                        <li>Markdown</li>
                                    </ul>

                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <ul>
                                            <li>Bootstrap</li>
                                        </ul>
                                        <li>JavaScript</li>
                                        <ul>
                                            <li>React / Node.js</li>
                                        </ul>
                                        <li>PHP</li>
                                        <ul>
                                            <li>Laravel</li>
                                        </ul>
                                    </ul>
                                </div>
                            }
                            key="lenguajes"
                        />
                        <TablaLista
                            titulo={
                                <h3> {idioma === "es" ? "Software estadístico" : "Statistical software"} </h3>
                            }

                            texto={
                                <ul>
                                    <li>SAS</li>
                                    <li>Minitab</li>
                                    <li>Statgraphics</li>
                                    <li>SPSS</li>
                                    <li>Stata</li>
                                    <li>Infostat</li>
                                    <li>WinBUGS</li>
                                </ul>
                            }
                            key="software"
                        />
                        <TablaLista
                            titulo={
                                <h3> {idioma === "es" ? "Otras herramientas" : "Other knowledge"}  </h3>
                            }
                            texto={
                                <div className='tabla-lista-doble'>
                                    <ul>
                                        <li>Power BI</li>
                                        <li>Tableau</li>
                                        <li>Qlik</li>
                                        <li>Microsoft Office</li>
                                        <details>
                                            <summary> {idioma === "es" ? "Ver más" : "See more"} </summary>
                                            <ul>
                                                <li>Word / Excel / PowerPoint / Publisher / Access </li>
                                            </ul>
                                        </details>
                                        <li>Google Docs</li>
                                        <li>Prezi</li>
                                    </ul>
                                    <ul>
                                        <li>LaTeX</li>
                                        <li>Quarto</li>
                                        <li>Git / GitHub</li>
                                        <li>Adobe Premiere Pro / After Effects</li>
                                        <li>Adobe Photoshop</li>
                                        <li>Web Scraping / Selenium</li>
                                    </ul>
                                </div>
                            }
                            key="herramientas"
                        />
                    </>
                )

            default:
                console.log("Error");

        }
    }

    return (
        <>
            <h1>Curriculum</h1>
            <BarraSeccion
                manejarClic={manejarClic}
            />
            {mostrarTablas()}
        </>
    );
}

export default Curriculum;