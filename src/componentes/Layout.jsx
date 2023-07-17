import React from "react";
import {Outlet} from "react-router-dom";
import {Nav, Navbar, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";

// Paginas
import Footer from "./Footer";

// CSS
import "../hojas/Layout.css";

// Imágenes
import spain from '../img/spain.png';
import uk from '../img/uk.png';



const Layout = () => {
 
//  Idioma   
const [idioma, setIdioma] = React.useState("es");

  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            {/* Título/Home */}
            <Navbar.Brand id="brandBarra" href="#home"  as={Link} to="/">Santiago García Sánchez</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="ml-auto">
                    {/* Secciones */}
                    <Nav.Link className="linkBarra" as={Link} to="/curriculum"> Curriculum </Nav.Link>
                    <Nav.Link className="linkBarra" as={Link} to="/portafolio"> {idioma === "es" ?  "Portafolio" : "Portfolio"} </Nav.Link>
                    <Nav.Link className="linkBarra" as={Link} to="/reconocimientos"> {idioma === "es" ?  "Premios" : "Awards"} </Nav.Link>
                    <Nav.Link className="linkBarra" as={Link} to="/contacto"> {idioma === "es" ?  "Contacto" : "Contact"} </Nav.Link>
                    {/* Boton de idiomas */}
                    <NavLink>
                    <img id="botonIdioma" onClick={() => setIdioma( idioma === "es" ?  'en' : 'es'  )} 
                    src={idioma === "es" ?  spain : uk}
                    alt={idioma === "es" ?  'Cambiar idioma' : 'Change language'} 
                    >
                    </img>
                    </NavLink>
                    {/* Link a LinkedIn */}
                    <NavLink  as={Link} to="https://www.linkedin.com/in/santiago-garcia-sanchez-21b20a1a9" target="_blank"> <i className="fab fa-linkedin" id="logo_link"></i> </NavLink>
                    {/* Link a GitHub */}
                    <NavLink  as={Link} to="https://github.com/SGS2000/" target="_blank"> <i className="fab fa-github" id="logo_git"></i> </NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
      <Outlet context={[idioma, setIdioma]}/>
      <Footer />
    </>
  );
};

export default Layout;