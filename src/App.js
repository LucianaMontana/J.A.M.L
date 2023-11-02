import React, { useEffect } from 'react';
import { app } from './componentes/firebase';
import Logueo from './componentes/logueo/Logueo';
import Home from './componentes/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import SignIn from './pages/login';
import Registrate from './pages/altausuario';
import PasswordInput from './pages/OlvidoContraseña';

function App() {
  const [usuario, setUsuario] = React.useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log('Ya tienen sesion iniciada con:', usuarioFirebase);
      setUsuario(usuarioFirebase);
    });
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          {/*Rutas publicas*/}
          <Route
            path='/home'
            element={usuario ? <Navigate to='/dashboard' /> : <SignIn />}
          />
          <Route
            path='/registro'
            element={usuario ? <Navigate to='/dashboard' /> : <Registrate />}
          />
          <Route
            path='/OlvidoContraseña'
            element={usuario ? <Navigate to='/dashboard' /> : <PasswordInput />}
          />

          {/* Ruta privada (requiere iniciar sesión) */}
          <Route
            path='/dashboard'
            element={usuario ? <Home /> : <Navigate to='/login' />}
          />

          {/* Ruta de inicio de sesión (accesible para usuarios no autenticados) */}
          <Route
            path='/'
            element={
              usuario ? (
                <Navigate to='/dashboard' />
              ) : (
                <Logueo setUsuario={setUsuario} />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
