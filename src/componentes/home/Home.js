import React from 'react';
// Credencial de Firebase
import { app } from '../firebase';

export default function Home() {
  const cerrarSesion = () => {
    app.auth().signOut();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <button>Bienvenido</button>
      <h1>Bienvenido, Sesion Iniciada</h1>
      <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </div>
  );
}
