import React from "react";
import "./index.css";

function Produtos() {
  return (
    <div className="produtos-container">
        <div className="convite-container">
            <h1 id="title-convite">Grande Reabertura</h1>
            <h4 id="text-convite">Estamos de volta com novidades e sob nova direção!</h4>
        </div>
      <div className="produtos-grid">
        <div className="text-products-container">
          <h2 id="text-products">
            Os primeiros 100 clientes presentes na inauguração receberam
            merchandise da Farmárcia
          </h2>
        </div>
        <div className="imgs-container">
          <img
            src="public/imgs/farmarcia-camiseta.png"
            alt="foto-camiseta-1"
            className="imgs-produtos"
            id="img1"
          />
          <img
            src="public/imgs/farmarcia-camisetas.png"
            alt="foto-camiseta-2"
            className="imgs-produtos"
            id="img2"
          />
        </div>
      </div>
    </div>
  );
}

export default Produtos;
