import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AltaUsuario from './altausuario';


function App() {

  return (
    <Router>
      <Routes>
        <Route path= '/altausuario' element={<AltaUsuario/>}/>
      </Routes>
    </Router>
  );
}

export default App;

