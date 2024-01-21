import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back1 from "../../assets/hero_image_back1.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: "3" };
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "180px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
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
          <button className="btn">Comienza Ahora</button>
          <button className="btn">Aprende más</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Inscríbete ahora</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="heart" />
          <span>Frecuencia cardíaca</span>
          <span>120 ppm</span>
        </motion.div>

        {/* Imagenes Hero */}

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "12rem" }}
          transition={transition}
          src={hero_image_back1}
          alt=""
          className="hero-image-back"
        />

        {/* Calorias */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Calorias Quemadas</span>
            <span>1200 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
