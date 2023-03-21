import React from "react";
import Monitor from "./../img/Monitor.jpg";
import Microfono from "./../img/Microfono.jpg";
import Mouse from "./../img/Mouse.jpg";
import Keyboard from "./../img/Keyboard.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductosPage({ nameChange }) {
  return (
    <>
      <section
        class="page-section portfolio"
        id="portfolio"
        style={{ background: "aliceblue", paddingTop: 'calc(6rem + 74px)', }}
      >
        <div>
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
        </div>
        <div class="divider-custom">
          <div class="divider-custom-line" style={{ color: "white" }}></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <div class="container">
          <div class="foto-1">
            <Link to="/Keyboard">
              <img
                onClick={(e) => { nameChange(e.target.name) }}
                name='teclado'
                src={Keyboard}
                className="card-img"
                style={{ padding: "10px" }}
              />
            </Link>
          </div>
          <div class="foto-2">
            <Link to="/Monitor">
              <img
                onClick={(e) => { nameChange(e.target.name) }}
                name='monitor'
                src={Monitor}
                className="card-img"
                style={{ padding: "10px" }}
              />
            </Link>
          </div>
          <div class="foto-3">
            <Link to="/Microfono">
              <img
                onClick={(e) => { nameChange(e.target.name) }}
                name='microfono'
                src={Microfono}
                className="card-img"
                style={{ padding: "10px" }}
              />
            </Link>
          </div>
          <div class="foto-4">
            <Link to="/Mouse">
              <img
                onClick={(e) => { nameChange(e.target.name) }}
                name='mouse'
                src={Mouse}
                className="card-img"
                style={{ padding: "10px" }}
              />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

export default ProductosPage;
