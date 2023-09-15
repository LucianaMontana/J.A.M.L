import React from 'react';
/* import { render, screen } from '@testing-library/react';
import App from '../App'; */
import '../App.css';
import { Grid } from '@mui/material';

function prueba() {
    return (
        <Grid container className="background-image">
            <form className="loginForm form1 w-full max-w-sm">
                <div className=" loginForm md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    </div>
                    <div className="md:w-2/3">
                        <form className="form1">
                            <input className="palta paltita input1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Ingrese Gmail"></input>
                            <label className="gmail1">
                                <span className="gmail2">

                                </span>
                            </label>
                        </form>
                        <input className="palta bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Gmail"></input>
                    </div>
                </div>
                <div className="loginForm md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    </div>
                    <label className="md:w-2/3 block text-gray-500 font-bold">
                        <input className="mr-2 leading-tight" type="checkbox"></input>
                        <span className="text-sm">
                            guardar informacion
                        </span>
                    </label>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="boton1 boton2 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Enviar
                        </button>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">

                        </button>
                    </div>
                </div>
            </form>
        </Grid>
    );
}

export default prueba;
