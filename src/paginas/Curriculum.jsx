import TablaLista from '../componentes/TablaLista';
import { useOutletContext } from "react-router-dom";
import "../hojas/Curriculum.css";
import { useState } from 'react';
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
        buttons[val - 1].classList.add('active');

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
                            titulo={<h2> {idioma === "es" ? 'Analista de datos' : 'Data Analyst'} </h2>}
                            imagen={<img src={imgUNRaf} className='curriculum-img' alt='logo'></img>}
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
                            titulo={<h2> {idioma === "es" ? 'Estadístico autónomo' : 'Freelance Statistician'} </h2>}
                            imagen={<img src={imgGrafico} className='curriculum-img' alt='logo'></img>}
                            texto={
                                <>
                                    <p> {idioma === "es" ? "Diversos estudios estadísticos y asistencia técnica para múltiples organismos públicos y privados" : "Data analysis and technical assistance for multiple public and private organizations"}.</p>
                                    <p> {idioma === "es" ? <b>Lugar</b> : <b>Location</b>}:  {idioma === "es" ? "Varios" : "Various"}  </p>
                                    <p> {idioma === "es" ? <b>Duración</b> : <b>Duration</b>}: {idioma === "es" ? "Noviembre de 2022-presente" : "November 2022-present"} </p>
                                </>


                            }
                        />
                        <TablaLista
                            titulo={<h2> {idioma === "es" ? 'Colaborador - Curso "Desarrollo de Shiny Apps"' : 'Course Assistant - Course: "Shiny Apps Development""'} </h2>}
                            imagen={<img src={imgUNR} className='curriculum-img' alt='logo'></img>}
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
                        />
                    </>
                )
            case 4:
                return (
                    <>
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
                                    <p>{idioma === "es" ? "Funciones, Creación de paquetes, R Markdown, Datos georreferenciados, Shiny." : "Functions, Packages, R Markdown, Georeferenced data, Shiny."}</p>
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
                                    <p>{idioma === "es" ? "Tipos de errores, Funcion AGREGAR, Filtros avanzados, Análisis de hipótesis." : "Types of errors, AGGREGATE function, Advanced filters, Hypothesis testing."}</p>
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
                                    <p>{idioma === "es" ? "ANOVA y Regresión, Tests de hipótesis, Análisis de los residuos,  Datos categóricos." : "ANOVA and Regression, Hypothesis testing, Residual analysis, Categorical data"}</p>
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
                                <>
                                    <h2>{idioma === "es" ? "Estadística" : "Statistics"}</h2>
                                </>
                            }
                            texto={
                                <>
                                    <ul>
                                        <li>{idioma === "es" ? "Modelos estadísticos" : "Statistical models"}</li>
                                        <li>{idioma === "es" ? "Análisis multivariado" : "Multivariate analysis"}</li>
                                        <li>{idioma === "es" ? "Visualización de datos" : "Data visualization"}</li>
                                        <li>{idioma === "es" ? "Muestreo" : "Statistical sampling"}</li>
                                        <li>{idioma === "es" ? "Diseño de experimentos" : "Design of experiments"} </li>
                                        <li>{idioma === "es" ? "Series de tiempo" : "Time series"} </li>
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
                        />
                        <TablaLista
                            titulo={
                                <>
                                    <h3> {idioma === "es" ? "Lenguajes de programación" : "Programming languages"} </h3>
                                </>
                            }

                            texto={
                                <ul>
                                    <li>R</li>
                                    <details>
                                        <summary> {idioma === "es" ? "Ver más" : "See more"} </summary>
                                        <ul>
                                            <li>Tidyverse </li>
                                            <li>R Markdown </li>
                                            <li>Shiny </li>
                                        </ul>
                                    </details>
                                    <li>Python</li>
                                    <details>
                                        <summary> {idioma === "es" ? "Ver más" : "See more"} </summary>
                                        <ul>
                                            <li>Numpy / Pandas </li>
                                            <li>Scikit-learn / TensorFlow / Keras / Fairlearn</li>
                                            <li>Matplotlib / Seaborn / Plotly </li>
                                        </ul>
                                    </details>
                                    <li>SQL</li>
                                    <li>PHP</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <ul>
                                        <li>Bootstrap </li>
                                    </ul>
                                    <li>JavaScript</li>
                                    <ul>
                                        <li>React / Node.js </li>
                                    </ul>
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
                                    <li>Web Scraping / Selenium</li>
                                    <li>Microsoft Office (Word, Excel, Powerpoint, Publisher, Access)</li>
                                    <li>Google Docs</li>
                                    <li>LaTeX</li>
                                    <li>Quarto</li>
                                    <li>Prezi</li>
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