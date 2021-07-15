import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'

const Tarea = ({tarea, toggleCompletada, editarTarea, borrarTarea}) => {
    const [editandotarea, cambiarEditandoTarea] = useState(false);
    const [nuevatarea, cambiarNuevaTarea] = useState(tarea.texto);

    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nuevatarea);
        cambiarEditandoTarea(false);
    }

    return (  
        <li className='lista-tareas__tarea'>
            <FontAwesomeIcon onClick={() => toggleCompletada(tarea.id)} icon={tarea.completada ? faCheckSquare : faSquare} className='lista-tareas__icono lista-tareas__icono-check'/>
            <div className='lista-tareas__texto'>
            {editandotarea ?
            <form className='formulario-editar-tarea' onSubmit={handleSubmit}>
                <input type='text' className='formulario-editar-tarea__input' value={nuevatarea} onChange={(e) => cambiarNuevaTarea(e.target.value)}/>
                <button type='submit' className='formulario-editar-tarea__btn'>Actualizar</button>
            </form>
            : tarea.texto
            }
            </div>
            <div className='lista-tareas__contenedor-botones'>
                <FontAwesomeIcon 
                    icon={faEdit} 
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={() => cambiarEditandoTarea(!editandotarea)}
                />
                <FontAwesomeIcon 
                    icon={faTimes} 
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={() => borrarTarea(tarea.id)}
                />
            </div>
        </li>

    );
}

export default Tarea;