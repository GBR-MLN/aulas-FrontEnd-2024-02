import React from "react";
import { Navbar } from "../Navbar";

function Body() {
  return (
    <>
      <Navbar />
      <div>
        <div className="receitas-container">
            <div className="receitas-card"></div>
        </div>
      </div>
    </>
  );
}

export default Body;
