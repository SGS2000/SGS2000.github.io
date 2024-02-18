import { useOutletContext } from "react-router-dom";

function Contacto() {

    const [idioma] = useOutletContext();

    return (
        <>
            <h1>{idioma === "es" ? "Información de contacto" : "Contact information"}</h1>
            <ul>
                <li> <b>E-mail</b>: santiagoesquel@gmail.com </li>
                <li> <b>WhatsApp</b>: +5492945690132 </li>
                <li> <b>LinkedIn</b>: <a href="https://www.linkedin.com/in/santiago-garcia-sanchez-21b20a1a9/" target="_blank" rel="noreferrer">Santiago García Sánchez</a> </li>
                <li> <b>Instagram</b>: santi_garcia_sanchez </li>
            </ul>

        </>
    );
}

export default Contacto;