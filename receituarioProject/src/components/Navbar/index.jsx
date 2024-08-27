import React from "react";
import Button from "react-bootstrap/Button";
import "./index.css";
import { Lupa } from "./Lupa";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          src="public\logoReceituario.png"
          alt="logo-receituario"
          id="logoReceituario"
        />
      </div>
      <div className="navbar">
        <Button variant="success" id="addButton">
          Adicionar Receita
        </Button>{" "}
        <input type="text" id="inputSearch" placeholder="Pesquisar" />
        <Lupa color="white" />
      </div>
    </div>
  );
}

export default Navbar;
