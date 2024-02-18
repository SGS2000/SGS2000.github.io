import React, { useState, useEffect } from "react";

//CSS
import "../hojas/ContenedorTarjetas.css";

//Componentes
import Tarjeta from '../componentes/Tarjeta';

function ContenedorTarjetas({ tarjetas, categoriasSeleccionadas }) {

    //Si se deseleccionan las categorías, se reinicia el componente
    const [resetear, setResetear] = useState(0);

    useEffect(() => {
        if (categoriasSeleccionadas.length === 0) {
            setResetear(prevResetear => prevResetear + 1);
        }
    }, [categoriasSeleccionadas]);

    //Devolver el contenedor
    return (
        <>
            {categoriasSeleccionadas.length === 0 ?

                <div key={resetear} className="contenedor-de-tarjetas">

                    {/* Mostrar todas las tarjetas */}
                    {tarjetas.map(tarjeta => (
                        <Tarjeta titulo={tarjeta.titulo}
                            etiquetas={tarjeta.etiquetas}
                            texto={tarjeta.texto}
                            imagen={tarjeta.imagen}
                            enlace={tarjeta.enlace}
                            key={tarjeta.titulo} />
                    ))}
                </div>

                :

                <div className="contenedor-de-tarjetas">

                    {/* Mostrar las tarjetas condicionalmente */}
                    {tarjetas.filter(tarjeta => {
                        if (categoriasSeleccionadas.length === 0) {
                            return true;
                        } else {
                            //etiqueta
                            return tarjeta.etiquetas.some(id => categoriasSeleccionadas.includes(id));
                        }
                    }).map(tarjeta => (
                        <Tarjeta titulo={tarjeta.titulo}
                            etiquetas={tarjeta.etiquetas}
                            texto={tarjeta.texto}
                            imagen={tarjeta.imagen}
                            enlace={tarjeta.enlace}
                            key={tarjeta.titulo} />
                    ))}
                </div>
            }

        </>
    );
};

export default ContenedorTarjetas;