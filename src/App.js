import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import AltaUsuario from './altausuario';
=======
import AltaUsuario from './AltaUsuario';
>>>>>>> d76d4291e1ab41437b5d9d72135e1804426a7baf
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './login';


function App() {

  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path= '/altausuario' element={<AltaUsuario/>}/>
=======
        <Route path= '/AltaUsuario' element={<AltaUsuario/>}/>
>>>>>>> d76d4291e1ab41437b5d9d72135e1804426a7baf
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router>

  );
}
export default App;

