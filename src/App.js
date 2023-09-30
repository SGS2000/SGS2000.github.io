import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./componentes/Layout";
// Páginas
import Home from "./paginas/Home.jsx";
import Portafolio from "./paginas/Portafolio";
import Curriculum from "./paginas/Curriculum";
import Reconocimientos from './paginas/Reconocimientos';
import Contacto from "./paginas/Contacto";
import Error from "./paginas/Error";

//Portafolio
import PortafolioRViz from "./paginas/portafolio/rviz";
import PortafolioPosterFutbol from "./paginas/portafolio/posterfutbol";
import PortafolioPosterTesina from "./paginas/portafolio/postertesina";
import PortafolioAcpcia from "./paginas/portafolio/acpcia";
import PortafolioBurnout from "./paginas/portafolio/burnout";
import PortafolioMapas from "./paginas/portafolio/rmapas";
import PortafolioMW from "./paginas/portafolio/morrowind";
import PortafolioPlotly from "./paginas/portafolio/plotly";
import PortafolioSeriesTP from "./paginas/portafolio/seriestp";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // Idioma
  const [idioma, setIdioma] = React.useState("es");

  return (
<HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} context={[idioma, setIdioma]}>
          <Route index element={<Home />} />
          <Route path="curriculum" element={<Curriculum/>} />
          <Route path="portafolio" element={<Portafolio/>} />
            {/* Portafolio */}
            <Route path="portafolio/rviz" element={<PortafolioRViz/>} /> 
            <Route path="portafolio/posterfutbol" element={<PortafolioPosterFutbol/>} /> 
            <Route path="portafolio/postertesina" element={<PortafolioPosterTesina/>} /> 
            <Route path="portafolio/acpcia" element={<PortafolioAcpcia/>} /> 
            <Route path="portafolio/burnout" element={<PortafolioBurnout/>} /> 
            <Route path="portafolio/rmapas" element={<PortafolioMapas/>} /> 
            <Route path="portafolio/morrowind" element={<PortafolioMW/>} /> 
            <Route path="portafolio/plotly" element={<PortafolioPlotly/>} /> 
            <Route path="portafolio/seriestp" element={<PortafolioSeriesTP/>} /> 
          <Route path="reconocimientos" element={<Reconocimientos/>} />
          <Route path="contacto" element={<Contacto/>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

