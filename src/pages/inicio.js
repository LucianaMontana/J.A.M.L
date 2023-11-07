import React from 'react';
import '../styles/inicio.css';

function Inicio(){

    return(
        <>    
             <div>
                <h1>Bienvenido a </h1>
                <h1>Living Slate</h1>
            </div>              
            <div class="spinner"></div>
            <div>
                <h2>Cargando...</h2>
            </div> 
        </>  
    );
}

export default Inicio;