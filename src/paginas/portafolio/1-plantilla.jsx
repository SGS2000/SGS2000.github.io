// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

// Imagenes
import IMAGEN from "../../img/portafolio/IMAGEN"

function NOMBRE() {
    //Idioma
    const [idioma] = useOutletContext();
    const es = idioma === "es";

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{es ? "TITULO ESPAÑOL" : "TITULO INGLES"}</h1>

            </div>
        </>
    )
}

export default NOMBRE;