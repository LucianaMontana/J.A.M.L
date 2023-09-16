import React from 'react';
import Logueo from './componentes/logueo/Logueo';
import Home from './componentes/home/Home';
import Prueba from './pages/prueba';
import { app } from './componentes/firebase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/login';
import home from './home';


function App() {

  const [usuario, setUsuario] = React.useState(null);

  return (
    
          <Router>
        <Routes>
          <Route path='/prueba' element={<Prueba />} />
          <Route path='/' element={<SignIn />} />
          <Route path= '/home' element={<Home />}/>


        </Routes>
      </Router>
    
  );
}
export default App;

