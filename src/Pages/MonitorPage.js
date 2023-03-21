import React, { useState, useEffect } from 'react'
import './../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Monitor from './../img/Monitor.png'
import Producto from './../components/Producto'
import ProductoJson from './../components/ProductoJson'

function MonitorPage({ appProducto, dataProduct, nameProduct }) {
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
                <img src={Monitor} className="card-img" style={{marginLeft: '10%'}}/>
              </div>
              <div className="col-8">
                <div className="card-body">
                  <h6>Monitor gamer generico</h6>
                  <div className="card-title h3 text-center">
                    <Producto nameProduct={nameProduct} dataUnidades={dataUnidades} dataProduct={dataProduct} />
                  </div>

                </div>
                <div>
                  <h6>Lo que tenés que saber de este producto:</h6>
                  <hr />
                  <ul>
                    <li>
                      SKU:PM-185670
                    </li>
                    <li>
                      Pantalla led de 24 ".
                    </li>
                    <li>
                      Tiene una resolución de 1920px-1080px.
                    </li>
                    <li>
                      Relación de aspecto de 16:9.
                    </li>
                    <li>
                      Panel IPS.
                    </li>
                    <li>
                      Su brillo es de 250cd/m².
                    </li>
                    <li>
                      Tipos de conexión: D-Sub, HDMI 1.4.
                    </li>
                    <li>
                      Alta resolución.
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

export default MonitorPage;
