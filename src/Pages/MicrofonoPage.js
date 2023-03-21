import React, { useState, useEffect } from 'react'
import './../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Microfono from './../img/Microfono.jpg'
import Producto from '../components/Producto'

function MicrofonoPage({ appProducto, dataProduct, nameProduct }) {
  const dataUnidades = (datosProducto) => {
    appProducto(datosProducto)
  }
  /* console.log('Productos',productos)
   useEffect(
       ()=>{
           fetch("https://jsonfy.com/items/2")
           .then(res=>res.json())
           .then(data=>{
               console.log("data",data)
               setProductos(data)
           })
       },
       []
   )*/
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
                <img src={Microfono} className="card-img" style={{marginLeft: '10%'}}/>
              </div>
              <div className="col-8">
                <div className="card-body">
                  <h6>Microfono ideal para radio</h6>
                  <div className="card-title h3 text-center">
                    <Producto nameProduct={nameProduct} dataUnidades={dataUnidades} dataProduct={dataProduct} />
                  </div>

                </div>
                <div>
                  <h6>Lo que tenés que saber de este producto:</h6>
                  <hr />
                  <ul>
                    <li>
                      Precio: 7299
                    </li>
                    <li>
                      SKU:WR-524927
                    </li>
                    <li>
                      Formato: estudio.
                    </li>
                    <li>
                      Conector/es de salida: xlrm.
                    </li>
                    <li>
                      Frecuencia máxima: 20000Hz.
                    </li>
                    <li>
                      Frecuencia mínima: 20Hz.
                    </li>
                    <li>
                      Elemento indispensable para tu estudio de grabación.
                    </li>
                    <li>
                      La mejor calidad para tus transmisiones.
                    </li>
                    <li>
                      Alta resolución.
                    </li>
                    {/*<li>{productos.map(producto=><ProductoJson  datos={producto}/>)}</li>*/}
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

export default MicrofonoPage;
