import React from 'react';
import { useOutletContext } from "react-router-dom";

// CSS
import "../hojas/Error.css";

function Home() {

    //Idioma
    const [idioma] = useOutletContext();
    const es = idioma === "es";

    return (
        <div>
            <h1>Error</h1>
            <p>{es ? "Página no encontrada" : "Page not found"}</p>
        </div>
    );
}

export default Home;