import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8dlzzt3', 'template_ypy526n', form.current, 'Ha7oog6euHSuqCUSo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">¿LISTO</span>
          <span>PARA MEJORAR</span>
        </div>

        <div>
          <span>TU CUERPO</span>
          <span className="stroke-text">CON NOSOTROS?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="tucorreo@example.com"
          />
          <button className="btn btn-j">Comienza Ahora</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
