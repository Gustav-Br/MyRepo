import './App.css';
import Boton from './componentes/boton.js'
import Contador from './componentes/Contador.js'
import freeCodeCampLogo from './imagenes/logofcc.png';

function App() {

  const manejarClic = () => {
    console.log('ClicMe');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
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
        <Contador numClics='5' />
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
