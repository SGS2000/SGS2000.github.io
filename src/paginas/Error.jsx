import React from 'react';
import { useOutletContext } from "react-router-dom";

// CSS
import "../hojas/Error.css";

function Home() {

    //Idioma
    const [idioma, setIdioma] = useOutletContext();

    return (
        <div>
            <h1>Error</h1>
            <p>{idioma === "es" ?  "Página no encontrada" : "Page not found"}</p>
        </div>
    );
}

export default Home;