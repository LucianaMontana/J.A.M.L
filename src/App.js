import React from 'react';
/* import Logueo from './componentes/logueo/Logueo';
import Home from './componentes/home/Home'; */
import Prueba from './pages/prueba';
/*  import { app } from './componentes/firebase';*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/login';
import AltaUsuario from './pages/altausuario';
import Registrate from './pages/altausuario';


function App() {

  /*  const [usuario, setUsuario] = React.useState(null);*/
  return(
          <Router>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/registro' element={<Registrate />} />
        </Routes>
      </Router>
    
  );
}
export default App;

