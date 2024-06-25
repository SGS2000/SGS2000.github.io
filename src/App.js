import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

//Componentes
import Layout from "./componentes/Layout";

// Páginas
import Home from "./paginas/Home.jsx";
import Portafolio from "./paginas/Portafolio";
import Curriculum from "./paginas/Curriculum";
import Reconocimientos from './paginas/Reconocimientos';
import Publicaciones from './paginas/Publicaciones';
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
import PortafolioSitioPHP from "./paginas/portafolio/sitiophp";
import PortafolioSelector from "./paginas/portafolio/selector";
import PortafolioPreziTests from "./paginas/portafolio/prezitests.jsx";
import PortafolioR3D from "./paginas/portafolio/r3d.jsx";
import PortafolioSpssreg from "./paginas/portafolio/spssreg.jsx";
import PortafolioStatasurv from "./paginas/portafolio/statasurv.jsx";

//CSS
import './App.css';
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
            <Route path="portafolio/sitiophp" element={<PortafolioSitioPHP/>} /> 
            <Route path="portafolio/selector" element={<PortafolioSelector/>} /> 
            <Route path="portafolio/prezitests" element={<PortafolioPreziTests/>} /> 
            <Route path="portafolio/r3d" element={<PortafolioR3D/>} /> 
            <Route path="portafolio/spssreg" element={<PortafolioSpssreg/>} /> 
            <Route path="portafolio/statasurv" element={<PortafolioStatasurv/>} /> 
          <Route path="reconocimientos" element={<Reconocimientos/>} />
          <Route path="publicaciones" element={<Publicaciones/>} />
          <Route path="contacto" element={<Contacto/>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

