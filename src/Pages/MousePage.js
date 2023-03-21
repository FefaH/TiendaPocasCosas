import React, { useEffect, useState } from 'react'
import './../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Mouse from './../img/Mouse.jpg'
import Producto from '../components/Producto'
import ProductoJson from './../components/ProductoJson'


function MousePage({ appProducto, dataProduct, nameProduct }) {

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
                <img src={Mouse} className="card-img" style={{marginLeft:'10%'}}/>
              </div>
              <div className="col-8">
                <div className="card-body">
                  <h6>Mouse inalámbrico</h6>
                  <div className="card-title h3 text-center">
                    <Producto nameProduct={nameProduct} dataUnidades={dataUnidades} dataProduct={dataProduct} />
                  </div>

                </div>
                <div>
                  <h6>Lo que tenés que saber de este producto:</h6>
                  <hr />
                  <ul>
                    <li>
                      SKU:ZT-391277
                    </li>
                    <li>
                      Contiene usb inalámbrico.
                    </li>
                    <li>
                      Posee rueda de desplazamiento.
                    </li>
                    <li>
                      Cuenta con 3 botones para un mayor control.
                    </li>
                    <li>
                      Con sensor óptico.
                    </li>
                    <li>
                      Resolución de 1000dpi.
                    </li>
                    <li>
                      Creado para llevar a todas partes.
                    </li>
                    <li>
                      Control inteligente y navegación fácil.
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

export default MousePage;
