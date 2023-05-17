import logo from './logo.svg';
import './App.css';
import AltaUsuario from './altausuario';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './login';


function App() {

  return (
    <Router>
      <Routes>
        <Route path= '/AltaUsuario' element={<AltaUsuario/>}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router>

  );
}
export default App;

