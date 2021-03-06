import './App.css';
import Boton from './componentes/boton.js'
import Contador from './componentes/Contador.js'
import freeCodeCampLogo from './imagenes/logofcc.png';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={freeCodeCampLogo}
          alt='Logo de fcc'/> 
      </div>
      <div className='contenedor-ppal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>  
    </div>
  );
}

export default App;
