import TablaLista from '../componentes/TablaLista';
import { useOutletContext } from "react-router-dom";
import "../hojas/Curriculum.css";
import { useState } from 'react';
import BarraSeccion from '../componentes/BarraSeccion';

function Curriculum() {

    // Idioma
    const [idioma] = useOutletContext();

    // Manejar seccion
    const [seccion, setSeccion] = useState(1);

    const manejarClic = val => {
        setSeccion(val);

        //Colores de los botones
        const buttons = document.querySelectorAll('.btn-secondary');
        buttons.forEach(otherButton => otherButton.classList.remove('active'));
        buttons[val-1].classList.add('active');

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
                        />
                        <TablaLista
                            titulo={<h2> {idioma === "es" ? "Información de contacto" : "Contact information"} </h2>}
                            texto={
                                <ul>
                                    <li> <b>E-mail</b>: santiagoesquel@gmail.com </li>
                                    <li> <b>WhatsApp</b>: +5492945690132 </li>
                                </ul>
                            }
                        />
                    </>
                )
            case 2:
                return (
                    <>
                        <TablaLista
                            titulo={<h2> {idioma === "es" ? 'Analista de datos' : 'Data Analyst' } </h2>}
                            texto={
                                <>
                                    <p> {idioma === "es" ? "Análisis estadístico de datos vinculados al cursado de la Diplomatura en Acompañamiento y Abordaje Territorial de Situaciones de Violencia por Razones de Género, realizado por la Universidad Nacional de Rafaela y el Gobierno de la provincia de Santa Fe." : "Statistical analysis of data related to the development of the Diploma in Territorial Accompaniment and Approach to Situations of Gender-Based Violence, conducted by the National University of Rafaela and the Government of Santa Fe."}</p>
                                    <p> {idioma === "es" ? <b>Lugar</b> : <b>Location</b>}:  {idioma === "es" ? "Universidad Nacional de Rafaela" : "National University of Rafaela"}  </p>
                                    <p> {idioma === "es" ? <b>Duración</b> : <b>Duration</b>}: {idioma === "es" ? "Abril de 2023-presente" : "April 2023-Present"} </p>
                                    <p> {idioma === "es" ? <b>Responsabilidades</b> : <b>Responsibilities</b>}: </p>
                                    <ul>
                                        <li> {idioma === "es" ? "Elaboración de informes estadísticos." : "Writing statistical reports."}  </li>
                                        <li> {idioma === "es" ? "Depuración, formateo y organización de conjuntos de datos." : "Cleansing, formatting, and organizing datasets."} </li>
                                        <li> {idioma === "es" ? "Confección de mapas, gráficos y otros elementos visuales para comunicar resultados." : "Creation of maps, graphs, and other visual elements to communicate results."} </li>
                                    </ul>
                                </>


                            }
                        />
                        <TablaLista
                            titulo={<h2> {idioma === "es" ? 'Colaborador - Curso "Desarrollo de Shiny Apps"' : 'Course Assistant - Course: "Shiny Apps Development""' } </h2>}
                            texto={
                                <>
                                    <p> {idioma === "es" ? <b>Lugar</b> : <b>Location</b>}:  {idioma === "es" ? "Facultad de Ciencias Económicas y Estadística, Universidad Nacional de Rosario" : "Faculty of Economic Sciences and Statistics, National University of Rosario"}  </p>
                                    <p> {idioma === "es" ? <b>Duración</b> : <b>Duration</b>}: {idioma === "es" ? "Mayo-Junio de 2022" : "May-June 2022"} </p>
                                    <p> {idioma === "es" ? <b>Responsabilidades</b> : <b>Responsibilities</b>}: </p>
                                    <ul>
                                        <li> {idioma === "es" ? "Elaboración y evaluación de los materiales de estudio." : "Development and evaluation of study materials."}  </li>
                                        <li> {idioma === "es" ? "Asistencia a los estudiantes durante el cursado." : "Assistance to students during the course."} </li>
                                    </ul>
                                </>


                            }
                        />
                    </>
                )
            case 3:
                return (
                    <>
                        <TablaLista
                            titulo={ <h2>{idioma === "es" ? "Licenciatura en Estadística" : "Bachelor's degree in Statistics"}</h2> }
                            texto={
                                <>
                                    <p>{idioma === "es" ? "Universidad Nacional de Rosario (2018-2022)" : "National University of Rosario (2018-2022)"}</p>
                                    <ul>
                                        <li> <b>{idioma === "es" ? "Promedio" : "Average"}</b>: {idioma === "es" ? "8,06" : "8.06"} </li>
                                        <li> <b>{idioma === "es" ? "Tesina de grado" : "Undergraduate thesis"}</b>: {idioma === "es" ? '"Clasificación supervisada de textos de ficción según género utilizando bosques aleatorios"' : '"Supervised Classification of Fiction Texts by Genre using Random Forests"' } (2023)</li>
                                    </ul>
                                </>
                            }
                        />
                    </>
                )
            case 4:
                return (
                    <>
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Full Stack - Desarrollo Web (JavaScript/Node.JS)" : "Full Stack - Web Development (JavaScript/Node.js)"}</h3>
                                    <p><b>{idioma === "es" ? "Agencia de Aprendizaje a lo largo de la vida (Marzo-Junio de 2023)" : "Agencia de Aprendizaje a lo largo de la vida (March-June 2023)"}</b></p>
                                </>
                            }
                            texto={
                                <>
                                    <p>{idioma === "es" ? "HTML y CSS, JavaScript, Node.js, REST, Express JS" : "HTML and CSS, JavaScript, Node.js, REST, Express JS"}</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Estadística bayesiana con aplicaciones en R y Python" : "Bayesian statistics with R and Python"}</h3>
                                    <p><b>{idioma === "es" ? "Sociedad Argentina de estadística (Noviembre de 2022)" : "Argentine Society of Statistics (November 2022)"}</b></p>
                                </>
                            }
                            texto={
                                <>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>Data analytics</h3>
                                    <p><b>Perfil e-learning {idioma === "es" ? "(Septiembre-Noviembre de 2022)" : "(September-November 2022)"}</b></p>
                                </>
                            }

                            texto={
                                <>
                                    <p>{idioma === "es" ? "Data storytelling, visualización de datos con Power BI, SQL." : "Data storytelling, data visualization with Power BI, SQL."}</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>PHP Full Stack</h3>
                                    <p><b>Agencia de Aprendizaje a lo largo de la vida {idioma === "es" ? "(Agosto-Diciembre de 2021)" : "(August-December 2021)"}</b></p>
                                </>
                            }

                            texto={
                                <>
                                    <p>{idioma === "es" ? "Desarrollo web, HTML y CSS, JavaScript, Git y GitHub, conexión con bases de datos." : "Web development, HTML and CSS, JavaScript, Git and GitHub, connection with databases."}</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Procesamiento avanzado de la Información" : "Advanced Data Processing"}</h3>
                                    <p><b>{idioma === "es" ? "Facultad de Ciencias Económicas y Estadística, UNR (Septiembre-Octubre de 2021)" : "Faculty of Economics and Statistics, National University of Rosario (September-October 2021)"}</b></p>
                                </>
                            }

                            texto={
                                <>
                                    <p>{idioma === "es" ? "Minería de datos, limpieza de datos, Big Data, técnicas de Machine Learning." : "Data mining, data cleansing, Big Data, Machine Learning."}</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Estadística Bayesiana" : "Bayesian Statistics"}</h3>
                                    <p><b>{idioma === "es" ? "Facultad de Ciencias Económicas y Estadística, UNR (Mayo-Septiembre de 2021)" : "Faculty of Economics and Statistics, National University of Rosario (May-September 2021)"}</b></p>
                                </>
                            }

                            texto={
                                <br></br>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Curso avanzado de R" : "Advanced R"}</h3>
                                    <p><b>{idioma === "es" ? "Facultad de Ciencias Económicas y Estadística, UNR (Agosto-Septiembre de 2020)" : "Faculty of Economics and Statistics, National University of Rosario (August-September 2020)"} </b></p>
                                </>
                            }

                            texto={
                                <>
                                    <p>{idioma === "es" ? "Funciones, Creación de paquetes, R Markdown, Datos georreferenciados, Shiny." : "Functions, Packages, R Markdown, Georeferenced data, Shiny."}</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Funciones y herramientas avanzadas con Microsoft Excel" : "Advanced functions and tools with Microsoft Excel"}</h3>
                                    <p><b>FACES Consultores ({idioma === "es" ? "Junio de 2020" : "June 2020"})</b></p>
                                </>
                            }

                            texto={
                                <>
                                    <p>{idioma === "es" ? "Tipos de errores, Funcion AGREGAR, Filtros avanzados, Análisis de hipótesis." : "Types of errors, AGGREGATE function, Advanced filters, Hypothesis testing."}</p>
                                    <br></br>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>Introduction to ANOVA, Regression and Logistic Regression</h3>
                                    <p><b>SAS ({idioma === "es" ? "Abril de 2020" : "April 2020"})</b></p>
                                </>
                            }

                            texto={
                                ""
                            }
                        />
                    </>
                )
            case 5:
                return (
                    <>
                        <TablaLista
                            titulo={
                                <>
                                    <h2>{idioma === "es" ? "Estadística" : "Statistics"}</h2>
                                </>
                            }
                            texto={
                                <>
                                    <ul>
                                        <li>{idioma === "es" ? "Modelos estadísticos" : "Statistical models"}</li>
                                        <li>{idioma === "es" ? "Anállisis multivariado" : "Multivariate analysis"}</li>
                                        <li>{idioma === "es" ? "Visualización de datos" : "Data visualization"}</li>
                                        <li>{idioma === "es" ? "Muestreo" : "Statistical sampling"}</li>
                                        <li>{idioma === "es" ? "Diseño de experimentos" : "Design of experiments"} </li>
                                        <li>{idioma === "es" ? "Procesamiento de datos" : "Data processing"}</li>
                                        <li>{idioma === "es" ? "Simulaciones" : "Simulations"}</li>
                                        <li>{idioma === "es" ? "Aprendizaje automático" : "Machine learning"}</li>
                                        <li>{idioma === "es" ? "Estadística bayesiana" : "Bayesian statistics"}</li>
                                        <li>{idioma === "es" ? "Bioestadística" : "Biostatistics"}</li>
                                        <li>{idioma === "es" ? "Econometría" : "Econometrics"}</li>
                                        <li>{idioma === "es" ? "Métodos numéricos" : "Numerical methods"}</li>
                                    </ul>
                                </>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3>{idioma === "es" ? "Idiomas" : "Languages"} </h3>
                                </>
                            }

                            texto={
                                <ul>
                                    <li> <b>{idioma === "es" ? "Español" : "Spanish"}</b>- {idioma === "es" ? "Hablante nativo" : "Native speaker"}</li>
                                    <li> <b>{idioma === "es" ? "Inglés" : "English"}</b> - {idioma === "es" ? "Nivel avanzado (C1)" : "Advanced level (C1)"}</li>
                                    <li> <b>{idioma === "es" ? "Francés" : "French"}</b> - {idioma === "es" ? "Nivel intermedio" : "Intermediate level"} </li>
                                    <li> <b>{idioma === "es" ? "Portugués" : "Portuguese"}</b> - {idioma === "es" ? "Nivel intermedio" : "Intermediate level"}</li>
                                    <li> <b>{idioma === "es" ? "Italiano" : "Italian"}</b> - {idioma === "es" ? "Nivel básico" : "Basic level"}</li>
                                    <li> <b>{idioma === "es" ? "Lenguaje de señas americano (ASL)" : "American Sign Language (ASL)"}</b> - {idioma === "es" ? "Nivel básico" : "Basic level"}</li>
                                </ul>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3> {idioma === "es" ? "Lenguajes de programación" : "Programming languages"} </h3>
                                </>
                            }

                            texto={
                                <ul>
                                    <li>R ({idioma === "es" ? "incluyendo" : "including"} R Markdown {idioma === "es" ? "y" : "and"} Shiny)</li>
                                    <li>Python</li>
                                    <li>SQL</li>
                                    <li>PHP</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript ({idioma === "es" ? "incluyendo" : "including"} React {idioma === "es" ? "y" : "and"} Node.js)</li>
                                    <li>Java</li>
                                    <li>Markdown</li>
                                </ul>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3> {idioma === "es" ? "Software estadístico" : "Statistical software"} </h3>
                                </>
                            }

                            texto={
                                <ul>
                                    <li>SAS</li>
                                    <li>Minitab</li>
                                    <li>Statgraphics</li>
                                    <li>SPSS</li>
                                    <li>Stata</li>
                                </ul>
                            }
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3> {idioma === "es" ? "Otras herramientas" : "Other knowledge"}  </h3>
                                </>
                            }

                            texto={
                                <ul>
                                    <li>Power BI</li>
                                    <li>Tableau</li>
                                    <li>Web Scraping</li>
                                    <li>Microsoft Office (Word, Excel, Powerpoint, Publisher, Access)</li>
                                    <li>Google Docs</li>
                                    <li>LaTeX</li>
                                    <li>Adobe Premiere Pro {idioma === "es" ? "y" : "and"} Adobe After Effects</li>
                                    <li>Adobe Photoshop</li>
                                </ul>
                            }
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