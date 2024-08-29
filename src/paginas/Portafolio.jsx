import { useOutletContext } from "react-router-dom";
import { useState } from 'react';

//Componentes
import ContenedorTarjetas from '../componentes/ContenedorTarjetas';
import ContenedorEtiquetas from "../componentes/ContenedorEtiquetas";

//CSS
import "../hojas/Portafolio.css";

//Imágenes para cards
import imgPinguino from "../img/portafolio/portafolio-pinguinos-portada.png"
import imgPais from "../img/portafolio/portafolio-sas-paises.png"
import imgTesina from "../img/portafolio/portafolio-tesina.png"
import imgSelector from "../img/portafolio/portafolio-ggplotselector.png"
import imgPosterFutbol from "../img/portafolio/portafolio-posterfutbol.png"
import imgPosterTesina from "../img/portafolio/portafolio-postertesina.png"
import imgBurnout from "../img/portafolio/portafolio-burnout-portada.png"
import imgMapa from "../img/portafolio/portafolio-mapa-portada.png"
import imgMW from "../img/portafolio/mw/portafolio-mw-portada.png"
import imgJS from "../img/portafolio/portafolio-sitio-js.png"
import imgPlotly from "../img/portafolio/portafolio-plotly-portada.png"
import imgSeries from "../img/portafolio/series/portafolio-series-portada.png"
import imgPHP from "../img/portafolio/portafolio-sitio-php.png"
import imgJava from "../img/portafolio/portafolio-java.png"
import imgTests from "../img/portafolio/portafolio-tests.png"
import img3d from "../img/portafolio/portafolio-3d.png"
import imgReviews from "../img/portafolio/portafolio-reviews.png"
import imgSpssReg from "../img/portafolio/portafolio-spssreg-portada.png"
import imgRTextos from "../img/portafolio/portafolio-rtextos-portada.png"
import imgPrecios from "../img/portafolio/portafolio-precios.png"
import imgRPaquete from "../img/portafolio/portafolio-clustmc-logo.png"
import imgPythonViz from "../img/portafolio/portafolio-python-viz.png"
import imgStataSurv from "../img/portafolio/portafolio-stata-portada.png"


function Portafolio() {
    //Idioma
    const [idioma] = useOutletContext();

    //Elegir categorías de las etiquetas
    const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);

    const manejarClic = id => {
        // Retener solo las etiquetas seleccionadas
        if (categoriasSeleccionadas.includes(id)) {
            setCategoriasSeleccionadas(categoriasSeleccionadas.filter(category => category !== id));
        } else {
            setCategoriasSeleccionadas([...categoriasSeleccionadas, id]);
        }

        //Cambiar clase
        const etiquetas = document.querySelectorAll('.btn-outline-danger');
        etiquetas.forEach(boton => {
            if (boton.getAttribute("for") === id) {
                if (!boton.classList.contains('activada')) {
                    boton.classList.add('activada')
                } else {
                    boton.classList.remove('activada')
                }
            }
        }
        );
    }

    //Lista de tarjetas
    const tarjetas = [
        {
            titulo: idioma === "es" ? "Tesina de grado" : "Undergraduate thesis",
            etiquetas: ['etiqueta-r', "etiqueta-machine-learning", "etiqueta-analisis-texto"],
            texto: idioma === "es" ? 'Código correspondiente a mi tesina: "Clasificación supervisada de textos de ficción según género utilizando bosques aleatorios".' : "Code for my undergraduate thesis: 'Supervised Classification of Fiction Texts by Genre using Random Forests'.",
            imagen: imgTesina,
            enlace: 'https://github.com/SGS2000/tesina-bosques-aleatorios'
        },
        {
            titulo: idioma === "es" ? "Tesina - póster" : "Thesis (poster)",
            etiquetas: ["etiqueta-power"],
            texto: idioma === "es" ? "Póster presentado en las V Jornadas de Jóvenes Investigadores de la Facultad de Ciencias Económicas y Estadística." : "Poster presented at the V Young Researchers Conference.",
            imagen: imgPosterTesina,
            enlace: '/portafolio/postertesina'
        },
        {
            titulo: idioma === "es" ? "Análisis del valor de mercado de jugadores de fútbol" : "Football players' market value analysis",
            etiquetas: ['etiqueta-r', "etiqueta-econ", "etiqueta-modeloslin"],
            texto: idioma === "es" ? "Póster presentado en el XLIX Coloquio Argentino de Estadística." : "Poster presented at the XLIX Argentine Colloquium of Statistics.",
            imagen: imgPosterFutbol,
            enlace: '/portafolio/posterfutbol'
        },
        {
            titulo: idioma === "es" ? "Análisis de componentes principales: CIA World Factbook" : "Principal component analysis: CIA World Factbook",
            etiquetas: ['etiqueta-sas', "etiqueta-multivar"],
            texto: idioma === "es" ? "Aplicación de ACP a un conjunto con datos de múltiples países." : "Application of PCA to a set of data from multiple countries.",
            imagen: imgPais,
            enlace: '/portafolio/acpcia'
        },
        {
            titulo: idioma === "es" ? "Burnout en personal de salud" : "Occupational Burnout in healthcare workers",
            etiquetas: ['etiqueta-sas', "etiqueta-modeloslin", "etiqueta-bio"],
            texto: idioma === "es" ? "Estudio del efecto del burnout en el personal de salud de una localidad en Argentina." : "Study of the effect of burnout on healthcare personnel in a town in Argentina.",
            imagen: imgBurnout,
            enlace: '/portafolio/burnout'
        },
        {
            titulo: idioma === "es" ? "Series de tiempo: Temperaturas en Argentina" : "Time series: Temperatures in Argentina",
            etiquetas: ['etiqueta-r', "etiqueta-series"],
            texto: idioma === "es" ? "Pronóstico de las temperaturas en Argentina en 2020 utilizando modelos SARIMA." : "Time series forecasting of temperatures in Argentina using SARIMA models.",
            imagen: imgSeries,
            enlace: '/portafolio/seriestp'
        },
        {
            titulo: idioma === "es" ? "Prezi - Comparación de dos tratamientos" : "Prezi - Comparison of two treatments",
            etiquetas: ['etiqueta-prezi', "etiqueta-infer"],
            texto: idioma === "es" ? "Presentación sobre pruebas para comparar dos tratamientos en muestras dependientes e independientes, creada en Prezi." : "Prezi presentation about tests to compare two treatments in dependent and independent samples.",
            imagen: imgTests,
            enlace: '/portafolio/prezitests'
        },
        {
            titulo: idioma === "es" ? "Regresión lineal: Precios de viviendas" : "Linear regression: Housing prices",
            etiquetas: ['etiqueta-spss', "etiqueta-econ", "etiqueta-modeloslin"],
            texto: idioma === "es" ? "Estimación de un modelo de regresión para explicar los precios de las viviendas, usando SPSS." : "Estimating a regression model to explain house prices, using SPSS.",
            imagen: imgSpssReg,
            enlace: '/portafolio/spssreg'
        },
        {
            titulo: idioma === "es" ? "Análisis de supervivencia con Stata" : "Survival analysis in Stata",
            etiquetas: ['etiqueta-stata', "etiqueta-bio", "etiqueta-superv"],
            texto: idioma === "es" ? "Técnicas de análisis del tiempo hasta un evento en Stata." : "Time-to-event analysis techniques in Stata.",
            imagen: imgStataSurv,
            enlace: '/portafolio/statasurv'
        },
        {
            titulo: idioma === "es" ? "Personajes en The Elder Scrolls III: Morrowind" : "NPCs in The Elder Scrolls III: Morrowind",
            etiquetas: ['etiqueta-sas', "etiqueta-r", "etiqueta-spss", "etiqueta-multivar", "etiqueta-machine-learning"],
            texto: idioma === "es" ? "Construcción de un conjunto de datos con los personajes del videojuego The Elder Scrolls III: Morrowind para presentar diversas técnicas estadísticas." : "Creation of a dataset with NPCs from the video game The Elder Scrolls III: Morrowind to showcase various statistical techniques.",
            imagen: imgMW,
            enlace: '/portafolio/morrowind'
        },
        {
            titulo: idioma === "es" ? "Paquete ClustMC" : "ClustMC package",
            etiquetas: ['etiqueta-r', "etiqueta-infer"],
            texto: idioma === "es" ? 'Paquete de R que implementa pruebas de comparaciones múltiples basadas en conglomerados.' : 'R package that implements cluster-based multiple comparisons tests.',
            imagen: imgRPaquete,
            enlace: 'https://sgs2000.github.io/ClustMC/'
        },
        {
            titulo: idioma === "es" ? "Análisis de textos con R" : "Text analysis with R",
            etiquetas: ['etiqueta-r', "etiqueta-analisis-texto"],
            texto: idioma === "es" ? 'Muestra de diversas herramientas para el análisis estadístico de textos con R. Presentado para el grupo "R en Rosario" (2024).' : 'Showcase of various tools for the statistical analysis of texts with R. Presented for the "R in Rosario" group (2024).',
            imagen: imgRTextos,
            enlace: 'https://sgs2000.github.io/html/R/RTextos.html'
        },
        {
            titulo: idioma === "es" ? "Selector de temas para ggplot2" : "ggplot2 theme selector",
            etiquetas: ['etiqueta-r', "etiqueta-data-viz"],
            texto: idioma === "es" ? 'App Shiny que permite al usuario subir un archivo ggplot y probar distintos estilos.' : "Shiny App that allows the user to upload a ggplot file and test different themes.",
            imagen: imgSelector,
            enlace: '/portafolio/selector'
        },
        {
            titulo: idioma === "es" ? "Visualización de datos con R" : "Data Visualization with R",
            etiquetas: ['etiqueta-r', "etiqueta-data-viz"],
            texto: idioma === "es" ? "Diversos gráficos realizados en R, incluyendo gráficos animados." : "Various plots made with R, including animated graphics.",
            imagen: imgPinguino,
            enlace: '/portafolio/rviz'
        },
        {
            titulo: idioma === "es" ? "Gráficos 3D con R" : "3D plots in R",
            etiquetas: ['etiqueta-r', "etiqueta-data-viz"],
            texto: idioma === "es" ? "Comparación de paquetes para crear visualizaciones en más de dos dimensiones." : "Comparison of packages to create visualizations in more than two dimensions.",
            imagen: img3d,
            enlace: '/portafolio/r3d'
        },
        {
            titulo: idioma === "es" ? "Mapas con R" : "Maps with R",
            etiquetas: ['etiqueta-r', "etiqueta-data-viz"],
            texto: idioma === "es" ? "Mapas varios realizados con diversos paquetes de R." : "Various maps created with different R packages.",
            imagen: imgMapa,
            enlace: '/portafolio/rmapas'
        },
        {
            titulo: idioma === "es" ? "Gráficos interactivos con Plotly" : "Interactive plots with Plotly",
            etiquetas: ['etiqueta-r', "etiqueta-data-viz", "etiqueta-python"],
            texto: idioma === "es" ? "Visualizaciones interactivas realizadas con las librerías de Plotly, tanto para R como para Python." : "Interactive visualizations created using Plotly libraries, for both R and Python.",
            imagen: imgPlotly,
            enlace: '/portafolio/plotly'
        },
        {
            titulo: idioma === "es" ? "Visualización de datos con Python" : "Data Visualization with Python",
            etiquetas: ["etiqueta-data-viz", "etiqueta-python"],
            texto: idioma === "es" ? "Comparación de siete librerías para visualizar datos en Python." : "Showcase of seven Python libraries for data visualization.",
            imagen: imgPythonViz,
            enlace: 'https://sgs2000.github.io/html/python/GraficosPython.html'
        },
        {
            titulo: idioma === "es" ? "Clasificación automática de reseñas" : "Automatic classification of movie reviews",
            etiquetas: ['etiqueta-python', "etiqueta-machine-learning", "etiqueta-analisis-texto"],
            texto: idioma === "es" ? "Aplicación de técnicas de machine learning para clasificar reseñas de películas, utilizando Python." : "Application of machine learning techniques to classify movie reviews, using Python.",
            imagen: imgReviews,
            enlace: 'https://sgs2000.github.io/html/python/ClasificacionPython.html'
        },
        {
            titulo: idioma === "es" ? "Predicción de precios de BTC" : "BTC price forecast",
            etiquetas: ['etiqueta-python', "etiqueta-machine-learning", "etiqueta-series"],
            texto: idioma === "es" ? "Evaluación de modelos ARIMA y bosques aleatorios para predecir el precio del Bitcoin." : "Comparison of ARIMA models and random forests to predict Bitcoin prices.",
            imagen: imgPrecios,
            enlace: 'https://sgs2000.github.io/html/python/SeriesPython.html'
        },
        {
            titulo: idioma === "es" ? "Calculadora de distribuciones de probabilidad" : "Probability distributions calculator",
            etiquetas: ['etiqueta-proba', "etiqueta-java"],
            texto: idioma === "es" ? 'Programa Java para visualizar distribuciones de probabilidad y realizar distintos cálculos.' : "Java program for visualizing probability distributions and performing various calculations.",
            imagen: imgJava,
            enlace: 'https://github.com/SGS2000/calculadora-distribuciones-probabilidad'
        },
        {
            titulo: idioma === "es" ? "Sitio web básico con HTML, CSS y JS" : "Basic website using HTML, CSS, and JS",
            etiquetas: ['etiqueta-js'],
            texto: idioma === "es" ? 'Sitio web para una conferencia ficticia, hecho para el curso "PHP Full Stack" (2021).' : "Website for a fictional event, created for the 'PHP Full Stack' course (2021).",
            imagen: imgJS,
            enlace: 'https://sgs2000.github.io/html/tpjavascript/index.html'
        },
        {
            titulo: idioma === "es" ? "Sistema de registro de usuarios con PHP y MySQL" : "User Registration System with PHP and MySQL",
            etiquetas: ['etiqueta-js', 'etiqueta-php'],
            texto: idioma === "es" ? 'Ejemplo de un sistema de registro de usuarios, creado para el curso "PHP Full Stack" (2021).' : "Example of a user registration system, created for the 'PHP Full Stack' course (2021).",
            imagen: imgPHP,
            enlace: '/portafolio/sitiophp'
        }
    ];

    //Lista de etiquetas
    const etiquetasTema = [
        {
            id: "etiqueta-bio",
            etiqueta: idioma === "es" ? "Bioestadística" : "Biostatistics",
            manejarClic: manejarClic,
        },
        {
            id: "etiqueta-econ",
            etiqueta: idioma === "es" ? "Econometría" : "Econometrics",
            manejarClic: manejarClic,
        },
        {
            id: "etiqueta-multivar",
            etiqueta: idioma === "es" ? "Datos multivariados" : "Multivariate statistics",
            manejarClic: manejarClic
        },
        {
            id: "etiqueta-infer",
            etiqueta: idioma === "es" ? "Inferencia estadística" : "Statistical inference",
            manejarClic: manejarClic
        },
        {
            id: "etiqueta-machine-learning",
            etiqueta: "Machine learning",
            manejarClic: manejarClic
        },
        {
            id: "etiqueta-analisis-texto",
            etiqueta: idioma === "es" ? "Minería de textos" : "Text Mining",
            manejarClic: manejarClic
        },
        {
            id: "etiqueta-modeloslin",
            etiqueta: idioma === "es" ? "Modelos lineales" : "Linear models",
            manejarClic: manejarClic
        },
        {
            id: "etiqueta-proba",
            etiqueta: idioma === "es" ? "Probabilidades" : "Probability",
            manejarClic: manejarClic
        },
        {
            id: "etiqueta-series",
            etiqueta: idioma === "es" ? "Series de tiempo" : "Time Series",
            manejarClic: manejarClic
        },
        {
            id: "etiqueta-superv",
            etiqueta: idioma === "es" ? "Supervivencia" : "Survival analysis",
            manejarClic: manejarClic
        },
        {
            id: "etiqueta-data-viz",
            etiqueta: idioma === "es" ? "Visualización de datos" : "Data Visualization",
            manejarClic: manejarClic
        }
    ];

    const etiquetasSoftware = [
        {
            id: "etiqueta-r",
            etiqueta: "R",
            manejarClic: manejarClic,
            activada: true
        },
        {
            id: "etiqueta-python",
            etiqueta: "Python",
            manejarClic: manejarClic,
            activada: false
        },
        {
            id: "etiqueta-sas",
            etiqueta: "SAS",
            manejarClic: manejarClic
        },
        {
            id: "etiqueta-spss",
            etiqueta: "SPSS",
            manejarClic: manejarClic
        },
        {
            id: "etiqueta-stata",
            etiqueta: "Stata",
            manejarClic: manejarClic
        },
        {
            id: "etiqueta-power",
            etiqueta: "PowerPoint",
            manejarClic: manejarClic
        },
        {
            id: "etiqueta-prezi",
            etiqueta: "Prezi",
            manejarClic: manejarClic
        },
        {
            id: "etiqueta-js",
            etiqueta: "JavaScript",
            manejarClic: manejarClic
        },
        {
            id: "etiqueta-php",
            etiqueta: "PHP",
            manejarClic: manejarClic
        },
        {
            id: "etiqueta-java",
            etiqueta: "Java",
            manejarClic: manejarClic
        }
    ];

    return (
        <>
            <h1> {idioma === "es" ? "Portafolio" : "Portfolio"} </h1>
            <div id="contenedor-portafolio">
                <ContenedorEtiquetas
                    titulo={idioma === "es" ? "Tema" : "Topic"}
                    etiquetas={etiquetasTema}
                />

                <ContenedorEtiquetas
                    titulo="Software"
                    etiquetas={etiquetasSoftware}
                />

                <ContenedorTarjetas
                    tarjetas={tarjetas}
                    categoriasSeleccionadas={categoriasSeleccionadas}
                />
            </div>
        </>
    );
}

export default Portafolio;