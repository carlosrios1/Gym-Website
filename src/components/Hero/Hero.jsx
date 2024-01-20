import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back1 from "../../assets/hero_image_back1.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>El mejor gym en la ciudad</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Construye </span>
            <span>Tu</span>
          </div>
          <div>
            <span>Cuerpo Ideal</span>
          </div>
          <div>
            <span>
              Aquí te ayudaremos a dar forma y construir tu cuerpo ideal, y a
              vivir tu vida al máximo.
            </span>
          </div>
        </div>

        {/* Figuras */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Entrenadores expertos</span>
          </div>
          <div>
            <span>+978</span>
            <span>Miembros</span>
          </div>
          <div>
            <span>+50</span>
            <span>Programas Fitness</span>
          </div>
        </div>

        {/* Botones Hero */}
        <div className="hero-buttons">
          <buttons className="btn">Comienza Ahora</buttons>
          <buttons className="btn">Aprende más</buttons>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Inscríbete ahora</button>

        <div className="heart-rate">
          <img src={heart} alt="heart" />
          <span>Frecuencia cardíaca</span>
          <span>120 ppm</span>
        </div>

        {/* Imagenes Hero */}

        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back1} alt="" className="hero-image-back" />

        {/* Calorias */}
        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calorias Quemadas</span>
            <span>1200 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
