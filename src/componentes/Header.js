import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

const Header = ({mostrarCompletadas, cambiarMostrarCompletadas}) => {
    const toggleCompletadas = () => {
        cambiarMostrarCompletadas(!mostrarCompletadas);
    }

    return (  
        <header className='header'>
            <h1 className='header__titulo'>
                Lista De Tareas
            </h1>
            {mostrarCompletadas?
                <button onClick={() => toggleCompletadas()} className='header__boton'>
                    No mostrar completadas
                    <FontAwesomeIcon icon={faEyeSlash} className='header__icono-boton'/>
                </button>
            :
                <button onClick={() => toggleCompletadas()} className='header__boton'>
                    Mostrar completadas
                    <FontAwesomeIcon icon={faEye} className='header__icono-boton'/>
                </button>
            }
            
        </header>
    );
}

export default Header;