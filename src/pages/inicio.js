import React from 'react';
import '../styles/inicio.css';

function Inicio(){
    return(
        <>  <div>
                <h1>Living Slate</h1>
            </div>
                  
            <div class="spinner-overlay">
                <div class="spinner"></div>
            </div>
        </>
        
    );

      
}
     // Para mostrar el spinner de carga
        function showLoader() {
            document.querySelector('.spinner-overlay').style.display = 'block';
        }

      // Para ocultar el spinner de carga
        function hideLoader() {
             document.querySelector('.spinner-overlay').style.display = 'none';
        }

      // Ejemplo de uso: Mostrar el spinner durante 3 segundos y luego ocultarlo
    showLoader();

    setTimeout(function() {
            hideLoader();
        }, 3000); // Ejemplo de tiempo de carga de 3 segundos
export default Inicio;