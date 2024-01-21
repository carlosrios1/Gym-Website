import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from '../../assets/whiteTick.png'
import { FaArrowRight } from "react-icons/fa6";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">LISTO PARA INICIAR</span>
        <span>TU CAMINO</span>
        <span className="stroke-text">CON NOSOTROS</span>
      </div>

      {/* Plans Card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>L. {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                    <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>
                Ver más beneficios <FaArrowRight />
              </span>
            </div>

            <button className="btn">Comienza Ahora</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;