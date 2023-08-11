import { useOutletContext } from "react-router-dom";
import { useState } from 'react';

import Etiqueta from "../componentes/Etiqueta"
import Tarjeta from '../componentes/Tarjeta';

import "../hojas/Portafolio.css";

//Imágenes para cards
import imgPinguino from "../img/portafolio/portafolio-pinguinos.png"
import imgPais from "../img/portafolio/portafolio-sas-paises.png"
import imgTesina from "../img/portafolio/portafolio-tesina.png"
import imgSelector from "../img/portafolio/portafolio-ggplotselector.png"
import imgPosterFutbol from "../img/portafolio/portafolio-posterfutbol.png"
import imgPosterTesina from "../img/portafolio/portafolio-postertesina.png"
import imgBurnout from "../img/portafolio/portafolio-burnout-resultadossexo.png"
import imgMapa from "../img/portafolio/portafolio-mapa-usa.png"
import imgMW from "../img/portafolio/mw/portafolio-mw-raza2-es.png"
import imgJS from "../img/portafolio/portafolio-sitio-js.png"


function Portafolio() {
    //Idioma
    const [idioma] = useOutletContext();

    //Elegir categorías de las etiquetas
    const [selectedCategories, setSelectedCategories] = useState([]);

    const manejarClic = id => {

        if (selectedCategories.includes(id)) {
            setSelectedCategories(selectedCategories.filter(category => category !== id));
        } else {
            setSelectedCategories([...selectedCategories, id]);
        }

    }

    //Lista de tarjetas
    const tarjetas = [
        {
            titulo: idioma === "es" ? "Tesina de grado" : "Undergraduate thesis",
            etiquetas: ['etiqueta-r', "etiqueta-machine-learning", "etiqueta-analisis-texto"],
            texto: idioma === "es" ? 'Código correspondiente a mi tesina: "Clasificación supervisada de textos de ficción según género utilizando bosques aleatorios"' : "Code for my undergraduate thesis: 'Supervised Classification of Fiction Texts by Genre using Random Forests'",
            imagen: imgTesina,
            enlace: 'https://github.com/SGS2000/tesina-bosques-aleatorios'
        },
        {
            titulo: idioma === "es" ? "Tesina - póster" : "Thesis (poster)",
            etiquetas: ["etiqueta-power"],
            texto: idioma === "es" ? "Póster presentado en las V Jornadas de Jóvenes Investigadores de la UNR." : "Poster presented at the V Young Researchers Conference.",
            imagen: imgPosterTesina,
            enlace: '/portafolio/postertesina'
        },
        {
            titulo: idioma === "es" ? "Selector de temas para ggplot2" : "ggplot2 theme selector",
            etiquetas: ['etiqueta-r', "etiqueta-data-viz"],
            texto: idioma === "es" ? 'App Shiny que permite al usuario subir un archivo ggplot y probar distintos estilos.' : "Shiny App that allows the user to upload a ggplot file and test different themes.",
            imagen: imgSelector,
            enlace: 'https://sgs2000.shinyapps.io/themeselector/'
        },
        {
            titulo: idioma === "es" ? "Análisis del valor de mercado de jugadores de fútbol" : "Football players' market value analysis",
            etiquetas: ['etiqueta-r',"etiqueta-econ","etiqueta-modeloslin"],
            texto: idioma === "es" ? "Póster presentado en el XLIX Coloquio Argentino de Estadística." : "Poster presented at the XLIX Argentine Colloquium of Statistics.",
            imagen: imgPosterFutbol,
            enlace: '/portafolio/posterfutbol'
        },
        {
            titulo: idioma === "es" ? "Análisis de componentes principales: CIA World Factbook" : "Principal component analysis: CIA World Factbook",
            etiquetas: ['etiqueta-sas',"etiqueta-multivar"],
            texto: idioma === "es" ? "Aplicación de ACP a un conjunto con datos de múltiples países." : "Application of PCA to a set of data from multiple countries.",
            imagen: imgPais,
            enlace: '/portafolio/acpcia'
        },
        {
            titulo: idioma === "es" ? "Burnout en personal de salud" : "Occupational Burnout in healthcare workers",
            etiquetas: ['etiqueta-sas',"etiqueta-modeloslin","etiqueta-bio"],
            texto: idioma === "es" ? "Estudio del efecto del burnout en el personal de salud de una localidad en Argentina." : "Study of the effect of burnout on healthcare personnel in a town in Argentina.",
            imagen: imgBurnout,
            enlace: '/portafolio/burnout'
        },
        {
            titulo: idioma === "es" ? "Personajes en The Elder Scrolls III: Morrowind" : "NPCs in The Elder Scrolls III: Morrowind",
            etiquetas: ['etiqueta-sas',"etiqueta-r","etiqueta-spss","etiqueta-multivar", "etiqueta-machine-learning"],
            texto: idioma === "es" ? "Construcción de un conjunto de datos con los personajes del videojuego The Elder Scrolls III: Morrowind para presentar diversas técnicas estadísticas." : "Creation of a dataset with NPCs from the video game The Elder Scrolls III: Morrowind to showcase various statistical techniques.",
            imagen: imgMW,
            enlace: '/portafolio/morrowind'
        },
        {
            titulo: idioma === "es" ? "Visualización de datos con R" : "Data Visualization with R",
            etiquetas: ['etiqueta-r', "etiqueta-data-viz"],
            texto: idioma === "es" ? "Diversos gráficos realizados en R, incluyendo gráficos animados" : "Various plots made with R, including animated graphics.",
            imagen: imgPinguino,
            enlace: '/portafolio/rviz'
        },
        {
            titulo: idioma === "es" ? "Mapas con R" : "Maps with R",
            etiquetas: ['etiqueta-r', "etiqueta-data-viz"],
            texto: idioma === "es" ? "Mapas varios realizados con diversos paquetes de R." : "Various maps created with different R packages.",
            imagen: imgMapa,
            enlace: '/portafolio/rmapas'
        },
        {
            titulo: idioma === "es" ? "Sitio web básico con HTML, CSS y JS" : "Basic website using HTML, CSS, and JS",
            etiquetas: ['etiqueta-js'],
            texto: idioma === "es" ? 'Sitio web para una conferencia ficticia, hecho para el curso "PHP Full Stack" (2021).' : "Website for a fictional event, created for the 'PHP Full Stack' course (2021).",
            imagen: imgJS,
            enlace: 'https://sgs2000.github.io/html/tpjavascript/index.html'
        }
    ];

    return (
        <>
            <h1> {idioma === "es" ? "Portafolio" : "Portfolio"} </h1>
            <div className="contenedor-de-etiquetas">
                <p className="texto-tema-etiqueta"><b> {idioma === "es" ? "Tema" : "Topic"}</b>:</p>
                <Etiqueta
                    id="etiqueta-bio"
                    etiqueta={idioma === "es" ? "Bioestadística" : "Biostatistics"}
                    manejarClic={manejarClic}
                />
                <Etiqueta
                    id="etiqueta-econ"
                    etiqueta={idioma === "es" ? "Econometría" : "Econometrics"}
                    manejarClic={manejarClic}
                />
                <Etiqueta
                    id="etiqueta-multivar"
                    etiqueta={idioma === "es" ? "Datos multivariados" : "Multivariate statistics"}
                    manejarClic={manejarClic}
                />
                <Etiqueta
                    id="etiqueta-machine-learning"
                    etiqueta="Machine learning"
                    manejarClic={manejarClic}
                />
                <Etiqueta
                    id="etiqueta-analisis-texto"
                    etiqueta={idioma === "es" ? "Minería de textos" : "Text Mining"}
                    manejarClic={manejarClic}
                />
                <Etiqueta
                    id="etiqueta-modeloslin"
                    etiqueta={idioma === "es" ? "Modelos lineales" : "Linear models"}
                    manejarClic={manejarClic}
                />
                <Etiqueta
                    id="etiqueta-data-viz"
                    etiqueta={idioma === "es" ? "Visualización de datos" : "Data Visualization"}
                    manejarClic={manejarClic}
                />
            </div>

            <div className="contenedor-de-etiquetas">
                <p className="texto-tema-etiqueta"><b>Software</b>:</p>
                <Etiqueta
                    id="etiqueta-r"
                    etiqueta="R"
                    manejarClic={manejarClic}
                />
                <Etiqueta
                    id="etiqueta-sas"
                    etiqueta="SAS"
                    manejarClic={manejarClic}
                />
                <Etiqueta
                    id="etiqueta-spss"
                    etiqueta="SPSS"
                    manejarClic={manejarClic}
                />
                <Etiqueta
                    id="etiqueta-power"
                    etiqueta="PowerPoint"
                    manejarClic={manejarClic}
                />
                <Etiqueta
                    id="etiqueta-js"
                    etiqueta="JavaScript"
                    manejarClic={manejarClic}
                />
             </div>

            <div className="contenedor-de-tarjetas">

            {/* Mostrar las tarjetas condicionalmente */}
                {tarjetas.filter(tarjeta => {
                    if (selectedCategories.length === 0) {
                        return true;
                    } else {
                        //etiqueta
                        return tarjeta.etiquetas.some(id => selectedCategories.includes(id));
                    }
                }).map(tarjeta => (
                    <Tarjeta titulo={tarjeta.titulo} etiquetas={tarjeta.etiquetas} texto={tarjeta.texto} imagen={tarjeta.imagen} enlace={tarjeta.enlace} key={tarjeta.titulo} />
                ))}
            </div>

        </>
    );
}

export default Portafolio;