import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MicrofonoPage from './Pages/MicrofonoPage';
import Menu from './components/Menu';
import MonitorPage from './Pages/MonitorPage';
import ProductosPage from './Pages/ProductosPage';
import InicioPage from './Pages/InicioPage';
import MousePage from './Pages/MousePage';
import Keyboard from './Pages/KeyboardPage';
import RegistroPage from './Pages/RegistroPage';
import AboutPage from './Pages/AboutPage';
import ProductosForm from './Pages/ProductosForm';

const dataProduct = [
  {
    id: 1,
    unidades: 0,
    precio: 4690,
    producto: 'Mouse'
  },
  {
    id: 2,
    unidades: 0,
    precio: 7299,
    producto: 'Microfono'
  },
  {
    id: 3,
    unidades: 0,
    precio: 11633,
    producto: 'Teclado'
  },
  {
    id: 4,
    unidades: 0,
    precio: 89999,
    producto: 'Monitor'
  }
]

function App() {
  const [productData, setProductData] = useState('')
  const [nameProduct, setNameProduct] = useState('')

  const appProduct = (appProducto) => {
    setProductData(appProducto)
  }
  const nameChange = (productName) => {
    setNameProduct(productName)

  }
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Route path="/imagenesDeProductos" exact render={({}) => {
          return <ProductosPage nameChange={nameChange}/>
        }} />
        <Route path="/Microfono" render={({ }) => {
          return <MicrofonoPage appProducto={appProduct} nameProduct={nameProduct} dataProduct={dataProduct[1]} />
        }} />
        <Route path="/Monitor" exact render={({ }) => {
          return <MonitorPage appProducto={appProduct} nameProduct={nameProduct} dataProduct={dataProduct[3]}/>
        }} />
        <Route path="/Mouse" exact render={({ }) => {
          return <MousePage appProducto={appProduct} nameProduct={nameProduct} dataProduct={dataProduct[0]}/>
        }} />
        <Route path="/Keyboard" exact render={({ }) => {
          return <Keyboard appProducto={appProduct} nameProduct={nameProduct} dataProduct={dataProduct[2]}/>
        }} />
        <Route path="/" exact component={InicioPage} />
        <Route path="/Registro" exact component={RegistroPage} />
        <Route path="/About" exact component={AboutPage} />
        <Route path="/ProductosForm" exact render={({ }) => {
          return <ProductosForm dataProductos={productData} />
        }} />

      </div>
    </BrowserRouter>
  );
}

export default App;
