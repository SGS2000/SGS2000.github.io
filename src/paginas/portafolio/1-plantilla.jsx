// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

// Imagenes
import IMAGEN from "../../img/portafolio/IMAGEN"

function NOMBRE() {
    //Idioma
    const [idioma] = useOutletContext();

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{idioma === "es" ? "TITULO ESPAÑOL" : "TITULO INGLES"}</h1>

            </div>
        </>
    )
}

export default NOMBRE;