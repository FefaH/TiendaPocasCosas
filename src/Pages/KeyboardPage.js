import React, { useState, useEffect } from 'react'
import './../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Keyboard from './../img/Keyboard.jpg'
import Producto from '../components/Producto'
import ProductoJson from './../components/ProductoJson'

function KeyboardPage({ appProducto, dataProduct, nameProduct }) {

    const dataUnidades = (datosProducto) => {
        appProducto(datosProducto)
    }
    return (
        <div>
            <div className="row">
                <div className="col-12" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '5%'
                }}>
                    <div className="card mt-5" style={{ maxWidth: '370px' }}>
                        <div className="row no-gutters">
                            <div className="col-4">
                                <img src={Keyboard} className="card-img"  style={{marginLeft: '10%'}}/>
                            </div>
                            <div className="col-8">
                                <div className="card-body">
                                    <h6>Teclado bluetooth Satechi Slim</h6>
                                    <div className="card-title h3 text-center">
                                        <Producto nameProduct={nameProduct} dataUnidades={dataUnidades} dataProduct={dataProduct} />
                                    </div>

                                </div>
                                <div>
                                    <h6>Lo que tenés que saber de este producto:</h6>
                                    <hr />
                                    <ul>
                                        <li>
                                            Conectividad con múltiples dispositivos.
                                        </li>
                                        <li>
                                            Contiene teclado numérico.
                                        </li>
                                        <li>
                                            Tecla plana.
                                        </li>
                                        <li>
                                            Con conector USB-C.
                                        </li>
                                        <li>
                                            Con cable removible.
                                        </li>
                                        <li>
                                            Medidas: 16.65" de ancho, 4.5" de alto y 0.4" de profundidad.
                                        </li>
                                        <li>
                                            Indispensable para tus actividades.
                                        </li>
                                        <li>
                                            Las imágenes pueden ser ilustrativas.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default KeyboardPage;
