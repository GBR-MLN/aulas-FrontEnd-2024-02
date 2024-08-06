import React from "react";
import { Duck } from "./Duck"
import './index.css'

function Conteudo() {
  return (
    <div className="conteudo-container">
      <p>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora vero dolorem fuga sequi eum sit nisi magni, aliquid cupiditate. Architecto magnam neque dicta dignissimos quo quas repudiandae error nulla?</h1>
      </p>
      <div className="img-container">
        <img src="public/imgs/breno.jpg" alt="breno" />
      </div>
      <p>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora vero dolorem fuga sequi eum sit nisi magni, aliquid cupiditate. Architecto magnam neque dicta dignissimos quo quas repudiandae error nulla?</h1>
      </p>
        <Duck />
    </div>
  );
}

export default Conteudo;
