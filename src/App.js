import React, { useEffect } from 'react';
import { app } from './componentes/firebase';
import Logueo from './componentes/logueo/Logueo';
import Home from './componentes/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/login';
import Registrate from './pages/altausuario';
import Inicio from './pages/inicio';
import PasswordInput from './pages/OlvidoContraseña';

const RutaPrivada = ({ element, usuario }) => {
  return usuario ? element : <Navigate to='/' />;
};

const RutaPublica = ({ element, usuario }) => {
  return usuario ? <Navigate to='/home' /> : element;
};

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
          element={
            <RutaPublica
              element={<Logueo setUsuario={setUsuario} />}
              usuario={usuario}
            />
          }
        />
        <Route
          path='/home'
          element={<RutaPrivada element={<Home />} usuario={usuario} />}
        />
        <Route
          path='/registro'
          element={<RutaPrivada element={<Registrate />} usuario={usuario} />}
        />
        <Route
          path='/inicio'
          element={<RutaPrivada element={<Inicio />} usuario={usuario} />}
        />
        <Route
          path='/olvido'
          element={
            <RutaPublica element={<PasswordInput />} usuario={usuario} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
