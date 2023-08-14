import React from 'react';
import Logueo from './componentes/logueo/Logueo';
import Home from './componentes/home/Home';

import { app } from './componentes/firebase';


function App() {

  const [ usuario, setUsuario ] = React.useState(null);

  return (
    <>
      {usuario ? <Home/> : <Logueo/>}
    </>
  );
}
export default App;

