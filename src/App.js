import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header.js';
import Formulario from './componentes/Formulario.js';
import ListaTareas from './componentes/ListaTareas.js';

const App = () => {
  const tareasGuardadas = 
  localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;
  }else{
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === true;
  }

  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className='contenedor'>
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas}/>
      <Formulario tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} mostrarCompletadas={mostrarCompletadas}/>
    </div>
  );
}

export default App;
