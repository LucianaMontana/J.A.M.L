import React, { useEffect } from 'react';
import { app } from './componentes/firebase';
import Logueo from './componentes/logueo/Logueo';
import Home from './componentes/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/login';
import Registrate from './pages/altausuario';
import Inicio from './pages/inicio';
import Algoraro from './componentes/logueo/algoraro';

function App() {
  const [usuario, setUsuario] = React.useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log('Ya tienen sesion iniciada con:', usuarioFirebase);
      setUsuario(usuarioFirebase);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={usuario ? <Home /> : <Logueo setUsuario={setUsuario} />}
        />
        <Route path='/home' element={<SignIn />} />
        <Route path='/registro' element={<Registrate />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/algo' element={<Algoraro />} />
      </Routes>
    </Router>
  );
}

export default App;
