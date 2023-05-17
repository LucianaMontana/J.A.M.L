import { render, screen } from '@testing-library/react';
import logo from './logo.svg';
import App from './App';
import './App.css';

function AltaUsuario() {
  return(
<div class="w-full max-w-xs">
  <form className ="alta bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
     
      <input className="class shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nombre"></input>
    </div>
    <div className="mb-6">
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Apellido"  placeholder="Apellido"></input>
      
    </div>
    <div classNameN="mb-6">
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="DNI"  placeholder="DNI"></input>
      
    </div>
    <div classNameN="mb-6">
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Telefono"  placeholder="Telefono"></input>
      
    </div>
    <div className="flex items-center justify-between">
      <button className="Boton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Enviar
      </button>
    </div>
    <div>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Tenes una cuenta?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
  )
}
export default AltaUsuario;