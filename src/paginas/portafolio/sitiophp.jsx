// React
import { useOutletContext } from "react-router-dom";

// CSS
import "../../hojas/PortafolioEstilo.css"

// Imagenes
import videoPHP from "../../video/portafolio/portafolio-sitio-php-video.mp4"

function SitioPHP() {
    //Idioma
    const [idioma] = useOutletContext();
    const es = idioma === "es";

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>{es ? "Sistema de registro de usuarios" : "User Registration System"}</h1>
                <p>
                    {es ? "Como parte del proyecto final del curso 'PHP Full Stack', se creó un sistema de registro de usuarios para una conferencia ficticia utilizando PHP y MySQL. Este sistema permite al usuario registrarse a la conferencia, modificar sus datos o darse de baja introduciendo la contraseña correspondiente. El sitio web muestra un listado con todos los usuarios registrados actualmente"
                        : "As part of the final project for the 'PHP Full Stack' course, a user registration system was created for a fictional conference using PHP and MySQL. The system allows users to register for the conference, update their information, or unregister by entering the corresponding password. The website displays a list of all currently registered users"}.
                </p>
                <p>
                    {es ? "La página donde se alojaba el proyecto original ya no está disponible, pero el siguiente video permite visualizar su funcionamiento"
                        : "The page hosting the original project is no longer available, but the following video shows how it worked"}:
                </p>
                <video className="video" controls >
                    <source src={videoPHP} type="video/mp4" />
                    {es ? "Ha ocurrido un error, el video no puede reproducirse." : "An error has occurred; the video cannot be played."}
                </video>
            </div>
        </>
    )
}

export default SitioPHP;