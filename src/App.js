import React, { useEffect } from 'react';
//Credencial de Firebase
import { app } from './componentes/firebase';
//Components
import Logueo from './componentes/logueo/Logueo';
import Home from './componentes/home/Home';

/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/login';
import Registrate from './pages/altausuario';*/


function App() {

  const [usuario, setUsuario] = React.useState(null);

  //Recarga pagina siga con la sesion iniciada
  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("Ya tienen sesion iniciada con:", usuarioFirebase);
      setUsuario(usuarioFirebase);
    })
  } ,[])

  return(

    <div>
      {usuario ? <Home /> : <Logueo setUsuario={setUsuario} />}
    </div>

    /*
      <Router>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/registro' element={<Registrate />} />
        </Routes>
      </Router>  
    */
  );
}
export default App;

