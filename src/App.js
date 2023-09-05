import logo from './logo.svg';
import './App.css';
import AltaUsuario from './AltaUsuario';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './login';
import home from './home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path= '/AltaUsuario' element={<AltaUsuario/>}/>
        <Route path= '/login' element={<Login />}/>
        <Route path= '/home' element={<home />}/>
      </Routes>
    </Router>

  );
}
export default App;

