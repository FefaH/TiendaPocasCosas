import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary" id="mainNav" style={{color: '#212529', }}>
        {/* <div className="container-fluid">
    <a class="navbar-brand" href="#"><Link to="/">Tienda Pocas Cosas</Link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"><Link to="/imagenesDeProductos">Productos</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"><Link to="/Registro">Log In</Link></a>
        </li>
      </ul>
     
    </div>
  </div> */}
        <div className="container">
          <a className="navbar-brand" href="#">
          <Link to="/">
            Tienda 
          </Link>
          </a>
          <button
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded">
                <Link to="/imagenesDeProductos">Productos</Link>
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded">
                <Link to="/about">About us</Link>
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded">
                <Link to="/ProductosForm">Productos</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
/*<ul>
                <li>Inicio</li>
                <li></li>
                <li><Link to="/monitor">Monitor</Link></li>
            </ul>*/
