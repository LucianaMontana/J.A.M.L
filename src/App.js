import React from 'react';
import InicioSesion from './componentes/login/InicioSesion';
import Registrarse from './componentes/registro/Registrarse';
import Home from './componentes/home/Home';

import { app } from './componentes/firebase';


function App() {

  const [ usuario, setUsuario ] = React.useState(null);

  return (
    <>
      {usuario ? <Home/> : <InicioSesion/>}
    </>
  );
}
export default App;

