import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import { FiCheckCircle } from "react-icons/fi";


const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Algunas Razones</span>

        <div>
          <span className="stroke-text">¿Por qué</span>
          <span> elegirnos?</span>
        </div>

        <div className="details-r">
          <div>
            <FiCheckCircle color="red" size="30"/>
            <span>MÁS DE +140 ENTRENADORES EXPERTOS</span>
          </div>
          <div>
          <FiCheckCircle color="red" size="30"/>
            <span>ENTRENA DE MANERA MÁS INTELIGENTE Y RÁPIDA QUE ANTES</span>
          </div>
          <div>
          <FiCheckCircle color="red" size="30"/>
            <span>1 PROGRAMA GRATIS PARA NUEVOS MIEMBROS</span>
          </div>
          <div>
          <FiCheckCircle color="red" size="30"/>
            <span>SOCIOS CONFIABLES</span>
          </div>
        </div>

        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          NUESTROS SOCIOS
        </span>

        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
