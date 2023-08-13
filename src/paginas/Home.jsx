import React from 'react';

// CSS
import "../hojas/Home.css";

//Componentes
import TextoHome from '../componentes/TextoHome';

// Imagenes
import fondo1 from "../img/fondo.png";
import fondo2 from "../img/fondo2.png";
import fondo3 from "../img/fondo3.png";

//Bootstrap
import Carousel from 'react-bootstrap/Carousel';

function Home() {

    return (
        <div>
            <Carousel fade  indicators={false} controls={false}>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fondo1}
                        alt="Primer fondo"
                    />
                    <Carousel.Caption className="contenedor-Texto-Home">
                        <TextoHome>
                            
                        </TextoHome>
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fondo2}
                        alt="Segundo fondo"
                    />

                    <Carousel.Caption className="contenedor-Texto-Home">
                        <TextoHome>
                            
                        </TextoHome>
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fondo3}
                        alt="Tercer fondo"
                    />

                    <Carousel.Caption className="contenedor-Texto-Home">
                        <TextoHome>
                            
                        </TextoHome>
                    </Carousel.Caption>

                </Carousel.Item>

            </Carousel>

        </div>

    );
}

export default Home;